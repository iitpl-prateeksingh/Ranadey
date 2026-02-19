"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiPencil, BiTrash, BiPlusCircle, BiSearch, BiPlus } from "react-icons/bi";
import { apiRequest } from "../../../services/api";

export default function CategoryListing() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCategories = async () => {
    try {
      const res = await apiRequest("/categories");
      if (res.success) {
        setCategories(res.data);
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (slug) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await apiRequest(`/categories/${slug}`, { method: "DELETE" });
        alert("Category deleted successfully! ✅");
        fetchCategories();
      } catch (err) {
        alert("Delete failed: " + err.message);
      }
    }
  };

  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Product Categories</h2>
          <p className="text-muted">Manage your store categories dynamically</p>
        </div>
        <Link href="/admin/category/add-category">
          <button className="btn btn-primary d-flex align-items-center shadow-sm">
            <BiPlusCircle className="me-2" /> Add New Category
          </button>
        </Link>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group shadow-sm">
            <span className="input-group-text bg-white border-end-0"><BiSearch /></span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="ps-3">#</th>
                <th>Category Name</th>
                <th>Slug</th>
                <th>Display Order</th>
                <th className="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="5" className="text-center p-5">Loading categories...</td></tr>
              ) : filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => (
                  <tr key={category._id}>
                    <td className="ps-3">{index + 1}</td>
                    <td><strong>{category.name}</strong></td>
                    <td><code>{category.slug}</code></td>
                    <td><span className="badge bg-light text-dark border">{category.order}</span></td>
                    <td className="text-end pe-4">
                      <button 
                        onClick={() => router.push(`/admin/product/add-product?category=${category.slug}`)} 
                        className="btn btn-sm btn-outline-success me-2"
                        title="Add Product to this Category"
                      >
                        <BiPlus />
                      </button>
                      <Link href={`/admin/category/add-category?edit=${category.slug}`}>
                        <button className="btn btn-sm btn-outline-primary me-2"><BiPencil /></button>
                      </Link>
                      <button 
                        className="btn btn-sm btn-outline-danger" 
                        onClick={() => handleDelete(category.slug)}
                      ><BiTrash /></button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="5" className="text-center p-4">No categories found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
