"use client";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import {
    BiImage,
    BiText,
    BiSave,
    BiUpload,
    BiX,
    BiArrowBack
} from 'react-icons/bi';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddBlog() {
    //  const [content, setContent] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        content: '',
        status: 'Draft'
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Blog Data:', { ...formData, image: imagePreview });
        alert('Blog post saved successfully!');
    };

    return (
        <div className="main-content">
            <div className="page-content">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center gap-3">
                        <Link href="/blog">
                            <button className="btn btn-outline-secondary btn-sm">
                                <BiArrowBack size={18} />
                            </button>
                        </Link>
                        <div>
                            <h2 className="mb-1">Edit Blog Post</h2>
                            <p className="text-secondary">Create a new blog post for your website</p>
                        </div>
                    </div>
                    <div>
                        <span className="badge bg-primary p-3 rounded-3">
                            <BiText className="me-2" size={20} />
                            New Post
                        </span>
                    </div>
                </div>

                <div className="row dashboard-card">
                    <div className="col-md-8">
                        <div className=" mb-4">
                            <h5 className="mb-4">
                                <BiText className="me-2 text-primary" size={24} />
                                Blog Content
                            </h5>

                            <form onSubmit={handleSubmit}>
                                {/* Blog Title */}
                                <div className="mb-4">
                                    <label className="form-label fw-bold">
                                        Blog Title <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control form-control-lg"
                                        placeholder="Enter blog title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                    <small className="text-secondary">
                                        {formData.title.length}/100 characters
                                    </small>
                                </div>

                                {/* Category Only (Author Removed) */}
                                <div className="mb-4">
                                    <label className="form-label fw-bold">
                                        Category
                                    </label>
                                    <select
                                        name="category"
                                        className="form-select"
                                        value={formData.category}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Food">Food</option>
                                        <option value="Business">Business</option>
                                    </select>
                                </div>

                                {/* CKEditor */}
                                <div className="mb-4">
                                    <label className="form-label fw-bold">
                                        Blog Content <span className="text-danger">*</span>
                                    </label>

                                    
                            {/* <CKEditor */}
                                {/* editor={ClassicEditor} */}
                                {/* data="<p>Start writing here...</p>" */}
                                {/* onChange={(event, editor) => { */}
                                {/* const data = editor.getData(); */}
                                {/* setContent(data); */}
                                {/* }} */}
                            {/* /> */}
                                    <small className="text-secondary d-block mt-2">
                                        {formData.content.length} characters
                                    </small>
                                </div>

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
                                        <BiImage size={40} className="text-secondary mb-2" />
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
                                                style={{ display: 'none' }}
                                            />
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
