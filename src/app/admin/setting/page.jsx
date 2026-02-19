"use client";
import { useState, useRef } from "react";
import {
  BiGlobe,
  BiEnvelope,
  BiPhone,
  BiMap,
  BiSave,
  BiUpload,
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
  BiLinkExternal,
  BiTrash,
} from "react-icons/bi";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";

export default function SettingsPage() {
  const fileInputRef = useRef(null);
  const [settings, setSettings] = useState({
    logo: "https://example.com/logo.png",
    appLink: "https://play.google.com/app",
    socialMedia: {
      linkdin: "https://linkedin.com/company/test",
      facebook: "https://facebook.com/test",
      twitter: "https://twitter.com/test",
      youtube: "https://youtube.com/test",
      instagram: "https://instagram.com/test",
      other: "https://example.com",
    },
    address1: {
      name: "Head Office",
      detail: "123 Street, Delhi",
      tel: "9999999999",
    },
    address2: {
      name: "Branch Office",
      detail: "456 Street, Noida",
      tel: "8888888888",
    },
    location: "s",
    email: "info@test.com",
    phone: "9999999999",
  });
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setSettings((prev) => ({
      ...prev,
      logo: imageUrl,
    }));
  };

  const handleLogoDelete = () => {
    setSettings((prev) => ({
      ...prev,
      logo: "",
    }));

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  // Handle nested updates for socialMedia and addresses
  const handleNestedChange = (section, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving Settings:", settings);
    alert("Settings Updated Successfully! ⚙️");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <div className="dashboard-header mb-0">
            <h1>Global Settings</h1>
          </div>
          <p className="text-muted">Manage system users</p>
        </div>
      </div>
      <div
        className="page-content p-4"
        style={{ backgroundColor: "#f4f7f6", minHeight: "100vh" }}
      >
        <Form onSubmit={handleSave}>
          <Row>
            {/* --- LEFT COLUMN: BRANDING & CONTACT --- */}
            <Col lg={7}>
              {/* Branding Section */}
              <Card className="shadow-sm border-0 mb-4">
                <Card.Body>
                  <h5 className="text-primary mb-3 border-bottom pb-2">
                    General Branding
                  </h5>

                  <Row className="align-items-center">
                    {/* LOGO SECTION */}
                    <Col md={4} className="text-center mb-3 mb-md-0">
                      <div
                        className="border rounded p-3 bg-light mb-2"
                        style={{ height: "80px !important" }}
                      >
                        {settings.logo ? (
                          <img
                            src={settings.logo}
                            alt="Logo Preview"
                            style={{
                              maxHeight: "80px",
                              maxWidth: "100%",
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <p className="text-muted small mb-0">
                            No Logo Uploaded
                          </p>
                        )}
                        <small className="text-muted d-block mt-2">
                          Recommended: 150x200px (.webp)
                        </small>
                      </div>

                      {/* Hidden File Input */}
                      <Form.Control
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleLogoUpload}
                        style={{ display: "none" }}
                      />

                      <div className="d-grid gap-2">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => fileInputRef.current.click()}
                        >
                          <BiUpload className="me-1" /> Change Logo
                        </Button>

                        {settings.logo && (
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={handleLogoDelete}
                          >
                            <BiTrash className="me-1" /> Delete Logo
                          </Button>
                        )}
                      </div>
                    </Col>

                    {/* RIGHT SIDE */}
                    <Col md={8}>
                      <Form.Group className="mb-3">
                        <Form.Label className="small fw-bold">
                          App Store / Play Store Link
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <BiGlobe />
                          </InputGroup.Text>
                          <Form.Control
                            value={settings.appLink}
                            onChange={(e) =>
                              setSettings({
                                ...settings,
                                appLink: e.target.value,
                              })
                            }
                          />
                        </InputGroup>
                      </Form.Group>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="small fw-bold">
                              Primary Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              value={settings.email}
                              onChange={(e) =>
                                setSettings({
                                  ...settings,
                                  email: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="small fw-bold">
                              Primary Phone
                            </Form.Label>
                            <Form.Control
                              value={settings.phone}
                              onChange={(e) =>
                                setSettings({
                                  ...settings,
                                  phone: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* Address Management */}
              <h5 className="mb-3 mt-4">Office Locations</h5>
              <Row>
                {[1, 2].map((num) => (
                  <Col md={6} key={num} className="mb-4">
                    <Card className="shadow-sm border-0 h-100">
                      <Card.Body>
                        <h6 className="fw-bold text-secondary mb-3 d-flex align-items-center">
                          <BiMap className="me-2" />{" "}
                          {num === 1 ? "Primary Office" : "Secondary Office"}
                        </h6>
                        <Form.Group className="mb-2">
                          <Form.Label className="small">Office Name</Form.Label>
                          <Form.Control
                            value={settings[`address${num}`].name}
                            onChange={(e) =>
                              handleNestedChange(
                                `address${num}`,
                                "name",
                                e.target.value,
                              )
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Label className="small">
                            Full Address
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={2}
                            value={settings[`address${num}`].detail}
                            onChange={(e) =>
                              handleNestedChange(
                                `address${num}`,
                                "detail",
                                e.target.value,
                              )
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-0">
                          <Form.Label className="small">Telephone</Form.Label>
                          <Form.Control
                            value={settings[`address${num}`].tel}
                            onChange={(e) =>
                              handleNestedChange(
                                `address${num}`,
                                "tel",
                                e.target.value,
                              )
                            }
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* --- RIGHT COLUMN: SOCIAL MEDIA --- */}
            <Col lg={5}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h5 className="text-primary mb-3 border-bottom pb-2">
                    Social Media Handles
                  </h5>

                  {[
                    {
                      key: "linkdin",
                      icon: <BiLogoLinkedin />,
                      label: "LinkedIn",
                      color: "#0077b5",
                    },
                    {
                      key: "facebook",
                      icon: <BiLogoFacebook />,
                      label: "Facebook",
                      color: "#1877f2",
                    },
                    {
                      key: "twitter",
                      icon: <BiLogoTwitter />,
                      label: "Twitter / X",
                      color: "#000000",
                    },
                    {
                      key: "youtube",
                      icon: <BiLogoYoutube />,
                      label: "YouTube",
                      color: "#ff0000",
                    },
                    {
                      key: "instagram",
                      icon: <BiLogoInstagram />,
                      label: "Instagram",
                      color: "#e4405f",
                    },
                    {
                      key: "other",
                      icon: <BiLinkExternal />,
                      label: "Other Website",
                      color: "#6c757d",
                    },
                  ].map((social) => (
                    <Form.Group className="mb-3" key={social.key}>
                      <Form.Label className="small fw-bold">
                        {social.label}
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text
                          style={{
                            backgroundColor: social.color,
                            color: "white",
                            border: "none",
                          }}
                        >
                          {social.icon}
                        </InputGroup.Text>
                        <Form.Control
                          placeholder={`https://${social.key}.com/...`}
                          value={settings.socialMedia[social.key]}
                          onChange={(e) =>
                            handleNestedChange(
                              "socialMedia",
                              social.key,
                              e.target.value,
                            )
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  ))}

                  <hr />
                  <Form.Group>
                    <Form.Label className="small fw-bold">
                      Map Location Code (ID/ShortCode)
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <BiMap />
                      </InputGroup.Text>
                      <Form.Control
                        value={settings.location}
                        onChange={(e) =>
                          setSettings({ ...settings, location: e.target.value })
                        }
                      />
                    </InputGroup>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
            <div className="text-end mt-4">
              <Button type="submit">
                <BiSave /> Save All Changes
              </Button>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
}
