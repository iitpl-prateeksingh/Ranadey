"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BiSave, BiPlus, BiTrash, BiCategory, BiSort, BiArrowBack } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { apiRequest } from "../../../../services/api"; 
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

function CategoryForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editSlug = searchParams.get("edit");

  const [formData, setFormData] = useState({
    name: "",
    order: 1,
    section2: [{ heading: "", description: "" }]
  });

  const [section1Content, setSection1Content] = useState("");
  const [section3Content, setSection3Content] = useState("");

  const { quill: quillS1, quillRef: refS1 } = useQuill({ theme: "snow", placeholder: "Section 1 content..." });
  const { quill: quillS3, quillRef: refS3 } = useQuill({ theme: "snow", placeholder: "Section 3 content..." });

  // Load data for Edit Mode
  useEffect(() => {
    if (editSlug) {
      const fetchCategory = async () => {
        try {
          const res = await apiRequest(`/categories/${editSlug}`);
          if (res.success) {
            const cat = res.data;
            setFormData({
              name: cat.name,
              order: cat.order,
              section2: cat.description?.section2 || [{ heading: "", description: "" }]
            });
            setSection1Content(cat.description?.section1 || "");
            setSection3Content(cat.description?.section3 || "");
            if (quillS1) quillS1.clipboard.dangerouslyPasteHTML(cat.description?.section1 || "");
            if (quillS3) quillS3.clipboard.dangerouslyPasteHTML(cat.description?.section3 || "");
          }
        } catch (err) {
          console.error("Error fetching category:", err);
        }
      };
      fetchCategory();
    }
  }, [editSlug, quillS1, quillS3]);

  useEffect(() => {
    if (quillS1) quillS1.on("text-change", () => setSection1Content(quillS1.root.innerHTML));
    if (quillS3) quillS3.on("text-change", () => setSection3Content(quillS3.root.innerHTML));
  }, [quillS1, quillS3]);

  const handleSave = async () => {
    if(!formData.name) return alert("Please enter a category name");

    const payload = {
      name: formData.name,
      order: formData.order,
      description: {
        section1: section1Content,
        section2: formData.section2,
        section3: section3Content
      }
    };

    try {
      const endpoint = editSlug ? `/categories/${editSlug}` : "/categories";
      const method = editSlug ? "PATCH" : "POST";
      
      const res = await apiRequest(endpoint, {
        method: method,
        body: payload
      });

      if (res.success) {
        alert(editSlug ? "Category Updated! ✅" : "Category Created! ✅");
        router.push("/admin/category");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const updateSection2 = (index, field, value) => {
    const updated = [...formData.section2];
    updated[index][field] = value;
    setFormData({ ...formData, section2: updated });
  };

  return (
    <div className="page-content py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Button variant="light" onClick={() => router.back()}><BiArrowBack /> Back</Button>
          <h2 className="fw-bold m-0">{editSlug ? "Edit Category" : "Add New Category"}</h2>
          <Button variant="primary" onClick={handleSave}><BiSave /> Save Changes</Button>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <Card className="border-0 shadow-sm p-4 mb-4">
              <div className="row">
                <div className="col-md-8 mb-3">
                  <label className="fw-bold small mb-2">Category Name</label>
                  <input type="text" className="form-control" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="fw-bold small mb-2">Display Order</label>
                  <input type="number" className="form-control" value={formData.order} onChange={(e) => setFormData({...formData, order: parseInt(e.target.value)})} />
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-sm p-4 mb-4">
              <h6 className="fw-bold mb-3">Section 1 (Intro)</h6>
              <div ref={refS1} style={{ height: "150px" }} />
            </Card>

            <Card className="border-0 shadow-sm p-4 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Section 2 (Nutrient Details)</h6>
                <Button size="sm" onClick={() => setFormData({...formData, section2: [...formData.section2, {heading: "", description: ""}]})}><BiPlus /> Add Item</Button>
              </div>
              {formData.section2.map((item, index) => (
                <div key={index} className="border p-3 rounded mb-3 bg-light position-relative">
                  <button className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2" onClick={() => setFormData({ ...formData, section2: formData.section2.filter((_, i) => i !== index)})}><BiTrash /></button>
                  <input type="text" className="form-control mb-2 fw-bold" placeholder="Heading" value={item.heading} onChange={(e) => updateSection2(index, "heading", e.target.value)} />
                  <textarea className="form-control" placeholder="Description" rows="2" value={item.description} onChange={(e) => updateSection2(index, "description", e.target.value)} />
                </div>
              ))}
            </Card>

            <Card className="border-0 shadow-sm p-4 mb-4">
              <h6 className="fw-bold mb-3">Section 3 (Soil Guidance)</h6>
              <div ref={refS3} style={{ height: "150px" }} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Next.js requirement for useSearchParams
export default function SuspenseWrapper() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <CategoryForm />
    </Suspense>
  );
}