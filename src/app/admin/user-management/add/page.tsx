"use client";
import { useState } from "react";
import Link from "next/link";

export default function AddUserPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    role: "",
  });

  const roles = ["Admin", "Editor", "Manager", "User"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      
      <div className="mb-2">
        <div className="dashboard-header mb-0">
          <h1>Add New User</h1>
        </div>
        <p className="text-secondary">Create a new system user</p>
      </div>

      <div className="card">
        <div className="card-body">

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password *</label>
              <input
                type="password"
                name="password"
                className="form-control"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Role Dropdown */}
            <div className="mb-4">
              <label className="form-label">Role *</label>
              <select
                name="role"
                className="form-select"
                required
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Save User
              </button>
              <Link href="/admin/user-management">
                <button type="button" className="btn btn-secondary">
                  Cancel
                </button>
              </Link>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}
 