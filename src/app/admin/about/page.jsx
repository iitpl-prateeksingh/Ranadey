"use client";
import { useState, useEffect } from "react";
import { BiImage, BiUpload, BiSave, BiX } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
import { apiRequest, uploadFile } from "../../../services/api";

export default function HomePageManager() {
  /* =========================
      SECTION 1 STATE
  ========================== */
  const [imagePreview, setImagePreview] = useState(null);
  const [mobileImagePreview, setMobileImagePreview] = useState(null);
  const [imagePreviewFile, setImagePreviewFile] = useState(null);
  const [mobileImagePreviewFile, setMobileImagePreviewFile] = useState(null);

  /* =========================
      SECTION 2 STATE
  ========================== */
  const [box1Icon, setBox1Icon] = useState(null);
  const [box1Title, setBox1Title] = useState("");
  const [box1IconFile, setBox1IconFile] = useState(null);

  /* =========================
      SEO STATE
  ========================== */
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [pageStatus, setPageStatus] = useState(true);

  /* =========================
      CONTENT STATE (FIXED)
  ========================== */
  const [section1, setSection1] = useState("");
  const [section2, setSection2] = useState("");
  const [banner2, setBanner2] = useState("");
  const [banner3, setBanner3] = useState("");

  /* =========================
      HANDLERS
  ========================== */
  const handleMobileImageUpload = (e, setState, setFileState) => {
    const file = e.target.files[0];
    if (!file) return;

    if (setFileState) setFileState(file);

    const reader = new FileReader();
    reader.onloadend = () => setState(reader.result);
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e, setState, setFileState) => {
    const file = e.target.files[0];
    if (!file) return;

    if (setFileState) setFileState(file);

    const reader = new FileReader();
    reader.onloadend = () => setState(reader.result);
    reader.readAsDataURL(file);
  };

  const handleIconPreview = (file, setState, setFileState) => {
    if (!file) return;

    if (setFileState) setFileState(file);

    const reader = new FileReader();
    reader.onloadend = () => setState(reader.result);
    reader.readAsDataURL(file);
  };

  /* =========================
      SAVE
  ========================== */
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      let iconUrl = "";
      let banner1Url = "";
      let mobileBannerUrl = "";

      if (box1IconFile) {
        const res = await uploadFile(box1IconFile, "image");
        iconUrl = res.data.url;
      } else if (box1Icon && !box1Icon.startsWith("data:")) {
        iconUrl = box1Icon;
      }
      // Banner 1 Upload
      if (imagePreviewFile) {
        const res = await uploadFile(imagePreviewFile, "image");
        banner1Url = res.data.url;
      } else if (imagePreview && !imagePreview.startsWith("data:")) {
        banner1Url = imagePreview;
      }

      // Mobile Banner Upload
      if (mobileImagePreviewFile) {
        const res = await uploadFile(mobileImagePreviewFile, "image");
        mobileBannerUrl = res.data.url;
      } else if (
        mobileImagePreview &&
        !mobileImagePreview.startsWith("data:")
      ) {
        mobileBannerUrl = mobileImagePreview;
      }

      const payload = {
        pageTitle: "About Us",
        pageStatus: pageStatus,

        seo: {
          metaTitle: metaTitle || "",
          metaDescription: metaDescription || "",
          metaKeywords: metaKeywords || [],
        },
        content: {
          banner1: banner1Url,
          mobileBanner1: mobileBannerUrl,

          banner2: banner2,
          banner3: banner3,

          section1: section1,
          section2: section2,

          featureImage: iconUrl,
          featureText: box1Title,
        },
      };

      console.log("FINAL PAYLOAD", payload);

      const res = await apiRequest("/pages/aboutpage", {
        method: "PUT",
        body: payload,
      });

      if (res.success) {
        alert("Saved Successfully ✅");
      } else {
        alert(res.message || "Error");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  /* =========================
      SEO KEYWORDS
  ========================== */
  const handleKeywordKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const val = keywordInput.trim();
      if (val && !metaKeywords.includes(val)) {
        setMetaKeywords([...metaKeywords, val]);
      }
      setKeywordInput("");
    }
  };

  const removeKeyword = (index) => {
    const updated = [...metaKeywords];
    updated.splice(index, 1);
    setMetaKeywords(updated);
  };

  /* =========================
      QUILL INIT
  ========================== */
  const { quill: quillAbout, quillRef: quillRefAbout } = useQuill({
    theme: "snow",
  });
  const { quill: quillBanner, quillRef: quillRefBanner } = useQuill({
    theme: "snow",
  });
  const { quill: quillline1, quillRef: quillRefLine1 } = useQuill({
    theme: "snow",
  });
  const { quill: quillline2, quillRef: quillRefLine2 } = useQuill({
    theme: "snow",
  });

  /* =========================
      QUILL LISTENERS
  ========================== */
  useEffect(() => {
    if (quillAbout) {
      quillAbout.on("text-change", () => {
        setSection1(quillAbout.root.innerHTML);
      });
    }
  }, [quillAbout]);

  useEffect(() => {
    if (quillBanner) {
      quillBanner.on("text-change", () => {
        setSection2(quillBanner.root.innerHTML);
      });
    }
  }, [quillBanner]);

  useEffect(() => {
    if (quillline1) {
      quillline1.on("text-change", () => {
        setBanner2(quillline1.root.innerHTML);
      });
    }
  }, [quillline1]);

  useEffect(() => {
    if (quillline2) {
      quillline2.on("text-change", () => {
        setBanner3(quillline2.root.innerHTML);
      });
    }
  }, [quillline2]);

  /* =========================
      FETCH DATA
  ========================== */
  useEffect(() => {
    const fetchData = async () => {
      const res = await apiRequest("/pages/aboutpage");

      if (res.success && res.data) {
        const { seo, contentRef } = res.data;

        setMetaTitle(seo.metaTitle || "");
        setMetaDescription(seo.metaDescription || "");
        setMetaKeywords(seo.metaKeywords || []);

        setImagePreview(contentRef.banner1 || null);
        setMobileImagePreview(contentRef.mobileBanner1 || null);
        setBox1Icon(contentRef.featureImage || null);
        setBox1Title(contentRef.featureText || "");
        setSection1(contentRef.section1 || "");
        setSection2(contentRef.section2 || "");
        setBanner2(contentRef.banner2 || "");
        setBanner3(contentRef.banner3 || "");

        if (quillAbout) quillAbout.root.innerHTML = contentRef.section1 || "";
        if (quillBanner) quillBanner.root.innerHTML = contentRef.section2 || "";
        if (quillline1) quillline1.root.innerHTML = contentRef.banner2 || "";
        if (quillline2) quillline2.root.innerHTML = contentRef.banner3 || "";
      }
    };

    fetchData();
  }, [quillAbout, quillBanner, quillline1, quillline2]);

  return (
    <>
      <div className="mb-2">
        <div className="dashboard-header mb-0">
          <h1>About Page Manager</h1>
        </div>

        <p className="text-secondary">Manage About page content</p>
      </div>
      <div className="">
        <div className="page-content">
          <form onSubmit={handleSave}>
            <div className="form-boxmain">
              {/* ================= SECTION 1 ================= */}
              <h5 className="mb-4 fw-bold">Section 1 - Hero Section</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      About us Banner image upload
                    </label>
                    {imagePreview ? (
                      <div className="position-relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="img-fluid rounded-3"
                          style={{
                            maxHeight: "250px",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                          onClick={() => setImagePreview(null)}
                        >
                          <BiX />
                        </button>
                      </div>
                    ) : (
                      <div className="border rounded-3 text-center p-4">
                        <BiImage size={50} className="text-secondary mb-2" />
                        <p className="text-secondary">No image selected</p>
                      </div>
                    )}
                    <small className="text-muted d-block mt-2">
                      Recommended: 800x1400px (.webp)
                    </small>
                    <label className="btn btn-outline-primary mt-3 w-100">
                      <BiUpload className="me-2" />
                      Choose Image
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          handleImageUpload(
                            e,
                            setImagePreview,
                            setImagePreviewFile,
                          )
                        }
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      About us Mobile Banner image upload
                    </label>
                    {mobileImagePreview ? (
                      <div className="position-relative">
                        <img
                          src={mobileImagePreview}
                          alt="Mobile Preview"
                          className="img-fluid rounded-3"
                          style={{
                            maxHeight: "250px",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                          onClick={() => setMobileImagePreview(null)}
                        >
                          <BiX />
                        </button>
                      </div>
                    ) : (
                      <div className="border rounded-3 text-center p-4">
                        <BiImage size={50} className="text-secondary mb-2" />
                        <p className="text-secondary">No image selected</p>
                      </div>
                    )}
                    <small className="text-muted d-block mt-2">
                      Recommended: 800x1400px (.webp)
                    </small>
                    <label className="btn btn-outline-primary mt-3 w-100">
                      <BiUpload className="me-2" />
                      Choose Image
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          handleMobileImageUpload(
                            e,
                            setMobileImagePreview,
                            setMobileImagePreviewFile,
                          )
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-boxmain">
              <h5 className="mb-4 fw-bold">Section 2 - Info Boxes</h5>
              <div className="row">
                <div className="col-md-4">
                  <Card className="border-0 ">
                    <div className="mb-3">
                      <label className="form-label fw-bold">Image</label>
                      {box1Icon ? (
                        <div className="position-relative text-center mb-3">
                          <img
                            src={box1Icon}
                            alt="Preview"
                            className="img-fluid rounded-3"
                            style={{ maxHeight: "100px" }}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-danger position-absolute top-0 end-0"
                            onClick={() => setBox1Icon(null)}
                          >
                            <BiX />
                          </button>
                        </div>
                      ) : (
                        <div className="border rounded-3 text-center p-4">
                          <BiImage size={50} className="text-secondary mb-2" />
                          <p className="text-secondary">No image selected</p>
                        </div>
                      )}
                      <small className="text-muted d-block mt-2">
                        Recommended: 400x400px (.webp)
                      </small>
                      <label className="btn btn-outline-primary w-100 mt-2">
                        <BiUpload className="me-2" /> Choose Icon
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={(e) =>
                            handleIconPreview(
                              e.target.files[0],
                              setBox1Icon,
                              setBox1IconFile,
                            )
                          }
                        />
                      </label>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Image Title</label>
                      <input
                        type="text"
                        className="form-control"
                        value={box1Title}
                        onChange={(e) => setBox1Title(e.target.value)}
                      />
                    </div>
                  </Card>
                </div>
                <div className="col-md-8">
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      About Description
                    </label>
                    <div
                      ref={quillRefAbout}
                      style={{ height: "250px", background: "#fff" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-boxmain">
              <h5 className="mb-4 fw-bold">Section 3 - banner 2</h5>
              <div className="row">
                <div className="col-md-12">
                  <div
                    ref={quillRefLine1}
                    style={{ height: "250px", background: "#fff" }}
                  />
                </div>
              </div>
            </div>

            <div className="form-boxmain">
              <h5 className="mb-4 fw-bold">Section 3 - banner 2 (Content)</h5>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      About Description
                    </label>
                    <div
                      ref={quillRefBanner}
                      style={{ height: "250px", background: "#fff" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-boxmain">
              <h5 className="mb-4 fw-bold">Section 3 - banner 2</h5>
              <div className="row">
                <div className="col-md-12">
                  <div
                    ref={quillRefLine2}
                    style={{ height: "250px", background: "#fff" }}
                  />
                </div>
              </div>
            </div>
            <div className="form-boxmain">
              <div className="row">
                <div className="col-12">
                  <div>
                    <h5 className="mb-4 fw-bold">Section 3 - SEO Settings</h5>
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <h6> Page Status</h6>
                      <label>
                        <input
                          className="toggle-checkbox"
                          type="checkbox"
                          checked={pageStatus}
                          onChange={(e) => setPageStatus(e.target.checked)}
                        />
                        <div className="toggle-slot">
                          <div className="sun-icon-wrapper">
                            <div
                              className="iconify sun-icon"
                              data-icon="feather-sun"
                              data-inline="false"
                            ></div>
                          </div>
                          <div className="toggle-button"></div>
                          <div className="moon-icon-wrapper">
                            <div
                              className="iconify moon-icon"
                              data-icon="feather-moon"
                              data-inline="false"
                            ></div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-bold">Page Title</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-bold">Meta Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Meta Description
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-4">
                    <label className="form-label fw-bold">Meta Keywords</label>
                    <div className="form-control d-flex flex-wrap gap-2 p-2">
                      {metaKeywords.map((keyword, index) => (
                        <div
                          key={index}
                          className="badge bg-primary d-flex align-items-center px-3 py-2"
                          style={{ fontSize: "14px" }}
                        >
                          {keyword}
                          <span
                            className="ms-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => removeKeyword(index)}
                          >
                            ✕
                          </span>
                        </div>
                      ))}
                      <input
                        type="text"
                        className="border-0 flex-grow-1"
                        style={{ outline: "none", minWidth: "150px" }}
                        placeholder="Type keyword and press Enter"
                        value={keywordInput}
                        onChange={(e) => setKeywordInput(e.target.value)}
                        onKeyDown={handleKeywordKeyDown}
                      />
                    </div>
                    <small className="text-muted">
                      Press Enter or comma to add keyword
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-end mt-4">
              <Button type="submit" variant="primary" className="px-4">
                <BiSave className="me-2" /> Save All Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
