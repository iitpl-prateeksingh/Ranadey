"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { GrContactInfo } from "react-icons/gr";

import {
  FiGrid,
  FiImage,
  FiBox,
  FiEdit,
  FiSettings,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import { MdCategory } from "react-icons/md";
import { User } from "lucide-react";
import { FaUserGear, FaUsers } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";

export default function LeftSidebar({ sidebarOpen,toggleSidebar }) {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState("");

  // Compute the menu that should be open based on pathname
  const defaultOpenMenu = useMemo(() => {
    if (pathname.startsWith("/admin/pageBanner")) {
      return "pages";
    } else if (pathname.startsWith("/admin/product")) {
      return "product";
    } else if (pathname.startsWith("/admin/blog")) {
      return "blog";
    }
    return "";
  }, [pathname]);

  // Auto open menu if route matches
  useEffect(() => {
    setOpenMenu(defaultOpenMenu);
  }, [defaultOpenMenu]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const isActive = (path) => pathname === path;

  return (
    <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
      {/* Header */}
      <Link className="text-decoration-none" href="/admin">
      <div
        className="sidebar-header"
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <Image src="/img/logo.png" width={58} height={46} alt="" />
        <p
          className="text-center text-white"
          style={{ fontSize: "28px", fontWeight: "900" }}
        >
          IMT
        </p>
      </div>
        </Link>

      <ul className="sidebar-nav">
        {/* Dashboard */}
        <li>
          <Link
            href="/admin"
            className={`sidebar-link ${isActive("/admin") ? "active" : ""}`}
            onClick={() => toggleSidebar()}
          >
            <FiGrid /> Dashboard
          </Link>
        </li>
       <li>
          <Link
            href="/admin/user-management"
            className={`sidebar-link ${isActive("/admin/user-management") ? "active" : ""}`}
            onClick={() => toggleSidebar()}
          >
            <FaUsers /> User Management
          </Link>
        </li>
        {/* Pages with Submenu */}
        <li>
          <div
            className="sidebar-link d-flex justify-content-between align-items-center"
            onClick={() => toggleMenu("pages")}
          >
            <span className="d-flex align-items-center" style={{gap:"10px"}}>
              <FiImage /> Pages
            </span>
            {openMenu === "pages" ? <FiChevronDown /> : <FiChevronRight />}
          </div>

          {openMenu === "pages" && (
            <ul className="submenu">
              <li>
                <Link
                  href="/admin/home"
                  className={isActive("/admin/home") ? "active" : ""}
                  onClick={() => toggleSidebar()}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/about"
                  className={isActive("/admin/about") ? "active" : ""}
                  onClick={() => toggleSidebar()}
                >
                  About
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/admin/our-history"
                  className={isActive("/admin/our-history") ? "active" : ""}
                  onClick={() => toggleSidebar()}
                >
                  Our History
                </Link>
                <Link
                onClick={() => toggleSidebar()}
                  href="/admin/agri-lab-page"
                  className={isActive("/admin/agri-lab-page") ? "active" : ""}
                >
                  Agri-Lab
                </Link>
                <Link
                onClick={() => toggleSidebar()}
                  href="/admin/product-page"
                  className={isActive("/admin/product-page") ? "active" : ""}
                >
                  Products
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Product with Submenu */}
        <li>
          <div
            className="sidebar-link d-flex justify-content-between align-items-center"
            onClick={() => toggleMenu("product")}
          >
            <span  className="d-flex align-items-center" style={{gap:"10px"}}>
              <FiBox /> Product
            </span>
            {openMenu === "product" ? <FiChevronDown /> : <FiChevronRight />}
          </div>

          {openMenu === "product" && (
            <ul className="submenu">
              <li>
                <Link
                onClick={() => toggleSidebar()}
                  href="/admin/product/add-product"
                  className={isActive("/admin/product/add-product") ? "active" : ""}
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                onClick={() => toggleSidebar()}
                  href="/admin/product"
                  className={isActive("/admin/product") ? "active" : ""}
                >
                  Product List
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* Setting */}
        <li>
          <Link
            href="/admin/category"
            className={`sidebar-link ${isActive("/admin/category") ? "active" : ""}`}
          >
            <MdCategory /> Category
          </Link>
        </li>
      
        <li>
          <div
            className="sidebar-link d-flex justify-content-between align-items-center"
            onClick={() => toggleMenu("blog")}
          >
            <span  className="d-flex align-items-center" style={{gap:"10px"}}>
              <FiEdit /> Blog
            </span>
            {openMenu === "blog" ? <FiChevronDown /> : <FiChevronRight />}
          </div>

          {openMenu === "blog" && (
            <ul className="submenu">
              <li>
                <Link
                onClick={() => toggleSidebar()}
                  href="/admin/blog/add"
                  className={isActive("/admin/blog/add") ? "active" : ""}
                >
                  Add Blog
                </Link>
              </li>
              <li>
                <Link
                onClick={() => toggleSidebar()}
                  href="/admin/blog"
                  className={isActive("/admin/blog") ? "active" : ""}
                >
                  Blog List
                </Link>
              </li>
            </ul>
          )}
        </li>
      <li>
          <Link
            href="/admin/contact-queries"
            className={`sidebar-link ${isActive("/admin/contact-queries") ? "active" : ""}`}
          >
            <GrContactInfo  /> Contact Queries
          </Link>
        </li>
      <li>
          <Link
            href="/admin/role-permissions"
            className={`sidebar-link ${isActive("/admin/role-permissions") ? "active" : ""}`}
          >
            <FaUserCog  />  Role & Permissions
          </Link>
        </li>
        {/* Setting */}
        <li>
          <Link
            href="/admin/setting"
            className={`sidebar-link ${isActive("/admin/setting") ? "active" : ""}`}
          >
            <FiSettings /> Setting
          </Link>
        </li>
      </ul>
    </div>
  );
}
