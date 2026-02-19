"use client";
import { useState, useEffect } from "react";
import { BiImage, BiUpload, BiSave, BiX } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
import { BiPlus, BiTrash } from "react-icons/bi";
import { apiRequest, uploadFile } from "../../../services/api";
import { getImageUrl } from "../../../helper/getImageUrl";

function TimelineItem({
  event,
  index,
  updateTimelineEvent,
  removeTimelineEvent,
  handleTimelineImageUpload,
  removeTimelineImage,
}) {
  const { quill, quillRef } = useQuill({ theme: "snow" });

  // Sync editor → state
  useEffect(() => {
    if (!quill) return;

    const handler = () => {
      updateTimelineEvent(index, "description", quill.root.innerHTML);
    };

    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [quill, index]);

  useEffect(() => {
    if (!quill) return;

    if (event.description) {
      quill.root.innerHTML = event.description;
    }
  }, [quill]);

  return (
    <Card className="mb-3 shadow-sm border-primary border-opacity-25">
      <Card.Header className="d-flex justify-content-between align-items-center bg-white">
        <span className="fw-bold text-primary">Event #{index + 1}</span>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeTimelineEvent(index)}
        >
          <BiTrash />
        </Button>
      </Card.Header>

      <Card.Body>
        {/* YEAR INPUT */}
        <div className="mb-3">
          <label className="form-label fw-bold">Year</label>
          <input
            type="text"
            className="form-control form-control-lg fw-bold"
            value={event.year}
            onChange={(e) => updateTimelineEvent(index, "year", e.target.value)}
          />
        </div>

        {/* DESCRIPTION (QUILL REPLACEMENT) */}
        <div className="mb-3">
          <label className="form-label fw-bold">Description</label>

          {/* SAME UI HEIGHT */}
          <div ref={quillRef} style={{ height: "150px", background: "#fff" }} />
        </div>

        {/* IMAGES (same as your code) */}
        <div className="mb-3">
          <label className="form-label fw-bold d-flex justify-content-between">
            <span>Product Images (Max 4)</span>
            <span
              className={`small ${
                event.images.length >= 4 ? "text-danger" : "text-muted"
              }`}
            >
              {event.images.length}/4
            </span>
          </label>

          <div className="d-flex flex-wrap gap-2 mb-2">
            {event.images.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="position-relative border rounded p-1 bg-white"
              >
                <img
                  src={img}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                  }}
                />

                <button
                  type="button"
                  className="btn btn-sm btn-danger position-absolute top-0 end-0 p-0"
                  style={{
                    width: "20px",
                    height: "20px",
                    transform: "translate(30%, -30%)",
                    borderRadius: "50%",
                  }}
                  onClick={() => removeTimelineImage(index, imgIndex)}
                >
                  <BiX size={14} />
                </button>
              </div>
            ))}

            {event.images.length < 4 && (
              <label
                className="border rounded d-flex flex-column align-items-center justify-content-center bg-light"
                style={{
                  width: "80px",
                  height: "80px",
                  cursor: "pointer",
                  borderStyle: "dashed",
                }}
              >
                <BiPlus size={24} />
                <span style={{ fontSize: "10px" }}>Add</span>

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => handleTimelineImageUpload(e, index)}
                />
              </label>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default function Page() {
  /* =========================
     HERO SECTION
  ========================== */
  const [heroImage, setHeroImage] = useState(null);
  const [heroImageFile, setHeroImageFile] = useState(null);
  const [mobileHeroImage, setMobileHeroImage] = useState(null);
  const [mobileHeroImageFile, setMobileHeroImageFile] = useState(null);
  const mobileFixedUrl = mobileHeroImage?.replace("/api/v1", "");
  const heroFixedUrl = heroImage?.replace("/api/v1", "");

  const [timelineEvents, setTimelineEvents] = useState([]);
  /* =========================
     SECTION 2 - HISTORY CONTENT
  ========================== */
  const [historyDescription, setHistoryDescription] = useState("");

  /* =========================
     SECTION 3 - SECOND BANNER
  // ========================== */
  // const [banner2Image, setBanner2Image] = useState(null);
  // const [banner2ImageFile, setBanner2ImageFile] = useState(null);
  // const [banner2Description, setBanner2Description] = useState("");

  /* =========================
     SEO SECTION
  ========================== */
  const [pageTitle, setPageTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  /* =========================
     IMAGE HANDLER
  ========================== */
  const handleImageUpload = (e, setState, setFileState) => {
    const file = e.target.files[0];
    if (file) {
      // Store the actual File object for upload
      if (setFileState) setFileState(file);
      console.log(file, "file");
      // Store Base64 preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setState(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /* =========================
     QUILL EDITORS
  ========================== */
  const { quill: quill1, quillRef: quillRef1 } = useQuill({
    theme: "snow",
  });

  const { quill: quill2, quillRef: quillRef2 } = useQuill({
    theme: "snow",
  });

  useEffect(() => {
    if (quill1) {
      quill1.on("text-change", () => {
        setHistoryDescription(quill1.root.innerHTML);
      });
    }
  }, [quill1]);

  // Fetch history page data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiRequest("/pages/historypage");
        if (res.success && res.data) {
          const { pageTitle, seo, contentRef } = res.data;
          setPageTitle(pageTitle);
          setMetaTitle(seo.metaTitle || "");
          setMetaDescription(seo.metaDescription || "");
          setMetaKeywords(seo.metaKeywords || []);
          setHeroImage(contentRef.banner ? getImageUrl(contentRef.banner) : "");
          setMobileHeroImage(
            contentRef.mobileBanner ? getImageUrl(contentRef.mobileBanner) : "",
          );
          // Content mapping
          setHistoryDescription(contentRef.section1 || "");

          // Timeline mapping
          const formattedTimeline = contentRef.timeline.map((item) => ({
            year: item.year,
            description: item.details,
            images: item.images.map((img) =>
              img.url ? getImageUrl(img.url).replace("/api/v1", "") : "",
            ), // Storing URLs for preview
            imageFiles: [], // Empty for loaded data (no File objects)
          }));
          setTimelineEvents(formattedTimeline);
        }
      } catch (err) {
        console.error("Fetch Error:", err.message);
      }
    };
    fetchData();
  }, []);
  console.log(heroImage, mobileHeroImage, "IMAGE URLS");
  // Update Quill editor when historyDescription changes
  const allImages = timelineEvents.map((event) => event.images);
  console.log("All Images:", allImages);

  useEffect(() => {
    if (
      quill1 &&
      historyDescription &&
      quill1.root.innerHTML !== historyDescription
    ) {
      quill1.root.innerHTML = historyDescription;
      quill1.history.clear();
    }
  }, [quill1, historyDescription]);

  // useEffect(() => {
  //   if (quill2) {
  //     quill2.on("text-change", () => {
  //       setBanner2Description(quill2.root.innerHTML);
  //     });
  //   }
  // }, [quill2]);

  /* =========================
     SEO KEYWORDS
  ========================== */
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
  const addTimelineEvent = () => {
    setTimelineEvents([
      ...timelineEvents,
      { year: "", description: "", images: [], imageFiles: [] },
    ]);
  };

  const removeTimelineEvent = (index) => {
    const updated = [...timelineEvents];
    updated.splice(index, 1);
    setTimelineEvents(updated);
  };

  const updateTimelineEvent = (index, field, value) => {
    const updated = [...timelineEvents];
    updated[index][field] = value;
    setTimelineEvents(updated);
  };

  const handleTimelineImageUpload = (e, index) => {
    const file = e.target.files[0];
    const currentImages = timelineEvents[index].images;

    // Strict check (Double safety)
    if (currentImages.length >= 4) {
      alert("Maximum 4 images allowed per event.");
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updated = [...timelineEvents];
        updated[index].images.push(reader.result); // Base64 for preview
        updated[index].imageFiles.push(file); // Actual File object for upload
        setTimelineEvents(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeTimelineImage = (eventIndex, imageIndex) => {
    const updated = [...timelineEvents];
    updated[eventIndex].images.splice(imageIndex, 1);
    updated[eventIndex].imageFiles.splice(imageIndex, 1); // Also remove from File objects
    setTimelineEvents(updated);
  };
  /* =========================
     SAVE HANDLER
  ========================== */
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      // 1. Upload hero image if new
      let heroImageUrl = heroImage;
      if (heroImageFile) {
        console.log(heroImageFile, "file to upload");
        const res = await uploadFile(heroImageFile, "image");
        heroImageUrl = res.data.url;
        console.log("ssdfsdfsdf", heroImageUrl, res);
      }

      let mobileHeroImageUrl = mobileHeroImage;
      if (mobileHeroImageFile) {
        const res = await uploadFile(mobileHeroImageFile, "image");
        mobileHeroImageUrl = res.data.url;
      }
      // 2. Upload banner2 image if new
      // let banner2ImageUrl = banner2Image;
      // if (banner2ImageFile) {
      //   const res = await uploadFile(banner2ImageFile, "image");
      //   banner2ImageUrl = res.data.url;
      // }

      // 3. Process Timeline Images (Upload if new File object)
      const processedTimeline = await Promise.all(
        timelineEvents.map(async (event) => {
          const uploadedImages = await Promise.all(
            event.images.map(async (img, idx) => {
              // Check if there's a corresponding File object
              if (event.imageFiles[idx]) {
                // New file - upload it
                const res = await uploadFile(event.imageFiles[idx], "image");
                return {
                  url: res.data.url,
                  alt: event.year,
                  mimeType: "image/jpeg",
                };
              }
              // Existing URL - keep it as is
              return { url: img, alt: event.year, mimeType: "image/jpeg" };
            }),
          );

          return {
            year: parseInt(event.year),
            details: event.description,
            images: uploadedImages,
          };
        }),
      );

      // 4. Final Payload matching backend structure
      const payload = {
        pageTitle: pageTitle,
        seo: {
          metaTitle,
          metaDescription,
          metaKeywords,
        },
        content: {
          banner: heroImageUrl,
          mobileBanner: mobileHeroImageUrl,
          section1: historyDescription,
          timeline: processedTimeline,
        },
      };

      console.log("Final Payload:", payload);

      const res = await apiRequest("/pages/historypage", {
        method: "PUT",
        body: payload,
      });

      if (res.success) {
        alert("History Page Updated! ✅");
        // Reset file states after successful save
        setHeroImageFile(null);
        setMobileHeroImageFile(null);
        // setBanner2ImageFile(null);
      } else {
        alert("Save failed: " + (res.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Save Error:", error);
      alert("Save Failed: " + error.message);
    }
  };

  return (
    <>
      <div className="mb-2">
        <div className="dashboard-header mb-0">
          <h1>Our History Page Manager</h1>
        </div>

        <p className="text-secondary">Manage Our History page content</p>
      </div>
      <div className="page-content">
        <form onSubmit={handleSave}>
          {/* ================= HERO SECTION ================= */}
          <div className="form-boxmain mb-4">
            <h5 className="fw-bold mb-3">Hero Section</h5>

            <div className="row">
              {/* Desktop Banner */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label fw-bold">Banner Image</label>

                  {heroFixedUrl ? (
                    <div className="position-relative">
                      <img
                        src={heroFixedUrl}
                        alt="Desktop Preview"
                        className="img-fluid rounded-3"
                        style={{ maxHeight: "250px", objectFit: "cover" }}
                      />
                      <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                        onClick={() => {
                          setHeroImage(null);
                          setHeroImageFile(null);
                        }}
                      >
                        <BiX />
                      </button>
                    </div>
                  ) : (
                    <div className="border rounded-3 text-center p-4">
                      <BiImage size={40} />
                      <p>No image selected</p>
                    </div>
                  )}
                  <small className="text-muted d-block mt-2">
                    Recommended: 400x1400px (.webp)
                  </small>
                  <label className="btn btn-outline-primary mt-3 w-100">
                    <BiUpload className="me-2" />
                    Choose Image
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) =>
                        handleImageUpload(e, setHeroImage, setHeroImageFile)
                      }
                    />
                  </label>
                </div>
              </div>

              {/* Mobile Banner */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Mobile Banner Image
                  </label>

                  {mobileFixedUrl ? (
                    <div className="position-relative">
                      <img
                        src={mobileFixedUrl}
                        alt="Mobile Preview"
                        className="img-fluid rounded-3"
                        style={{ maxHeight: "250px", objectFit: "cover" }}
                      />

                      <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                        onClick={() => {
                          setMobileHeroImage(null);
                          setMobileHeroImageFile(null);
                        }}
                      >
                        <BiX />
                      </button>
                    </div>
                  ) : (
                    <div className="border rounded-3 text-center p-4">
                      <BiImage size={40} />
                      <p>No image selected</p>
                    </div>
                  )}
                  <small className="text-muted d-block mt-2">
                    Recommended: 400x1400px (.webp)
                  </small>
                  <label className="btn btn-outline-primary mt-3 w-100">
                    <BiUpload className="me-2" />
                    Choose Image
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) =>
                        handleImageUpload(
                          e,
                          setMobileHeroImage,
                          setMobileHeroImageFile,
                        )
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* ================= HISTORY SECTION ================= */}
          <div className="form-boxmain mb-4">
            <h5 className="fw-bold mb-3">History Description</h5>
            <div
              ref={quillRef1}
              style={{ height: "250px", background: "#fff" }}
            />
          </div>

          {/* ================= BANNER 2 ================= */}
          {/* <div className="form-boxmain mb-4">
            <h5 className="fw-bold mb-3">Second Banner Section</h5>

            <div className="mb-3">
              <label className="form-label fw-bold">Banner Image</label>

              {banner2Image ? (
                <div className="position-relative">
                  <img
                    src={banner2Image}
                    alt="Preview"
                    className="img-fluid rounded-3"
                    style={{ maxHeight: "200px" }}
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                    onClick={() => setBanner2Image(null)}
                  >
                    <BiX />
                  </button>
                </div>
              ) : (
                <div className="border rounded-3 text-center p-4">
                  <BiImage size={40} />
                  <p>No image selected</p>
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
                  hidden
                  accept="image/*"
                  onChange={(e) =>
                    handleImageUpload(e, setBanner2Image, setBanner2ImageFile)
                  }
                />
              </label>
            </div>
          </div> */}
          {/* ================= TIMELINE EVENTS (DYNAMIC ARRAY) ================= */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Timeline Events</h5>
            </div>

            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                event={event}
                index={index}
                updateTimelineEvent={updateTimelineEvent}
                removeTimelineEvent={removeTimelineEvent}
                handleTimelineImageUpload={handleTimelineImageUpload}
                removeTimelineImage={removeTimelineImage}
              />
            ))}

            {timelineEvents.length === 0 && (
              <div className="text-center p-4 border border-dashed rounded text-muted">
                No events added. Click Add New Event to start.
              </div>
            )}
            <Button variant="success" size="sm" onClick={addTimelineEvent}>
              <BiPlus className="me-1" /> Add New Event
            </Button>
          </div>
          {/* ================= SEO SECTION ================= */}
          <div className="form-boxmain mb-4">
            <h5 className="fw-bold mb-3">SEO Settings</h5>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Page Title"
              value={pageTitle}
              onChange={(e) => setPageTitle(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Meta Title"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
            />

            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="Meta Description"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
            />

            {/* Keywords */}
            <div className="form-control d-flex flex-wrap gap-2 p-2">
              {metaKeywords.map((keyword, index) => (
                <div key={index} className="badge bg-primary px-3 py-2">
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
          </div>

          <div className="text-end">
            <Button type="submit">
              <BiSave className="me-2" />
              Save All Changes
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
