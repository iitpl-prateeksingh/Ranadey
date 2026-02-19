"use client";
import { useState } from "react";
import Link from "next/link";

export default function EditRoleClient({ id }) {

  // Dummy roles list (Replace with API data)
  const rolesList = [
    "Admin",
    "Manager",
    "Editor",
    "Customer Support",
  ];

  const [roleName, setRoleName] = useState("Admin");

  const [permissions, setPermissions] = useState([
    "Dashboard",
    "User Management",
  ]);

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
    console.log({ id, roleName, permissions });
  };

  return (
    <div className="container">
      <div className="mb-4">
        <h2 className="fw-bold mb-0">Edit Role</h2>
        <p className="text-muted">Update role permissions</p>
      </div>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>

            {/* Role Dropdown */}
            <div className="mb-3">
              <label className="form-label">Select Role *</label>
              <select
                className="form-select"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                required
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
                        id={`edit-perm-${index}`}
                        checked={permissions.includes(permission)}
                        onChange={() =>
                          handlePermissionChange(permission)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`edit-perm-${index}`}
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
                Update Role
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
