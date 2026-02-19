"use client";
import { useState, useEffect } from "react";
import {
  BiImage,
  BiUpload,
  BiSave,
  BiX,
  BiPlus,
  BiTrash,
} from "react-icons/bi";
import Button from "react-bootstrap/Button";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
import { apiRequest, uploadFile } from "../../../services/api";

export default function LabPageManager() {
  /* =========================
      1. HERO SECTION
  ========================== */
  const [heroImage, setHeroImage] = useState(null);
  const [heroImageFile, setHeroImageFile] = useState(null);
  const [mobileHeroImage, setMobileHeroImage] = useState(null);
  const [mobileHeroImageFile, setMobileHeroImageFile] = useState(null);

  /* =========================
      2. WELCOME SECTION
  ========================== */
  const [welcomeImage, setWelcomeImage] = useState(null);
  const [welcomeImageFile, setWelcomeImageFile] = useState(null);
  const [welcomeDesc, setWelcomeDesc] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  const { quill: quillWelcome, quillRef: welcomeRef } = useQuill({
    theme: "snow",
  });

  /* =========================
      3. SERVICES SECTION
  ========================== */
  const [servicesIntro, setServicesIntro] = useState("");
  const { quill: quillServices, quillRef: servicesRef } = useQuill({
    theme: "snow",
  });

  const [services, setServices] = useState([
    {
      title: "Soil Testing",
      description: "Every Soil Sample We Analyze Is Extracted For Nutrients...",
      image: null,
      imageFile: null,
    },
    {
      title: "Tissue Analysis",
      description: "Tissue Analysis Helps The Farmer Monitor The Growth...",
      image: null,
      imageFile: null,
    },
  ]);

  /* =========================
      QUILL SYNC
  ========================== */
  useEffect(() => {
    if (!quillWelcome) return;

    const handler = () => {
      setWelcomeDesc(quillWelcome.root.innerHTML);
    };

    quillWelcome.on("text-change", handler);

    return () => {
      quillWelcome.off("text-change", handler);
    };
  }, [quillWelcome]);

  useEffect(() => {
    if (!quillServices) return;

    const handler = () => {
      setServicesIntro(quillServices.root.innerHTML);
    };

    quillServices.on("text-change", handler);

    return () => {
      quillServices.off("text-change", handler);
    };
  }, [quillServices]);

  /* =========================
      HANDLERS
  ========================== */

  const handleImageUpload = (e, setState, setFileState) => {
    const file = e.target.files[0];
    if (!file) return;

    if (setFileState) setFileState(file);

    const reader = new FileReader();
    reader.onloadend = () => setState(reader.result);
    reader.readAsDataURL(file);
  };

  const addService = () => {
    setServices([...services, { title: "", description: "", image: null, imageFile: null }]);
  };

  const removeService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const updateService = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
     
      let finalFeatureImg = welcomeImage;
      if (welcomeImageFile) {
        const imgRes = await uploadFile(welcomeImageFile, "image");
        finalFeatureImg = {
          url: imgRes.data.url,
          alt: "Agri Lab Feature Image",
          mimeType: imgRes.data.mimeType || "image/jpeg"
        };
      } else if (typeof welcomeImage === 'string' && !welcomeImage.startsWith("data:")) {
        
        finalFeatureImg = { url: welcomeImage, alt: "Agri Lab" };
      }

      const processedTests = await Promise.all(
        services.map(async (service) => {
          let serviceImg = service.image;
          
          if (service.imageFile) {
          
            const srvRes = await uploadFile(service.imageFile, "image");
            serviceImg = {
              url: srvRes.data.url,
              alt: service.title,
              mimeType: srvRes.data.mimeType || "image/jpeg"
            };
          } else if (typeof serviceImg === 'string' && !serviceImg.startsWith("data:")) {
           
            serviceImg = { url: serviceImg, alt: service.title };
          }

          return {
            title: service.title,
            details: service.description, 
            image: serviceImg
          };
        })
      );

      const payload = {
        pageTitle: pageTitle || "Agri Lab",
        seo: {
          metaTitle,
          metaDescription,
          metaKeywords: Array.isArray(metaKeywords) ? metaKeywords : []
        },
        content: {
          section1: welcomeDesc,
          section2: servicesIntro,
          featureImage: finalFeatureImg,
          testListing: processedTests 
        }
      };

      console.log("Final Payload:", payload);

      const res = await apiRequest("/pages/agrilab", {
        method: "PUT",
        body: payload
      });
      console.log(res)
      if (res.success) {
        alert("Data saved successfully! ✅");
     
        setHeroImageFile(null);
        setMobileHeroImageFile(null);
        setWelcomeImageFile(null);
      } else {
        alert("Save failed: " + (res.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Save Error:", err);
      alert("Error saving data: " + err.message);
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
  return (
    <>
     <div className="mb-2">
        <div className="dashboard-header mb-0">
          <h1>Agri Lab Page Manager</h1>
        </div>

        <p className="text-secondary">Manage Agri Lab page content</p>
      </div>
    
    <div className="page-content p-4" style={{ backgroundColor: "#f8f9fa" }}>

      <form onSubmit={handleSave}>
        {/* HERO SECTION */}
        <div className="card shadow-sm mb-4 p-4">
          <h5 className="text-primary fw-bold border-bottom pb-2 mb-3">
           Section 1 - Hero Section
          </h5>

          <div className="row">
            {/* Desktop */}
            <div className="col-md-6">
              <label className="fw-bold pb-2">Desktop Banner</label>
              <div className="border rounded p-3 text-center bg-white">
                {heroImage ? (
                  <div className="position-relative">
                    <img
                      src={heroImage}
                      className="img-fluid rounded"
                      style={{ maxHeight: "150px" }}
                      alt="Desktop Preview"
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-danger position-absolute top-0 end-0 m-1"
                      onClick={() => setHeroImage(null)}
                    >
                      <BiX />
                    </button>
                  </div>
                ) : (
                  <BiImage size={40} className="text-muted" />
                )}

                <label className="btn btn-outline-primary btn-sm mt-2 w-100">
                  <BiUpload /> Upload Desktop
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setHeroImage, setHeroImageFile)}
                  />
                </label>
              </div>
            </div>

            {/* Mobile */}
            <div className="col-md-6">
              <label className="fw-bold pb-2">Mobile Banner</label>
              <div className="border rounded p-3 text-center bg-white">
                {mobileHeroImage ? (
                  <div className="position-relative">
                    <img
                      src={mobileHeroImage}
                      className="img-fluid rounded"
                      style={{ maxHeight: "150px" }}
                      alt="Mobile Preview"
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-danger position-absolute top-0 end-0 m-1"
                      onClick={() => setMobileHeroImage(null)}
                    >
                      <BiX />
                    </button>
                  </div>
                ) : (
                  <BiImage size={40} className="text-muted" />
                )}

                <label className="btn btn-outline-primary btn-sm mt-2 w-100">
                  <BiUpload /> Upload Mobile
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setMobileHeroImage, setMobileHeroImageFile)}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* WELCOME SECTION */}
        <div className="card shadow-sm mb-4 p-4">
          <h5 className="text-primary fw-bold border-bottom pb-2 mb-3">
            2. Welcome Section
          </h5>

          <div className="row">
            <div className="col-md-8">
              <label className="fw-bold pb-2">Description Content</label>
              <div
                ref={welcomeRef}
                style={{ height: "200px", background: "white" }}
              />
            </div>

            <div className="col-md-4">
              <label className="fw-bold pb-2">Side Image</label>
              <div className="border rounded p-3 text-center bg-white">
                {welcomeImage ? (
                  <div className="position-relative">
                    <img
                      src={welcomeImage}
                      className="img-fluid rounded"
                      alt="Welcome Preview"
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-danger position-absolute top-0 end-0 m-1"
                      onClick={() => setWelcomeImage(null)}
                    >
                      <BiX />
                    </button>
                  </div>
                ) : (
                  <BiImage size={50} className="text-muted" />
                )}

                <label className="btn btn-outline-primary btn-sm mt-2 w-100">
                  <BiUpload /> Upload Image
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setWelcomeImage, setWelcomeImageFile)}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="card shadow-sm mb-4 p-4">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="text-primary fw-bold m-0">
              3. Lab Service Cards
            </h5>
            <Button size="sm" onClick={addService}>
              <BiPlus /> Add Card
            </Button>
          </div>

          <label className="fw-bold small text-muted pb-2">
            Services Introduction
          </label>
          <div
            ref={servicesRef}
            style={{ height: "150px", background: "white" }}
            className="mb-4"
          />

          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="p-3 border rounded bg-white position-relative">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                    onClick={() => removeService(index)}
                  >
                    <BiTrash size={14} />
                  </button>

                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Card Title"
                    value={service.title}
                    onChange={(e) =>
                      updateService(index, "title", e.target.value)
                    }
                  />

                  <textarea
                    className="form-control mb-2"
                    rows="3"
                    placeholder="Card Description"
                    value={service.description}
                    onChange={(e) =>
                      updateService(index, "description", e.target.value)
                    }
                  />

                  <label className="btn btn-outline-secondary btn-sm w-100">
                    Upload Image
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) =>
                        handleImageUpload(e, 
                          (val) => updateService(index, "image", val),
                          (file) => updateService(index, "imageFile", file)
                        )
                      }
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
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
              <div
                key={index}
                className="badge bg-primary px-3 py-2"
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
        </div>
        <div className="text-end">
          <Button type="submit">
            <BiSave /> Save All Changes
          </Button>
        </div>
      </form>
    </div>
    </>
  );
}
