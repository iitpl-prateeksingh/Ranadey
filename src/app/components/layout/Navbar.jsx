"use client";
import { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

function Navbar() {
   const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="nav-main">
                <div className="nav_logo">
                  <Image
                    src="/img/logo.png"
                    width={58}
                    height={46}
                    alt="Hero Banner"
                  />
                  Institute for Micronutrient Technology
                </div>
                <div className={`nav_link ${navOpen ? "activenav" : ""}`}>
                  <ul>
                    <li className="close_nav" onClick={() => setNavOpen(false)}> 
                      <IoMdClose/>
                    </li>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us </Link>
                    </li>
                    <li>
                      <Link href="/our-history">Our History </Link>
                    </li>
                    <li>
                      <Link href="/our-product">Our Products </Link>
                    </li>
                    <li>
                      <Link href="/agri-lab">Agri-Lab </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact us</Link>
                    </li>
                     <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="download-btn">Download BPN app</Link>
                    </li>
                  </ul>
                </div>
               <div className="nav-open" onClick={() => setNavOpen(true)}>
        <FiMenu />
      </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
