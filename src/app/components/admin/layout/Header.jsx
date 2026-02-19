"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function AdminHeader({ toggleSidebar }) {
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="shadow-sm px-2"
      style={{ position: "fixed", width: "100%", zIndex: 999 }}
    >
      <Container fluid>
        <div className="d-flex gap-2">
          <Button onClick={toggleSidebar} variant="light">
            <RxHamburgerMenu />
          </Button>
          <Link href="/admin">
            <div
              className=""
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <Image src="/img/logo.png" width={58} height={46} alt="" />
              <p
                className="text-center text-dark mb-0"
                style={{ fontSize: "28px", fontWeight: "900" }}
              >
                IMT
              </p>
            </div>
          </Link>
        </div>

        {/* Right Side */}
        <div className="d-flex align-items-center">
          {/* Notification */}
          {/* <Button variant="light" className="position-relative me-3 border-0">
            <FaBell size={18} />
            <Badge
              bg="danger"
              pill
              className="position-absolute top-0 start-100 translate-middle"
            >
              3
            </Badge>
          </Button> */}

          {/* Profile Dropdown */}

          <Dropdown style={{border:"1px solid rgb(33, 68, 0) !important",borderRadius:"50px"}} align="end">
            <Dropdown.Toggle
            variant="light"
              style={{borderRadius:"50px",padding:"4px"}}
              id="profileDropdown"
              className="d-flex align-items-center border-0"
            >
              <Image
                src="https://i.pravatar.cc/40"
                alt="Profile"
                width={35}
                height={35}
                className="rounded-circle me-2"
              />
              <span className="d-none d-md-inline">Admin</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow">
              <Dropdown.Item as={Link} href="/admin/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/admin/setting">
                Settings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-danger">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}
