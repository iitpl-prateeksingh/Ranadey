"use client";
import React, { useState, useRef } from "react";
import { BiImageAdd, BiTrash, BiSave, BiListUl } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductManager() {
  const fileInputRef = useRef(null);

  // Initial State based on the image provided
  const [product, setProduct] = useState({
    name: "Boracol GINGER",
    description: "Soil Formulation Specifically Created For The Crop Physiology Of Ginger & Turmeric",
    category: "Micronutrient Fertilizer"
  });

  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setProductImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const payload = { ...product, image: productImage };
    console.log("Saving Product:", payload);
    alert("Product saved successfully!");
  };

  return (
    <>
    <div className="mb-4">
          <h2 className="fw-bold text-dark">Product Manager</h2>
          <p className="text-secondary">Create or edit product entries for the catalog</p>
        </div>

    <div className="page-content py-4">
      <div className="container">
        
        <form onSubmit={handleSave}>
          <div className="row">
            {/* Left Column: Image Upload & Preview */}
            <div className="col-lg-4 mb-4">
              <Card className="borde shadow-sm rounded-4 overflow-hidden">
                <div className="p-3 bg-light border-bottom text-center">
                  <span className="fw-bold small text-uppercase text-secondary">Product Media</span>
                </div>
                <div className="p-4 text-center">
                  <div 
                    className="position-relative border rounded-3 d-flex align-items-center justify-content-center bg-white mx-auto"
                    style={{ width: "100%", height: "300px", overflow: "hidden" }}
                  >
                    {productImage ? (
                      <>
                        <img 
                          src={productImage} 
                          alt="Product Preview" 
                          className="img-fluid" 
                          style={{ maxHeight: "100%", objectFit: "contain" }} 
                        />
                        <button 
                          type="button"
                          className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 rounded-circle"
                          onClick={removeImage}
                        >
                          <BiTrash />
                        </button>
                      </>
                    ) : (
                      <div className="text-muted">
                        <BiImageAdd size={50} className="mb-2" />
                        <p className="small mb-0">No product image uploaded</p>
                      </div>
                    )}
                  </div>
                  
                  <label className="btn btn-outline-primary mt-3 w-100">
                    <BiImageAdd className="me-2" />
                    {productImage ? "Change Image" : "Upload Image"}
                    <input 
                      type="file" 
                      hidden 
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*" 
                    />
                  </label>
                  <small className="text-muted d-block mt-2">Recommended: 150x200px (.webp)</small>
                </div>
              </Card>
            </div>

            {/* Right Column: Product Details */}
            <div className="col-lg-8">
              <Card className="border-0 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-4">Product Specifications</h5>
                
                <div className="row mt-2">
                  <div className="col-12 mb-3">
                    <label className="form-label fw-bold small">Product Title</label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg border-2" 
                      placeholder="e.g. Boracol GINGER"
                      value={product.name}
                      onChange={(e) => setProduct({...product, name: e.target.value})}
                      required
                    />
                  </div>

            

                  <div className="col-12 mb-4">
                    <label className="form-label fw-bold small">Short Description</label>
                    <textarea 
                      className="form-control" 
                      rows="4" 
                      placeholder="Enter the crop physiology benefits..."
                      value={product.description}
                      onChange={(e) => setProduct({...product, description: e.target.value})}
                      required
                    ></textarea>
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="small text-muted mb-0">Fields marked with * are required</p>
                  <Button variant="primary" type="submit" className="px-5 py-2 fw-bold">
                    <BiSave className="me-2" />
                    Save Product
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}