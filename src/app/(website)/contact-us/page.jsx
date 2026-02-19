import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";


function page() {
  return (
    <>
      <section className="contact-section">
        <h1>
          Contact us
        </h1>
      </section>
      <section className="contact-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 conatct-heh">
              <h2><FaLocationDot /> Our Location</h2>
              <div className="card-contact">
                <p><b>IMT TECHNOLOGIES LTD</b></p>
                <p>Shri Krishna, Krishna Keval Nagar, 1A, Kondhwa Khurd,Pune - 411048</p>
                <a href=""><b>Tel:</b> 020-26833748</a>
              </div>

              <div className="card-contact card-contact2">
                <p><b>MICNELF MICRONUTRIENTS PVT. LTD</b></p>
                <p>NO.12, PRUTHVI PARADISE LAYOUT, DYAVASANDRA VILLAGE, HARAGADDE, JIGANI POST, ANEKAL TALUK, Bengaluru - 560105</p>
                <a href=""><b>Tel:</b> 080 - 22446029</a>
              </div>

            </div>
            <div className="col-md-6">
              <div className="map">
                <Image alt=""
                  src="/img/map.png"
                  width={400}
                  height={200}
                  className="product-hero-img"
                />
                <div className="map-box">
                  <ul>
                    <li>
                      <MdEmail />
                      <span>
                        <p><b>Email</b></p>
                        <p>admin@ranadey.com</p>
                      </span>
                    </li>
                    <li>
                      <IoCall />
                      <span>
                        <p><b>Phone</b></p>
                        <p>+912026833748</p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Image alt=""
                src="/img/contactform.png"
                width={400}
                height={200}
                className="contactform-img"
              />
            </div>
            <div className="col-md-6 contact-col">
              <h2>Let’s Connect </h2>
              <p>Connect with us today!</p>
              <form action="">
                <div className="row">
                  <div className="col-md-6 col-label">
                    <label htmlFor="" className='form-label'>First name</label>
                    <input type="text" className='form-control' placeholder='Enter First name' />
                  </div>
                  <div className="col-md-6 col-label">
                    <label htmlFor="" className='form-label'>Last name</label>
                    <input type="text" className='form-control' placeholder='Enter Last name' />
                  </div>
                  <div className="col-md-6 col-label">
                    <label htmlFor="" className='form-label'>Phone no.</label>
                    <input type="text" className='form-control' placeholder='Enter Phone no.' />
                  </div>
                  <div className="col-md-6 col-label">
                    <label htmlFor="" className='form-label'>Email.</label>
                    <input type="text" className='form-control' placeholder='Enter Email' />
                  </div>
                  <div className="col-12 col-label">
                     <label htmlFor="" className='form-label'>Message</label>
                     <textarea name="" id="" className='form-control' placeholder='Type your message...'></textarea>
                  </div>
                  <div className="col-12">
                    <label htmlFor=""><input type="checkbox" /> I accept the Terms </label>
                  </div>
                  <div className="col-12">
                    <input type="submit" value="Submit" className='submit-form' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
