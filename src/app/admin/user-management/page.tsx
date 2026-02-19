"use client";
import Link from "next/link";
import { BiPencil, BiTrash, BiPlusCircle, BiSearch } from "react-icons/bi";

export default function Page() {
  return (
    <div className="">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <div className="dashboard-header mb-0">
            <h1>Users</h1>
          </div>
          <p className="text-muted">Manage system users</p>
        </div>

        <Link href="/admin/user-management/add">
          <button className="btn btn-primary">
            <BiPlusCircle className="me-2" />
            Add New User
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
              placeholder="Search users..."
            />
          </div>
        </div>
      </div>

      {/* Static Table */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Password</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>admin@example.com</td>
              <td>Admin User</td>
              <td>********</td>
              <td>
                <span className="badge bg-primary">Admin</span>
              </td>
              <td>
                <Link href="/admin/users/edit">
                  <button className="btn btn-sm btn-primary me-2">
                    <BiPencil />
                  </button>
                </Link>
                <button className="btn btn-sm btn-danger">
                  <BiTrash />
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>john@example.com</td>
              <td>John Doe</td>
              <td>********</td>
              <td>
                <span className="badge bg-secondary">Editor</span>
              </td>
              <td>
                <button className="btn btn-sm btn-primary me-2">
                  <BiPencil />
                </button>
                <button className="btn btn-sm btn-danger">
                  <BiTrash />
                </button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>jane@example.com</td>
              <td>Jane Smith</td>
              <td>********</td>
              <td>
                <span className="badge bg-success">User</span>
              </td>
              <td>
                <button className="btn btn-sm btn-primary me-2">
                  <BiPencil />
                </button>
                <button className="btn btn-sm btn-danger">
                  <BiTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
