"use client";
import Link from "next/link";
import { BiPencil, BiTrash, BiPlusCircle, BiSearch } from "react-icons/bi";

export default function RolePage() {
  const roles = [
    {
      id: 1,
      name: "Admin",
      permissions: ["Dashboard", "User Management", "Product", "Category"],
    },
    {
      id: 2,
      name: "Editor",
      permissions: ["Dashboard", "Blog", "Pages"],
    },
  ];

  return (
    <div>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-0">Roles</h2>
          <p className="text-muted">Manage user roles and permissions</p>
        </div>

        <Link href="/admin/role-permissions/add">
          <button className="btn btn-primary">
            <BiPlusCircle className="me-2" />
            Add New Role
          </button>
        </Link>
      </div>

      {/* Search */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <BiSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search roles..."
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Role Name</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {roles.map((role, index) => (
              <tr key={role.id}>
                <td>{index + 1}</td>
                <td>{role.name}</td>
                <td>
                  {role.permissions.map((perm, i) => (
                    <span key={i} className="badge bg-success me-1">
                      {perm}
                    </span>
                  ))}
                </td>
                <td>
                  <Link href={`/admin/role-permissions/edit/${role.id}`}>
                    <button className="btn btn-sm btn-primary me-2">
                      <BiPencil />
                    </button>
                  </Link>
                  <button className="btn btn-sm btn-danger">
                    <BiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
