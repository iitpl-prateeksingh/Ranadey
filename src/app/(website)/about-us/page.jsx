import React from "react";
import Image from "next/image";
import { getImageUrl } from "../../../helper/getImageUrl";
import { getAboutPage } from "../../../services/aboutpage";

async function Aboutus() {
  let res = await getAboutPage();
  let data = res?.data?.contentRef || {};
  console.log(data, "about page data from API"); // Debugging log

  console.log(data);
  const banner1 = data?.banner1 ? getImageUrl(data.banner1) : null;
  const mobileBanner1 = data?.mobileBanner1
    ? getImageUrl(data.mobileBanner1)
    : null;
  const ownerImage = data?.featureImage ? getImageUrl(data.featureImage) : null;

  return (
    <>
      <section>
        {/* Desktop Banner */}
        <div className="d-none d-md-block">
          <Image
            src={banner1 || "/img/about-bg.png"}
            alt="Banner"
            width={1440}
            height={395}
          />
        </div>

        {/* Mobile Banner */}
        <div className="d-block d-md-none">
          <Image
            src={mobileBanner1 || banner1 || "/img/about-bg.png"}
            alt="Mobile Banner"
            width={768}
            height={395}
          />
        </div>
      </section>

      <section className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="about-img">
                <Image
                  src="/img/about-bg.png"
                  width={100}
                  height={100}
                  className="about-bg"
                  alt=""
                />
                <Image
                  src={ownerImage}
                  width={100}
                  height={100}
                  className="owner-img"
                  alt=""
                />
                <span>{data?.featureName} </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="about-content">
                <div
                  className="col-12"
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.section1?.match(/<p[^>]*>.*?<\/p>/i)?.[0] || "",
                  }}
                />
              </div>
              <div className="about-content1">
                <div
                  className="col-12"
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.section1?.replace(/<p[^>]*>.*?<\/p>/i, "") || "",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-insitute">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
              className="col-12"
              dangerouslySetInnerHTML={{
                __html: data?.banner2 || "",
              }}
            />
            </div>
          </div>
        </div>
      </section>
      <section className="imt-section">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
             <div
              className="col-12"
              dangerouslySetInnerHTML={{
                __html: data?.section2 || "",
              }}
            />
            </div>
          </div>
        </div>
      </section>
      <section className="section-independent">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="col-12"
                dangerouslySetInnerHTML={{
                  __html: data?.banner3 || "",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
