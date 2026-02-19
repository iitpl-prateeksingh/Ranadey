import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-row">
                  <div className="footer-logo">
                    <Image
                      src="/img/logo.png"
                      width={58}
                      height={46}
                      alt="Hero Banner"
                    />
                  </div>
                  <div className="footer-nav">
                    <ul>
                      <li>
                        <Link href="/" className="active">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us </Link>
                      </li>
                      <li>
                        <Link href="/services">Our History </Link>
                      </li>
                      <li>
                        <Link href="/contact">Our Products </Link>
                      </li>
                      <li>
                        <Link href="/contact">Agri-Lab </Link>
                      </li>
                      <li>
                        <Link href="/contact">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/contact">Download BPN app</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <Link href="/">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
            <ul>
                <li>
                    ©2026, All right reserved.
                </li>
                 <li>
                    <Link href="/">Privacy Policy</Link>
                </li>
                 <li>
                    <Link href="/">Terms of Service</Link>
                </li>
                 <li>
                    <Link href="/">Cookies Settings</Link>
                </li>
                
            </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
