"use client";
import { useState, useEffect } from "react";
import { ENDPOINTS } from "../../../services/apiEndpoint";
import { BiVideo, BiImage, BiUpload, BiSave, BiX } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { updateHomepage, getHomepage } from "../../../services/homepage.js";
import { apiRequest } from "../../../services/api.js";
import BASE_URL from "../../../services/BaseUrl";

const BACKEND_URL = BASE_URL.replace(/\/$/, "");

const getFullImageUrl = (imagePath) => {
  if (!imagePath) return "";

  // 1. If image is already a full URL (http...) or Base64 (data:image...)
  if (imagePath.startsWith("http") || imagePath.startsWith("data:image")) {
    return imagePath;
  }

  // 2. For relative paths (/uploads/...), prepend backend URL
  return `${BACKEND_URL}${imagePath}`;
};

export default function HomePageManager() {
  const [featureText, setFeatureText] = useState("");
  const [pageStatus, setPageStatus] = useState();
  const [pageTitle, setPageTitle] = useState("");
  const [videoPreview, setVideoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [box1Icon, setBox1Icon] = useState(null);
  const [box1Title, setBox1Title] = useState("");
  const [box1File, setBox1File] = useState(null);

  const [box2Icon, setBox2Icon] = useState(null);
  const [box2Title, setBox2Title] = useState("");
  const [box2File, setBox2File] = useState(null);

  const [box3Icon, setBox3Icon] = useState(null);
  const [box3Title, setBox3Title] = useState("");
  const [box3File, setBox3File] = useState(null);

  const [metaKeywords, setMetaKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoPreview(videoURL);
      setVideoFile(file);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleIconPreview = (file, setState, setFileState) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setState(reader.result);
    };
    reader.readAsDataURL(file);
    if (setFileState) setFileState(file);
  };

  const uploadMedia = async (file, type) => {
    if (!file) return null;
    // If already a string (URL or relative path), return as is
    if (typeof file === "string") {
      // If it's a relative path, return the full URL
      if (!file.startsWith("http") && !file.startsWith("data:")) {
        return getFullImageUrl(file);
      }
      return file;
    }

    // Upload file to server
    const formData = new FormData();
    formData.append(type, file);

    const endpoint =
      type === "image" ? ENDPOINTS.UPLOAD_IMAGE : ENDPOINTS.UPLOAD_VIDEO;
    const res = await apiRequest(endpoint, { method: "POST", body: formData });

    // Return full URL with backend prefix if needed
    const uploadedUrl = res?.data?.url || null;
    if (uploadedUrl && !uploadedUrl.startsWith("http")) {
      return `${BACKEND_URL}${uploadedUrl}`;
    }
    return uploadedUrl;
  };

  const handleSave = async () => {
    try {
      // Upload files and get only URLs (not Base64)
      const bgVideoUrl = await uploadMedia(videoFile, "video");
      const featureImageUrl = await uploadMedia(imageFile, "image");

      const box1IconUrl = await uploadMedia(box1File, "image");
      const box2IconUrl = await uploadMedia(box2File, "image");
      const box3IconUrl = await uploadMedia(box3File, "image");

      const payload = {
        pageTitle: pageTitle,
        seo: {
          metaTitle: metaTitle,
          metaDescription: metaDescription,
          metaKeywords: metaKeywords,
        },
        pageStatus: pageStatus,
        content: {
          bgVideo: bgVideoUrl, // Send URL only (not Base64)
          featureText: featureText,
          featureImage: featureImageUrl, // Send URL only (not Base64)
          coreIdea: [
            { title: box1Title, image: box1IconUrl || box1Icon },
            { title: box2Title, image: box2IconUrl || box2Icon },
            { title: box3Title, image: box3IconUrl || box3Icon },
          ],
        },
      };

      console.log("Payload:", payload);

      const result = await updateHomepage(payload);

      if (result?.success) {
        alert("Homepage updated successfully!");
      } else {
        console.error("Save failed:", result);
        alert("Save failed");
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert(error.message || "Update failed");
    }
  };

  const handleKeywordKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      const trimmed = keywordInput.trim();

      if (trimmed && !metaKeywords.includes(trimmed)) {
        setMetaKeywords([...metaKeywords, trimmed]);
      }

      setKeywordInput("");
    }
  };

  const removeKeyword = (index) => {
    const updated = [...metaKeywords];
    updated.splice(index, 1);
    setMetaKeywords(updated);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getHomepage();

        const payload = res?.data || res || {};
        const content = payload.contentRef || {};
        console.log(
          "Loaded homepage data:",
          payload,
          "******content",
          payload.contentRef,
        );
        setFeatureText(content.featureText || "");
        setPageTitle(content.pageTitle || payload.pageTitle || "");

        setVideoPreview(content?.bgVideo?.url || content?.bgVideo || null);
        setVideoFile(content?.bgVideo?.url || content?.bgVideo || null);

        setImagePreview(
          content?.featureImage?.url || content?.featureImage || null,
        );
        setImageFile(
          content?.featureImage?.url || content?.featureImage || null,
        );
        setPageStatus(payload.pageStatus || "draft");

        const core = content.coreIdea || [];
        if (Array.isArray(core)) {
          setBox1Title(core[0]?.title || "");
          setBox1Icon(core[0]?.image || null);
          setBox1File(core[0]?.image || null);

          setBox2Title(core[1]?.title || "");
          setBox2Icon(core[1]?.image || null);
          setBox2File(core[1]?.image || null);

          setBox3Title(core[2]?.title || "");
          setBox3Icon(core[2]?.image || null);
          setBox3File(core[2]?.image || null);
        }

        const seo = payload.seo || {};
        setMetaTitle(seo.metaTitle || "");
        setMetaDescription(seo.metaDescription || "");
        // Fix: metaKeywords may already be an array from backend
        const keywords = seo.metaKeywords;
        setMetaKeywords(
          Array.isArray(keywords)
            ? keywords
            : keywords?.split(",")?.map((k) => k.trim()) || [],
        );
      } catch (err) {
        console.error("Failed to load homepage data:", err);
      }
    };

    load();
  }, []);

  return (
    <>
      <div className="mb-2">
        <div className="dashboard-header mb-0">
          <h1>Home Page Manager</h1>
        </div>

        <p className="text-secondary">Manage homepage hero section content</p>
      </div>

      <div className=" ">
        <div className="page-content">
          <form action="">
            <div className="form-boxmain">
              {/* ================= SECTION 1 ================= */}

              <h5 className="mb-4 fw-bold">Section 1 - Hero Section</h5>

              {/* Hero Title */}
              <div className="mb-4">
                <label className="form-label fw-bold">Hero Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter homepage title"
                  value={featureText}
                  onChange={(e) => setFeatureText(e.target.value)}
                />
              </div>

              <div className="row">
                <div className="col-md-6">
                  {/* Background Video */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      Upload Background Video
                    </label>

                    {videoPreview ? (
                      <div className="position-relative">
                        <video
                          src={getFullImageUrl(videoPreview)}
                          controls
                          className="w-100 rounded-3"
                          style={{ maxHeight: "300px", objectFit: "cover" }}
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                          onClick={() => {
                            setVideoPreview(null);
                            setVideoFile(null);
                          }}
                        >
                          <BiX />
                        </button>
                      </div>
                    ) : (
                      <div className="border rounded-3 text-center p-4">
                        <BiVideo size={50} className="text-secondary mb-2" />
                        <p className="text-secondary">No video selected</p>
                      </div>
                    )}
                    <small className="text-muted d-block mt-2">
                      Recommended: 800x1400px (.mp4)
                    </small>
                    <label className="btn btn-outline-primary mt-3 w-100">
                      <BiUpload className="me-2" />
                      Choose Video
                      <input
                        type="file"
                        accept="video/*"
                        hidden
                        onChange={handleVideoUpload}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Side Image */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      Upload Side Image
                    </label>

                    {imagePreview ? (
                      <div className="position-relative">
                        <img
                          src={getFullImageUrl(imagePreview)}
                          alt="Preview"
                          className="img-fluid rounded-3"
                          style={{ maxHeight: "250px", objectFit: "cover" }}
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                          onClick={() => {
                            setImagePreview(null);
                            setImageFile(null);
                          }}
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
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-boxmain">
              {/* ================= SECTION 2 ================= */}
              <h5 className="mb-4 fw-bold">Section 2 - Info Boxes</h5>
              <div className="row">
                <div className="col-md-4">
                  {/* ========== BOX 1 ========== */}
                  <Card className="p-3 mb-3 border-0 shadow-sm rounded-4">
                    <h6 className="fw-bold mb-3">Box 1</h6>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Icon Image</label>
                      {box1Icon ? (
                        <div className="position-relative text-center mb-3">
                          <img
                            src={getFullImageUrl(box1Icon)}
                            alt="Preview"
                            className="img-fluid rounded-3"
                            style={{ maxHeight: "100px" }}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-danger position-absolute top-0 end-0"
                            onClick={() => {
                              setBox1Icon(null);
                              setBox1File(null);
                            }}
                          >
                            <BiX />
                          </button>
                        </div>
                      ) : (
                        <div className="border rounded-3 text-center p-3 mb-3">
                          <p className="text-secondary">No icon selected</p>
                        </div>
                      )}

                      <label className="btn btn-outline-primary w-100">
                        <BiUpload className="me-2" />
                        Choose Icon
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={(e) =>
                            handleIconPreview(
                              e.target.files[0],
                              setBox1Icon,
                              setBox1File,
                            )
                          }
                        />
                      </label>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter box title"
                      value={box1Title}
                      onChange={(e) => setBox1Title(e.target.value)}
                    />
                  </Card>
                </div>
                <div className="col-md-4">
                  {/* ========== BOX 2 ========== */}
                  <Card className="p-3 mb-3 border-0 shadow-sm rounded-4">
                    <h6 className="fw-bold mb-3">Box 2</h6>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Icon Image</label>

                      {box2Icon ? (
                        <div className="position-relative text-center mb-3">
                          <img
                            src={getFullImageUrl(box2Icon)}
                            alt="Preview"
                            className="img-fluid rounded-3"
                            style={{ maxHeight: "100px" }}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-danger position-absolute top-0 end-0"
                            onClick={() => {
                              setBox2Icon(null);
                              setBox2File(null);
                            }}
                          >
                            <BiX />
                          </button>
                        </div>
                      ) : (
                        <div className="border rounded-3 text-center p-3 mb-3">
                          <p className="text-secondary">No icon selected</p>
                        </div>
                      )}

                      <label className="btn btn-outline-primary w-100">
                        <BiUpload className="me-2" />
                        Choose Icon
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={(e) =>
                            handleIconPreview(
                              e.target.files[0],
                              setBox2Icon,
                              setBox2File,
                            )
                          }
                        />
                      </label>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter box title"
                      value={box2Title}
                      onChange={(e) => setBox2Title(e.target.value)}
                    />
                  </Card>
                </div>
                <div className="col-md-4">
                  {/* ========== BOX 3 ========== */}
                  <Card className="p-3 mb-3 border-0 shadow-sm rounded-4">
                    <h6 className="fw-bold mb-3">Box 3</h6>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Icon Image</label>

                      {box3Icon ? (
                        <div className="position-relative text-center mb-3">
                          <img
                            src={getFullImageUrl(box3Icon)}
                            alt="Preview"
                            className="img-fluid rounded-3"
                            style={{ maxHeight: "100px" }}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-danger position-absolute top-0 end-0"
                            onClick={() => {
                              setBox3Icon(null);
                              setBox3File(null);
                            }}
                          >
                            <BiX />
                          </button>
                        </div>
                      ) : (
                        <div className="border rounded-3 text-center p-3 mb-3">
                          <p className="text-secondary">No icon selected</p>
                        </div>
                      )}

                      <label className="btn btn-outline-primary w-100">
                        <BiUpload className="me-2" />
                        Choose Icon
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={(e) =>
                            handleIconPreview(
                              e.target.files[0],
                              setBox3Icon,
                              setBox3File,
                            )
                          }
                        />
                      </label>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter box title"
                      value={box3Title}
                      onChange={(e) => setBox3Title(e.target.value)}
                    />
                  </Card>
                </div>
              </div>
            </div>
            <div className="form-boxmain">
              <div className="row">
                <div className="col-12">
                  <h5 className="mb-4 fw-bold">Section 3 - SEO Settings</h5>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-bold">Page Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={pageTitle}
                      onChange={(e) => setPageTitle(e.target.value)}
                    />
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

                    {/* Tag Input */}
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

            {/* SAVE BUTTON */}
            <div className="text-end mt-4">
              <Button variant="primary" className="px-4" onClick={handleSave}>
                <BiSave className="me-2" />
                Save All Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
