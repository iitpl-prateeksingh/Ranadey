"use client";
import { useState } from 'react';
import Image from "next/image";
import {
    BiImage,
    BiPencil,
    BiTrash,
    BiX,
    BiSave,
    BiUpload
} from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function PagesBanner() {
    const [show, setShow] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const handleClose = () => {
        setShow(false);
        setPreviewImage(null);
    };

    const handleShow = () => setShow(true);

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="">
            <div className="page-content">
                {/* Page Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="mb-1">Pages Banner Manager</h2>
                        <p className="text-secondary">Manage banners and text for all your website pages</p>
                    </div>
                    <div>
                        <span className="badge bg-primary p-3 rounded-3">
                            <BiImage className="me-2" size={20} />
                            Total Pages: 6
                        </span>
                    </div>
                </div>

                {/* Banner Table */}
                <div className="table-responsive">
                    <table className="table table-hover table-bordered align-middle">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col" width="5%">#</th>
                                <th scope="col" width="15%">Page Name</th>
                                <th scope="col" width="15%">Current Banner</th>
                                <th scope="col" width="20%">Banner Title</th>
                                <th scope="col" width="10%">Status</th>
                                <th scope="col" width="15%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1 - Home Page */}
                            <tr>
                                <th scope="row">1</th>
                                <td>Home Page</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                          <Image src="/img/agri-banner.png" width={150} height={46} alt="" />
                                    </div>
                                </td>
                                <td>Welcome to Our Website</td>
                                <td>
                                    <span className="badge bg-success">Published</span>
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleShow}
                                        >
                                            <BiPencil size={14} />
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            <BiTrash size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2 - About Page */}
                            <tr>
                                <th scope="row">2</th>
                                <td>About Page</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                         <Image src="/img/agri-banner.png" width={150} height={46} alt="" />
                                    </div>
                                </td>
                                <td>About Our Company</td>
                                <td>
                                    <span className="badge bg-success">Published</span>
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleShow}
                                        >
                                            <BiPencil size={14} />
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            <BiTrash size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 3 - Product Page */}
                            <tr>
                                <th scope="row">3</th>
                                <td>Product Page</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                         <Image src="/img/agri-banner.png" width={150} height={46} alt="" />
                                    </div>
                                </td>
                                <td>Our Products</td>
                                <td>
                                    <span className="badge bg-success">Published</span>
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleShow}
                                        >
                                            <BiPencil size={14} />
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            <BiTrash size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 4 - Blog Page */}
                            <tr>
                                <th scope="row">4</th>
                                <td>Blog Page</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                         <Image src="/img/contact-banner.png" width={150} height={46} alt="" />
                                    </div>
                                </td>
                                  <td>Contact Us</td>
                                <td>
                                    <span className="badge bg-success">Published</span>
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleShow}
                                        >
                                            <BiPencil size={14} />
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            <BiTrash size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 5 - Contact Page */}
                            <tr>
                                <th scope="row">5</th>
                                <td>Contact Page</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                      <Image src="/img/agri-banner.png" width={150} height={46} alt="" />
                                    </div>
                                </td>
                                <td>Contact Us</td>
                                <td>
                                    <span className="badge bg-success">Published</span>
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleShow}
                                        >
                                            <BiPencil size={14} />
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            <BiTrash size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 6 - FAQ Page */}
                            <tr>
                                <th scope="row">6</th>
                                <td>FAQ Page</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                         <Image src="/img/contact-banner.png" width={150} height={46} alt="" />
                                    </div>
                                </td>
                                <td>Frequently Asked Questions</td>
                                <td>
                                    <span className="badge bg-success">Published</span>
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleShow}
                                        >
                                            <BiPencil size={14} />
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            <BiTrash size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Edit Modal with Image Upload */}
                <Modal show={show} onHide={handleClose} size="lg" centered>
                    <Modal.Header closeButton style={{ backgroundColor: '#4361ee', color: 'white' }}>
                        <Modal.Title>
                            <BiPencil className="me-2" size={24} />
                            Edit Banner
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/* Image Upload Section */}
                        <div className="mb-4">
                            <label className="form-label fw-bold mb-3">Banner Image</label>

                            {/* Image Preview */}
                            <div className="image-preview-container mb-3">
                                {previewImage ? (
                                    <div className="position-relative">
                                        <img
                                            src={previewImage}
                                            alt="Preview"
                                            className="preview-image"
                                        />
                                        <button
                                            className="btn btn-sm btn-danger remove-image"
                                            onClick={() => setPreviewImage(null)}
                                        >
                                            <BiX size={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="upload-placeholder">
                                        <BiImage size={50} className="text-secondary mb-3" />
                                        <p className="text-secondary mb-2">No image selected</p>
                                        <p className="text-secondary small">Current: home-banner.jpg</p>
                                    </div>
                                )}
                            </div>

                            {/* Upload Button */}
                            <div className="d-flex gap-2">
                                <label className="btn btn-outline-primary w-100">
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
                        </div>

                        {/* Form Fields */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Page Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value="Home Page"
                                readOnly
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Banner Title</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue="Welcome to Our Website"
                                placeholder="Enter banner title"
                            />
                        </div>


                        <div className="mb-3">
                            <label className="form-label fw-bold">Status</label>
                            <select className="form-select" defaultValue="Published">
                                <option value="Published">Published</option>
                                <option value="Draft">Draft</option>
                            </select>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleClose} style={{ backgroundColor: '#4361ee' }}>
                            <BiSave className="me-2" />
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


        </div>
    );
}