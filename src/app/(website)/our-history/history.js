"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { getImageUrl } from "../../../helper/getImageUrl";
import { get } from "node:http";

export default function OurHistoryClient({ data }) {
  const boxesRef = useRef([]);
  const vectorRef = useRef(null);
  const sliderRef = useRef(null);
  const gsapTimeline = useRef(null);
  console.log(data, "history data from API"); // Debugging log
  const storyData = data?.timeline || [];

  const getClassName = (index) => {
    if (index === 0) return "story-main story-mainbox-1";

    return index % 2 === 0
      ? "story-main story-main3"
      : "story-main story-main1";
  };

  useEffect(() => {
    if (!storyData.length) return;

    const mm = gsap.matchMedia();
    const slider = sliderRef.current;

    if (!slider) return;

    const tl = gsap.timeline({
      ease: "power1.inOut",
      repeat: -1,
    });

    gsapTimeline.current = tl;

    mm.add(
      {
        isDesktop: "(min-width: 992px)",
        isMobile: "(max-width: 991px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        boxesRef.current.forEach((box, index) => {
          if (!box) return;

          // DESKTOP
          if (isDesktop) {
            if (index === 0) {
              tl.to(box, {
                opacity: 0,
                delay: 3,
                duration: 2,
              });
            } else {
              tl.to(
                vectorRef.current,
                {
                  backgroundPositionX: `${-500 * (index - 1)}px`,
                  duration: 2,
                },
                "<",
              )
                .to(
                  box,
                  {
                    opacity: 1,
                    duration: 2,
                  },
                  "-=1",
                )
                .to(box, {
                  delay: 3,
                  opacity: 0,
                  duration: 2,
                });
            }
          }

          // MOBILE
          if (isMobile) {
            tl.to(
              vectorRef.current,
              {
                backgroundPositionX: `${-240 * index}px`,
                duration: 2,
              },
              "<",
            )
              .to(
                box,
                {
                  opacity: 1,
                  duration: 2,
                },
                index === 0 ? "+=0" : "-=1",
              )
              .to(box, {
                delay: 3,
                opacity: 0,
                duration: 2,
              });
          }
        });

        return () => tl.kill();
      },
    );

    const handleMouseEnter = () => gsapTimeline.current?.pause();
    const handleMouseLeave = () => gsapTimeline.current?.resume();

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      mm.revert();
      tl.kill();
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [storyData]);

  return (
    <>
      {/* Header */}
      <section>
        <div className="d-none d-md-block">
          <Image
            alt="Our History"
            src={getImageUrl(data?.banner)}
            width={1440}
            height={395}
            className="img-fluid w-100"
          />
        </div>

        {/* Mobile Image */}
        <div className="d-block d-md-none">
          <Image
            alt="Our History"
            src={getImageUrl(data?.mobileBanner)}
            width={600}
            height={400}
            className="img-fluid w-100"
          />
        </div>
      </section>

      {/* Section 1 (HTML from API) */}
      <section className="imt-section">
        <div className="container">
          <div className="row">
            <div
              className="col-12"
              dangerouslySetInnerHTML={{
                __html: data?.section1 || "",
              }}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="story-ranadey">
        <div className="story-silder" ref={sliderRef}>
          {storyData.map((item, index) => (
            <div
              key={item._id}
              ref={(el) => (boxesRef.current[index] = el)}
              className={getClassName(index)}
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              <div
                className={index === 0 ? "story-i" : "story-i story-i2"}
              ></div>

              {/* Content */}
              <div className="content-stroy-v">
                <div
                  className="col-12"
                  dangerouslySetInnerHTML={{
                    __html: item.details || "",
                  }}
                />
              </div>

              <h3>{item.year}</h3>

              {/* Images */}
              <div className="story-i-main">
                {item.images?.length > 0
                  ? item.images.map((img, i) => (
                      <div className="story-i-box" key={i}>
                        <Image
                          alt={img.alt || ""}
                          src={getImageUrl(img.url)}
                          width={400}
                          height={200}
                        />
                      </div>
                    ))
                  : [1, 2, 3, 4].map((_, i) => (
                      <div className="story-i-box" key={i}>
                        <Image
                          alt=""
                          src="/img/story-card-img.png"
                          width={400}
                          height={200}
                        />
                      </div>
                    ))}
              </div>
            </div>
          ))}

          {/* Vector Line */}
          <div className="story-sildervector" ref={vectorRef}></div>
        </div>
      </section>
    </>
  );
}
