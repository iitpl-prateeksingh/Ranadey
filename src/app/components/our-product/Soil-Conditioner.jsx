"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

function SoilConditioner() {
  return (
    <>
      <section className="product-tab-c">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Soil Conditioner & pH <br /> Rectifier 
              </h2>
              <p>
                SOIL CONDITIONERS with Orthosilicic Acid: IMT introduced the
                concept of Soil Conditioners way back in 1987. Soil Conditioners
                are soil pH specific products that help “condition” the soil so
                that the other nutrients can be taken up efficiently by the
                roots.
              </p>
              <p>
                Alkaline, Sodic and Acidic soils are not all made equal,
                and different specialised products must be utilised to bring
                these soils under cultivation. All 3 are Silica based
                conditioners (as per FCO grades) with additional nutrients
                to ameliorate excessive salts specific to the pH of the soils.  
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="product-quick">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="quick-box">
                <h4>Quick-Action Product</h4>
                <p>
                  Once added to the soil, IMT Soil Conditioners starts
                  working immediately (unlike other pH correcting agents like
                  lime) so nutrients can be used immediately by the plant.  
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="quick-box quick-box2">
                <h4>Ease of Use for farmer</h4>
                <p>
                  Formulations are compatible with NPK and can be mixed and
                  applied in the root zone in a single application.  
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-benefit">
        <Image alt=""
          src="/img/product-benefit-rec.png"
          width={400}
          height={200}
          className="product-benefit-rec"
          
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6 benefit-content">
              <h2>Benefits of using pH -specific IMT-Soil Conditioners:</h2>
              <ul>
                <li>
                  <Image
                    src="/img/Polygon-1.png"
                    width={20}
                    height={20}
                    className=""
                    alt=""
                  />
                  <div>
                    <p>
                      <b>Correct Soil pH and stabilize</b>
                    </p>
                    <p>
                      the soils to make the soils responsive to soil treatments
                    </p>
                  </div>
                </li>

                <li>
                  <Image
                    src="/img/Polygon-1.png"
                    width={20}
                    height={20}
                    className=""
                    alt=""
                  />
                  <div>
                    <p>
                      <b>Better Nutrient Use Efficiency</b>
                    </p>
                    <p>
                      NPK and other fertilizers are better utilized in presence
                      of soil conditioners.  
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
      <section className="section-product-silder">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Soil Conditioner & pH <br /> Rectifier 
              </h2>
            </div>
            <div className="col-12">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={5} // 👈 default 4 slides
                navigation
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1.5,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 5, // 👈 desktop pe 4
                  },
                }}
              >
                <SwiperSlide>
                  <div className="productslide-box">
                    <div className="product-img-s">
                      <Image
                        src="/img/Boracol-Ginger.png"
                        width={400}
                        height={200}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="product-des">
                      <h3>Boracol GINGER</h3>
                      <p>
                        Soil Formulation Specifically created for the crop
                        physiology of Ginger & Turmeric 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productslide-box">
                    <div className="product-img-s">
                      <Image
                        src="/img/Boracol-Ginger.png"
                        width={400}
                        height={200}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="product-des">
                      <h3>Boracol GINGER</h3>
                      <p>
                        Soil Formulation Specifically created for the crop
                        physiology of Ginger & Turmeric 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productslide-box">
                    <div className="product-img-s">
                      <Image
                        src="/img/Boracol-Ginger.png"
                        width={400}
                        height={200}
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="product-des">
                      <h3>Boracol GINGER</h3>
                      <p>
                        Soil Formulation Specifically created for the crop
                        physiology of Ginger & Turmeric 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productslide-box">
                    <div className="product-img-s">
                      <Image
                        src="/img/Boracol-Ginger.png"
                        width={400}
                        height={200}
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="product-des">
                      <h3>Boracol GINGER</h3>
                      <p>
                        Soil Formulation Specifically created for the crop
                        physiology of Ginger & Turmeric 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productslide-box">
                    <div className="product-img-s">
                      <Image
                        src="/img/Boracol-Ginger.png"
                        width={400}
                        height={200}
                        className=""
                        alt="image"
                        
                      />
                    </div>
                    <div className="product-des">
                      <h3>Boracol GINGER</h3>
                      <p>
                        Soil Formulation Specifically created for the crop
                        physiology of Ginger & Turmeric 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productslide-box">
                    <div className="product-img-s">
                      <Image
                        src="/img/Boracol-Ginger.png"
                        width={400}
                        height={200}
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="product-des">
                      <h3>Boracol GINGER</h3>
                      <p>
                        Soil Formulation Specifically created for the crop
                        physiology of Ginger & Turmeric 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="product-usb">
        <div className="container">
          <div className="row ">
            <div className="col-12 product-usb-heading">
              <h2>Our Product: uSP</h2>
              <p>
                All IMT products are formulated with key agronomic principles in
                mind
              </p>
            </div>
          </div>
          <div className="row row-product-usb">
            <div className="col-md-4">
              <div className="product-usb-b">
                <div className="icon-usb">
                  <Image
                    src="/img/lotusicon.png"
                    width={50}
                    height={50}
                    className=""
                    alt="image"
                  />
                </div>
                <p>
                  {" "}
                  Maximising Synergism & minimising Antagonism between elements
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-usb-b">
                <div className="icon-usb">
                  <Image
                    src="/img/lotusicon.png"
                    width={50}
                    height={50}
                    className=""
                    alt="image"
                  />
                </div>
                <p>
                  {" "}
                  Soil nutrient status, crop requirements are also considered
                  when formulating this product.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-usb-b">
                <div className="icon-usb">
                  <Image
                    src="/img/lotusicon.png"
                    width={50}
                    height={50}
                    className=""
                    alt="image"
                  />
                </div>
                <p> problem Based Solutions!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-usb-b">
                <div className="icon-usb">
                  <Image
                    src="/img/lotusicon.png"
                    width={50}
                    height={50}
                    className=""
                    alt="image"
                  />
                </div>
                <p>
                  {" "}
                  All 6 micronutrients present in a required ratio: Fe, Mn, Zn,
                  Cu, B, Mo, with Boron and Molybdenum being the benchmark
                  elements
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-usb-b">
                <div className="icon-usb">
                  <Image
                    src="/img/lotusicon.png"
                    width={50}
                    height={50}
                    className=""
                    alt="image"
                  />
                </div>
                <p> Balanced formulation for quick release</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-usb-b">
                <div className="icon-usb">
                  <Image
                    src="/img/lotusicon.png"
                    width={50}
                    height={50}
                    className=""
                    alt="image"
                  />
                </div>
                <p>
                  {" "}
                  Major factors like purity of the elements, elemental ratios,
                  nutrient interaction and release of elements are given
                  importance in IMT technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SoilConditioner;
