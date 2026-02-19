import React from "react";
import Image from "next/image";
import { getImageUrl } from "../../../helper/getImageUrl";
export default function LabClient({ data }) {
  const featureImage = getImageUrl(data?.featureImage?.url);
  const bannerImage = getImageUrl(data?.banner);
  const labData = data?.testListing;
  console.log("FEATURE IMAGE", getImageUrl(data?.featureImage?.url));
  console.log("BannerImage", getImageUrl(data?.banner));
  console.log(labData);
  return (
    <>
      <section className="agri-section">
        {bannerImage && (
          <Image
            alt=""
            src={bannerImage}
            width={400}
            height={200}
            className="banner-agri"
            priority={true}
          />
        )}
      </section>
      <section className="section-agri">
        <Image
          alt=""
          src="/img/banner-agrii.png"
          width={400}
          height={200}
          className="banner-agri"
          loading="lazy"
        />
        <Image
          alt=""
          src="/img/lab-vector.png"
          width={400}
          height={200}
          className="lab-vector"
          loading="lazy"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6 section-agri-c">
              <div
                className="col-12"
                dangerouslySetInnerHTML={{
                  __html: data?.section1 || "",
                }}
              />
            </div>

            <div className="col-md-5">
              <div className="agri-image">
                <Image
                  alt=""
                  src={featureImage}
                  width={400}
                  height={200}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-lab">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="lab-heading">
                <div
                  className="col-12"
                  dangerouslySetInnerHTML={{
                    __html: data?.section2 || "",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row row-labbox">
            {labData.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="lab-box">
                  <Image
                    alt={item.title}
                    src={item.img}
                    width={335}
                    height={226}
                    className=""
                  />
                  <div className="lab-box-c">
                    <h4>{item.title}</h4>
                    <p>{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
