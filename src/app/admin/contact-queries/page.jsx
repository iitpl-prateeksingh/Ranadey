"use client";
import { useState } from "react";
import {
  BiTrash,
  BiSearch,
  BiShow,
} from "react-icons/bi";

export default function ContactPage() {
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      phone: "9876543210",
      email: "john@example.com",
      message: "I am interested in your products. Please share pricing details.",
      acceptedTerms: true,
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      phone: "9123456780",
      email: "jane@example.com",
      message: "Please contact me regarding bulk order and shipping options.",
      acceptedTerms: true,
      createdAt: "2024-01-14",
    },
  ];

  return (
    <div className="">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
            <div className="dashboard-header mb-0">
            <h1>Contact Messages</h1>
          </div>
     
          <p className="text-muted">Manage customer inquiries</p>
        </div>
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
              placeholder="Search messages..."
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
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Accepted</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>{contact.firstName} {contact.lastName}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td style={{ maxWidth: "200px" }}>
                  {contact.message.substring(0, 30)}...
                </td>
                <td>
                  {contact.acceptedTerms ? (
                    <span className="badge bg-success">Yes</span>
                  ) : (
                    <span className="badge bg-danger">No</span>
                  )}
                </td>
                <td>{contact.createdAt}</td>
                <td>
                  {/* VIEW */}
                  <button
                    className="btn btn-sm btn-info me-2 text-white"
                    onClick={() => setSelectedContact(contact)}
                  >
                    <BiShow />
                  </button>

                  {/* DELETE */}
                  <button className="btn btn-sm btn-danger">
                    <BiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {selectedContact && (
        <div className="modal d-block" tabIndex="-1" style={{background:"#00000059"}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Message Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedContact(null)}
                ></button>
              </div>

              <div className="modal-body">
                <p><strong>Name:</strong> {selectedContact.firstName} {selectedContact.lastName}</p>
                <p><strong>Phone:</strong> {selectedContact.phone}</p>
                <p><strong>Email:</strong> {selectedContact.email}</p>
                <p><strong>Accepted Terms:</strong> {selectedContact.acceptedTerms ? "Yes" : "No"}</p>
                <hr />
                <p><strong>Message:</strong></p>
                <p>{selectedContact.message}</p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedContact(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
