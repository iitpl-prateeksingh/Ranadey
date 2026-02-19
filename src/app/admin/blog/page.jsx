"use client";
import Link from "next/link";
import Image from "next/image";
import {
  BiImage,
  BiPencil,
  BiTrash,
  BiPlusCircle,
  BiSearch,
} from "react-icons/bi";

export default function BlogPage() {
  return (
    <div className="">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <div className="dashboard-header mb-0">
            <h1>Blog Posts</h1>
          </div>
          <p className="text-muted">Manage your blog posts</p>
        </div>

        <Link href="/admin/addblog">
          <button className="btn btn-primary">
            <BiPlusCircle className="me-2" />
            Add New Post
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
              placeholder="Search blogs..."
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
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>
                {" "}
                <Image
                  src="/img/agri-banner.png"
                  width={150}
                  height={46}
                  alt=""
                />
              </td>
              <td>Welcome to Our Blog</td>
              <td>Admin</td>
              <td>2024-01-15</td>
              <td>
                <span className="badge bg-success">Published</span>
              </td>
              <td>
                <Link href="/admin/blog/edit">
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
              <td>
                {" "}
                <Image
                  src="/img/agri-banner.png"
                  width={150}
                  height={46}
                  alt=""
                />
              </td>
              <td>10 Tips for Better Writing</td>
              <td>John Doe</td>
              <td>2024-01-14</td>
              <td>
                <span className="badge bg-success">Published</span>
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
              <td>
                {" "}
                <Image
                  src="/img/agri-banner.png"
                  width={150}
                  height={46}
                  alt=""
                />
              </td>
              <td>Getting Started with Next.js</td>
              <td>Jane Smith</td>
              <td>2024-01-13</td>
              <td>
                <span className="badge bg-warning text-dark">Draft</span>
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
