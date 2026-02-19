"use client";
import { useState } from "react";
import Link from "next/link";

export default function AddRolePage() {

  // Dummy roles list (Replace with API data if needed)
  const rolesList = [
    "Admin",
    "Manager",
    "Editor",
    "Customer Support",
  ];

  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState([]);

  const permissionList = [
    "Dashboard",
    "User Management",
    "Pages",
    "Product",
    "Category",
    "Blog",
    "Setting",
  ];

  const handlePermissionChange = (permission) => {
    if (permissions.includes(permission)) {
      setPermissions(permissions.filter((p) => p !== permission));
    } else {
      setPermissions([...permissions, permission]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ roleName, permissions });
  };

  return (
    <div className="container">

      <div className="mb-4">
        <h2 className="mb-0 fw-bold">Add Role</h2>
        <p className="text-muted">Create new role and assign permissions</p>
      </div>

      <div className="card">
        <div className="card-body">

          <form onSubmit={handleSubmit}>

            {/* Role Dropdown */}
            <div className="mb-3">
              <label className="form-label">Select Role *</label>
              <select
                className="form-select"
                required
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
              >
                <option value="">-- Select Role --</option>
                {rolesList.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/* Permissions */}
            <div className="mb-4">
              <label className="form-label">Permissions</label>
              <div className="row">
                {permissionList.map((permission, index) => (
                  <div className="col-md-4 mb-2" key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`perm-${index}`}
                        checked={permissions.includes(permission)}
                        onChange={() =>
                          handlePermissionChange(permission)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`perm-${index}`}
                      >
                        {permission}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Save Role
              </button>
              <Link href="/admin/role-permissions">
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
