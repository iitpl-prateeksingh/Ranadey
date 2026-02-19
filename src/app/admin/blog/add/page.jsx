"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
import {
  BiImage,
  BiText,
  BiSave,
  BiUpload,
  BiX,
  BiArrowBack,
} from "react-icons/bi";

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddBlog() {
  const [imagePreview, setImagePreview] = useState(null);
  // Handle image upload

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        ["link", "image", "video"],
        ["blockquote", "code-block"],
        ["clean"],
      ],
    },
  });

  return (
    <>
      <div>
          <div className="dashboard-header mb-0">
            <h1>Add New Blog Post</h1>
          </div>
          <p className="text-muted"> Create a new blog post for your website</p>
        </div>
    <div className="">
      <div className="page-content">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* <div className="d-flex align-items-center gap-3">
            <div>
              <h2 className="mb-1">Add New Blog Post</h2>
              <p className="text-secondary">
                Create a new blog post for your website
              </p>
            </div>
          </div> */}
         
        </div>

        <div className="row dashboard-card">
          <div className="col-md-12">
            <div className=" mb-4">
              <h5 className="mb-4">
                <BiText className="me-2 text-primary" size={24} />
                Blog Content
              </h5>

              <form className="blog-addform">
                {/* Blog Title */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label className="form-label fw-bold">
                        Blog Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="form-control form-control-lg"
                        placeholder="Enter blog title"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label className="form-label fw-bold">
                        Short Description
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="form-control form-control-lg"
                        placeholder="Enter Short Description"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4">
                      <label className="form-label fw-bold">
                        Blog Content <span className="text-danger">*</span>
                      </label>
                      <div
                        ref={quillRef}
                        style={{ height: "250px", background: "#fff" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className=" mb-4">
                      <h5 className="mb-3">
                        <BiImage className="me-2 text-primary" size={24} />
                        Feature Image
                      </h5>

                      <div className="image-upload-container mb-3">
                        {imagePreview ? (
                          <div className="position-relative">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="preview-image"
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-danger remove-btn"
                              onClick={removeImage}
                            >
                              <BiX size={18} />
                            </button>
                          </div>
                        ) : (
                          <div className="upload-area">
                            <BiImage
                              size={40}
                              className="text-secondary mb-2"
                            />
                            <p className="mb-2 fw-bold">Upload Feature Image</p>
                            <p className="text-secondary small mb-3">
                              JPG, PNG or GIF (Max. 2MB)
                            </p>
                            <label className="btn btn-primary btn-sm w-100">
                              <BiUpload className="me-2" />
                              Choose Image
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: "none" }}
                              />
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                   <div className="col-md-4">
                    <div className=" mb-4">
                      <h5 className="mb-3">
                        <BiImage className="me-2 text-primary" size={24} />
                        Feature Image 
                      </h5>

                      <div className="image-upload-container mb-3">
                        {imagePreview ? (
                          <div className="position-relative">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="preview-image"
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-danger remove-btn"
                              onClick={removeImage}
                            >
                              <BiX size={18} />
                            </button>
                          </div>
                        ) : (
                          <div className="upload-area">
                            <BiImage
                              size={40}
                              className="text-secondary mb-2"
                            />
                            <p className="mb-2 fw-bold">Upload Feature Image</p>
                            <p className="text-secondary small mb-3">
                              JPG, PNG or GIF (Max. 2MB)
                            </p>
                            <label className="btn btn-primary btn-sm w-100">
                              <BiUpload className="me-2" />
                              Choose Image
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: "none" }}
                              />
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

<div className="col-md-4">
                    <div className=" mb-4">
                      <h5 className="mb-3">
                        <BiImage className="me-2 text-primary" size={24} />
                        Feature Image 
                      </h5>

                      <div className="image-upload-container mb-3">
                        {imagePreview ? (
                          <div className="position-relative">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="preview-image"
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-danger remove-btn"
                              onClick={removeImage}
                            >
                              <BiX size={18} />
                            </button>
                          </div>
                        ) : (
                          <div className="upload-area">
                            <BiImage
                              size={40}
                              className="text-secondary mb-2"
                            />
                            <p className="mb-2 fw-bold">Upload Feature Image</p>
                            <p className="text-secondary small mb-3">
                              JPG, PNG or GIF (Max. 2MB)
                            </p>
                            <label className="btn btn-primary btn-sm w-100">
                              <BiUpload className="me-2" />
                              Choose Image
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: "none" }}
                              />
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                </div>

                {/* CKEditor */}

                {/* Buttons */}
                <div className="d-flex justify-content-end gap-3 pt-3 border-top">
                  <Link href="/blog">
                    <button type="button" className="btn btn-secondary">
                      Cancel
                    </button>
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    <BiSave className="me-2" size={18} />
                    Publish Blog Post
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side Same as Before */}
          <div className="col-md-12"></div>
        </div>
      </div>
    </div>
    </>
  );
}
