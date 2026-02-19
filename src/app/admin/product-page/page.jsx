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

export default function Page() {
  /* =========================
      1. EXISTING STATES
  ========================== */
  const [heroImage, setHeroImage] = useState(null);
  const [mobileHeroImage, setMobileHeroImage] = useState(null);
  const [pageTitle, setPageTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");

  /* =========================
      2. USP SECTION STATE
  ========================== */
  const [uspCards, setUspCards] = useState([
    {
      id: 1,
      icon: null,
      text: "Maximising Synergism & Minimising Antagonism Between Elements",
    },
  ]);

  /* =========================
      3. USP HANDLERS
  ========================== */
  const addUspCard = () => {
    setUspCards([...uspCards, { id: Date.now(), icon: null, text: "" }]);
  };

  const deleteUspCard = (id) => {
    setUspCards(uspCards.filter((card) => card.id !== id));
  };

  const updateUspText = (id, text) => {
    setUspCards(uspCards.map((c) => (c.id === id ? { ...c, text } : c)));
  };

  const handleUspIconUpload = (e, id) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setUspCards(
        uspCards.map((c) => (c.id === id ? { ...c, icon: reader.result } : c)),
      );
    };
    reader.readAsDataURL(file);
  };

  /* =========================
      4. GLOBAL HANDLERS
  ========================== */
  const handleImageUpload = (e, setState) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setState(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      // 1. Upload Hero Images if they are new (Base64)
      let finalHero = heroImage;
      if (heroImage && heroImage.startsWith("data:")) {
        const res = await uploadFile(heroImage, "image");
        finalHero = res.data.url;
      }

      let finalMobileHero = mobileHeroImage;
      if (mobileHeroImage && mobileHeroImage.startsWith("data:")) {
        const res = await uploadFile(mobileHeroImage, "image");
        finalMobileHero = res.data.url;
      }

      // 2. Upload USP Icons and map to backend structure
      const processedUsp = await Promise.all(
        uspCards.map(async (card) => {
          let iconUrl = card.icon;
          if (iconUrl && iconUrl.startsWith("data:")) {
            const res = await uploadFile(iconUrl, "image");
            iconUrl = res.data.url;
          }
          return {
            icon: iconUrl,
            title: card.text, // Backend expects 'title' for USP text
          };
        }),
      );

      // 3. Construct the Payload matching your Backend structure
      const payload = {
        pageTitle: pageTitle || "Products",
        seo: {
          metaTitle,
          metaDescription,
          metaKeywords: Array.isArray(metaKeywords) ? metaKeywords : [],
        },
        content: {
          banner: finalHero,
          mobileBanner: finalMobileHero,
          uspSection: {
            title: "Why Choose Our Products", // Or add a state for this title
            description: "We provide the best quality products.", // Or add a state
            usp: processedUsp,
          },
        },
      };

      // 4. TRIGGER THE API CALL
      console.log("Sending Payload to Database:", payload);

      const response = await apiRequest("/pages/productpage", {
        method: "PUT", // Use PUT for updating existing page config
        body: payload,
      });

      if (response.success) {
        alert("Product Page Updated Successfully in Database! ✅");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to save data: " + error.message);
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
    setMetaKeywords(metaKeywords.filter((_, i) => i !== index));
  };
  const { quill: quillWelcome, quillRef: welcomeRef } = useQuill({
    theme: "snow",
  });
  return (
    <>
     <div className="mb-2">
        <div className="dashboard-header mb-0">
          <h1>Product Page Manager</h1>
        </div>

        <p className="text-secondary">Manage Product page content</p>
      </div>
      <div className="page-content p-4" style={{ backgroundColor: "#f8f9fa" }}>
       
        <form onSubmit={handleSave}>
          {/* --- HERO SECTION --- */}
          <div className="form-boxmain">
            <h5 className="fw-bold border-bottom pb-2 mb-3">
             Section 1 - Hero Section
            </h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="fw-bold mb-2">Desktop Banner</label>
                <div className="border rounded p-3 text-center bg-light">
                  {heroImage ? (
                    <div className="position-relative">
                      <img
                        src={heroImage}
                        className="img-fluid rounded mb-2"
                        style={{ maxHeight: "120px" }}
                        alt="Hero"
                      />
                      <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute top-0 end-0"
                        onClick={() => setHeroImage(null)}
                      >
                        <BiX />
                      </button>
                    </div>
                  ) : (
                    <BiImage
                      size={30}
                      className="text-muted d-block mx-auto mb-2"
                    />
                  )}

                  <label className="btn btn-sm btn-outline-primary w-100">
                    <BiUpload /> Upload{" "}
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, setHeroImage)}
                    />
                  </label>
                </div>
                <small className="text-muted d-block mt-2">
                  Recommended: 400x1400px (.webp)
                </small>
              </div>
              <div className="col-md-6 mb-3">
                <label className="fw-bold mb-2">Mobile Banner</label>
                <div className="border rounded p-3 text-center bg-light">
                  {mobileHeroImage ? (
                    <div className="position-relative">
                      <img
                        src={mobileHeroImage}
                        className="img-fluid rounded mb-2"
                        style={{ maxHeight: "120px" }}
                        alt="Mobile Hero"
                      />
                      <button
                        type="button"
                        className="btn btn-sm btn-danger position-absolute top-0 end-0"
                        onClick={() => setMobileHeroImage(null)}
                      >
                        <BiX />
                      </button>
                    </div>
                  ) : (
                    <BiImage
                      size={30}
                      className="text-muted d-block mx-auto mb-2"
                    />
                  )}
                  <label className="btn btn-sm btn-outline-primary w-100">
                    <BiUpload /> Upload{" "}
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, setMobileHeroImage)}
                    />
                  </label>
                </div>
                <small className="text-muted d-block mt-2">
                  Recommended: 400x1400px (.webp)
                </small>
              </div>
            </div>
          </div>

          {/* --- USP SECTION --- */}
          <div className="form-boxmain">
            <div className="d-flex justify-content-between align-items-center  pb-2 mb-4">
              <h5 className=" fw-bold mb-0"> Section 2 - Our Product: USP</h5>
            </div>

            <div
              ref={welcomeRef}
              style={{ height: "200px", background: "white" }}
            />
            <div className="text-end mt-4">
              <Button variant="success" size="sm" onClick={addUspCard}>
                <BiPlus className="me-1" /> Add USP Card
              </Button>
            </div>
            <div className="row mt-4">
              {uspCards.map((card, index) => (
                <div key={card.id} className="col-md-4 mb-4">
                  <div
                    className="card h-100 shadow-sm border bg-white overflow-hidden"
                    style={{ borderLeft: "4px solid #0d6efd" }}
                  >
                    <div className="card-body position-relative">
                      <button
                        type="button"
                        className="btn btn-link text-danger position-absolute top-0 end-0 p-2"
                        onClick={() => deleteUspCard(card.id)}
                      >
                        <BiTrash size={18} />
                      </button>

                      {/* Icon Upload */}
                      <div className="text-center mb-3">
                        <div
                          className="mx-auto border rounded-circle d-flex align-items-center justify-content-center bg-light mb-2"
                          style={{
                            width: "60px",
                            height: "60px",
                            cursor: "pointer",
                            overflow: "hidden",
                          }}
                          onClick={() =>
                            document
                              .getElementById(`usp-file-${card.id}`)
                              .click()
                          }
                        >
                          {card.icon ? (
                            <img
                              src={card.icon}
                              alt="icon"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          ) : (
                            <BiImage size={24} className="text-muted" />
                          )}
                        </div>
                        <input
                          id={`usp-file-${card.id}`}
                          type="file"
                          hidden
                          accept="image/*"
                          onChange={(e) => handleUspIconUpload(e, card.id)}
                        />
                        <small className="text-muted d-block">
                          Click circle to upload icon
                        </small>
                      </div>

                      <textarea
                        className="form-control border-0 bg-light"
                        rows="3"
                        placeholder="Enter USP description here..."
                        value={card.text}
                        onChange={(e) => updateUspText(card.id, e.target.value)}
                        style={{ fontSize: "0.9rem" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- SEO SECTION --- */}
          <div className="form-boxmain">
            <h5 className="fw-bold border-bottom pb-2 mb-3">
              Section 3 - SEO Settings
            </h5>
            <div className="mb-3">
              <label className="small fw-bold">Page Title</label>
              <input
                type="text"
                className="form-control"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="small fw-bold">Meta Title</label>
              <input
                type="text"
                className="form-control"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="small fw-bold">Meta Description</label>
              <textarea
                className="form-control"
                rows="2"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="small fw-bold">Keywords (Press Enter)</label>
              <div className="form-control d-flex flex-wrap gap-2">
                {metaKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="badge bg-primary d-flex align-items-center gap-1"
                  >
                    {kw}{" "}
                    <BiX
                      style={{ cursor: "pointer" }}
                      onClick={() => removeKeyword(i)}
                    />
                  </span>
                ))}
                <input
                  type="text"
                  className="border-0 flex-grow-1"
                  style={{ outline: "none" }}
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyDown={handleKeywordKeyDown}
                />
              </div>
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
