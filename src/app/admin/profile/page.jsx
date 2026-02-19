"use client";
import React, { useState, useRef } from "react";
import { 
  BiUser, 
  BiEnvelope, 
  BiLockAlt, 
  BiCamera, 
  BiSave, 
  BiPhone, 
  BiMap, 
  BiCheckCircle,
  BiX 
} from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function AdminProfile() {
  const fileInputRef = useRef(null);
  const [profile, setProfile] = useState({
    fullName: "Admin User",
    email: "admin@example.com",
    phone: "+1 234 567 890",
    role: "Super Admin",
    location: "New York, USA",
    bio: "Managing the platform operations and content strategy."
  });

  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  // Function to remove the profile image
  const removeAvatar = () => {
    setAvatar(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the input so same file can be uploaded again
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
    console.log("Updated Profile:", profile);
  };

  return (
    <div className="page-content">
      <div className="mb-4">
        <h2 className="mb-1">Admin Profile</h2>
        <p className="text-secondary">View and update your personal information</p>
      </div>

      <div className="row">
        {/* Left Column: Profile Card */}
        <div className="col-lg-4">
          <Card className="border-0 shadow-sm rounded-4 mb-4 text-center p-4">
            <div className="position-relative d-inline-block mx-auto mb-3">
              <div 
                className="rounded-circle overflow-hidden border border-4 border-white shadow-sm"
                style={{ width: "120px", height: "120px", backgroundColor: "#f8f9fa" }}
              >
                {avatar ? (
                  <img src={avatar} alt="Avatar" className="w-100 h-100 object-fit-cover" />
                ) : (
                  <BiUser size={60} className="mt-4 text-secondary" />
                )}
              </div>
              
              {/* Change/Upload Icon */}
              <label 
                className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle d-flex p-2 shadow-sm"
                style={{ cursor: "pointer", transform: "translate(-5px, -5px)" }}
                title="Upload Photo"
              >
                <BiCamera size={18} />
                <input 
                  type="file" 
                  ref={fileInputRef}
                  hidden 
                  onChange={handleAvatarChange} 
                  accept="image/*" 
                />
              </label>

              {/* Delete Icon - Only shows if avatar exists */}
              {avatar && (
                <button 
                  type="button"
                  className="position-absolute top-0 end-0 bg-danger text-white rounded-circle d-flex p-1 border-0 shadow-sm"
                  style={{ transform: "translate(5px, 5px)" }}
                  onClick={removeAvatar}
                  title="Remove Photo"
                >
                  <BiX size={18} />
                </button>
              )}
            </div>
            
            <h5 className="fw-bold mb-1">{profile.fullName}</h5>
            <p className="text-primary small fw-bold mb-3">{profile.role}</p>
            <hr />
            <div className="text-start mt-3">
              <p className="small text-muted mb-2"><BiEnvelope className="me-2" /> {profile.email}</p>
              <p className="small text-muted mb-2"><BiPhone className="me-2" /> {profile.phone}</p>
              <p className="small text-muted mb-0"><BiMap className="me-2" /> {profile.location}</p>
            </div>
          </Card>

          <Card className="border-0 shadow-sm rounded-4 p-4">
            <h6 className="fw-bold mb-3">Security Status</h6>
            <div className="d-flex align-items-center mb-3">
              <BiCheckCircle className="text-success me-2" size={20} />
              <span className="small">Two-Factor Authentication: <strong>Enabled</strong></span>
            </div>
            <Button variant="outline-danger" size="sm" className="w-100">
              Change Password
            </Button>
          </Card>
        </div>

        {/* Right Column: Edit Form */}
        <div className="col-lg-8">
          <Card className="border-0 shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-4">Edit Profile Details</h5>
            <form onSubmit={handleUpdate}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={profile.fullName}
                    onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small">Phone Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small">Location</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={profile.location}
                    onChange={(e) => setProfile({...profile, location: e.target.value})}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label fw-bold small">Bio</label>
                  <textarea 
                    className="form-control" 
                    rows="4"
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  ></textarea>
                </div>
              </div>

              <hr className="my-4" />

              <h5 className="fw-bold mb-4">Update Password</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small">Current Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><BiLockAlt /></span>
                    <input type="password" title="current" className="form-control border-start-0 bg-light" placeholder="********" />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small">New Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><BiLockAlt /></span>
                    <input type="password" title="new" className="form-control border-start-0" placeholder="New password" />
                  </div>
                </div>
              </div>

              <div className="text-end mt-4">
                <Button variant="primary" type="submit" className="px-5">
                  <BiSave className="me-2" />
                  Save Changes
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}