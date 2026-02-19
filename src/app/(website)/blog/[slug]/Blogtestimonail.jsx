"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

function Blogtestimonail() {
  return (
    <>
      <section className="section-product-silder">
        <div className="container">
          <div className="row">
          
            <div className="col-12">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1} // 👈 default 4 slides
                navigation
                autoplay={{
                  delay: 250000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1, // 👈 desktop pe 4
                  },
                }}
              >
                <SwiperSlide>
                  <div className="testional-box">
                    <div className="testimonial-youtube">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2zEnoW8p130?si=Mzny0Ld8SD0F5Vp9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="testimonail-inner">
                      <Image
                        alt=""
                        src="/img/all.png"
                        width={400}
                        height={200}
                        className="lo-detailimg11"
                      />
                      <div className="testinonial-content">
                        <h3>Micronutrients are key for health, aiding in cell repair and hormone production.</h3>
                        <p>Trace elements and vitamins are necessary for optimal health and development.</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testional-box">
                    <div className="testimonial-youtube">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2zEnoW8p130?si=Mzny0Ld8SD0F5Vp9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="testimonail-inner">
                      <Image
                        alt=""
                        src="/img/all.png"
                        width={400}
                        height={200}
                        className="lo-detailimg11"
                      />
                      <div className="testinonial-content">
                        <h3>Micronutrients are key for health, aiding in cell repair and hormone production.</h3>
                        <p>Trace elements and vitamins are necessary for optimal health and development.</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogtestimonail;
