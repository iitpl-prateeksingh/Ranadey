import React from "react";
import Image from "next/image";
import { getImageUrl } from "../../../helper/getImageUrl";

function Hero({ data }) {
  const featureImageUrl = getImageUrl(data?.featureImage);
  // console.log("featureImageUrl", featureImageUrl);
  const videoUrl = getImageUrl(data?.bgVideo);

  // console.log("videoUrl", videoUrl);

  return (
    <>
      <section className="hero-section">
        {videoUrl && (
          <video
            src={videoUrl}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
          ></video>
        )}

        <div className="container-fluid container-hero">
          <div className="row">
            <div className="col-sm-6">
              <div className="heading-hero">
                <h1>{data?.featureText}</h1>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="hero-img">
                {featureImageUrl && (
                  <Image
                    src={featureImageUrl}
                    width={400}
                    height={200}
                    priority
                    alt="Feature Image"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(Hero);
