"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
function Ourhistory() {
  const box1line = useRef(null);
  const box2line = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  const box10 = useRef(null);
  const box11 = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      yoyo: false,
      ease: "power1.inOut",
    });

    tl.to(box1.current, {
      opacity: 0,
      duration: 2,
    })
      .to(
        box1line.current,
        {
          opacity: 0,
        },
        "-=1",
      )
      .to(
        timeline.current,
        {
          backgroundPositionX: "0px",
          duration: 2,
        },
        "<",
      )
      .to(
        box2.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1",
      )
      .to(
        box2.current,
        {
          opacity: 0,
          delay: 3,
          duration: 2,
        },
        "-=1",
      )
      .to(
        timeline.current,
        {
          backgroundPositionX: "-500px",
          duration: 2,
        },
        "<",
      )
      .to(
        box3.current,
        {
          opacity: 1,
          duration: 2,
        },
        "<",
      )
      .to(
        box3.current,
        {
          opacity: 0,
          delay: 3,
          duration: 2,
        },
        "-=1",
      )
      .to(
        timeline.current,
        {
          backgroundPositionX: "-1000px",
          duration: 2,
        },
        "<",
      )
      .to(
        box4.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1",
      )
      .to(
        box4.current,
        {
          delay: 3,
          opacity: 0,
          duration: 2,
        },
        "-=1",
      )
      .to(
        timeline.current,
        {
          backgroundPositionX: "-1500px",
          duration: 2,
        },
        "<",
      )
      .to(
        box5.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1",
      )
      .to(
        box5.current,
        {
          delay: 3,
          opacity: 0,
          duration: 2,
        },
        "-=1",
      )
      .to(
        timeline.current,
        {
          backgroundPositionX: "-2000px",
          // delay: 3,
          duration: 2,
        },
        "<",
      )
      .to(
        box6.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1",
      )
      .to(
        box6.current,
        {
          delay: 2,
          opacity: 0,
          duration: 2,
        },
        "-=1",
      )
      .to(
        timeline.current,
        {
          backgroundPositionX: "-2500px",
          // delay: 3,
          duration: 2,
        },
        "<",
      )
      .to(
        box7.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1",
      )
      .to(
        box7.current,
        {
          delay: 3,
          opacity: 0,
          duration: 2,
        },
        "-=1",
      )
      .to(
        timeline.current,
        {
          backgroundPositionX: "-3000px",
          // delay: 3,
          duration: 2,
        },
        "<",
      )
      .to(
        box8.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1",
      )
      .to(
        box8.current,
        {
          delay: 3,
          opacity: 0,
          duration: 2,
        },
        "-=1",
      )
      .to(
        timeline.current,
        {
          backgroundPositionX: "-3500px",
          // delay: 3,
          duration: 2,
        },
        "<",
      )
      .to(
        box9.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1",
      )
      .to(
        box9.current,
        {
          delay: 3,
          opacity: 0,
          duration: 2,
        },
        "-=1",
      )
      .to(
        timeline.current,
        {
          backgroundPositionX: "-4000px",
          // delay: 3,
          duration: 2,
        },
        "<",
      )
      .to(
        box10.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1",
      )
      .to(
        box10.current,
        {
          opacity: 0,
          duration: 2,
        },
        "-=1",
      );
  }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     yoyo: false,

  //     ease: "power1.inOut",
  //   });

  //   tl.to(box.current, {
  //     x: 496,
  //     height: 572,
  //     opacity: 0,
  //   }).to(
  //     boxinner.current,
  //     {
  //       top: -90,
  //       duration: 2,
  //     },
  //     "<", // 👈 same time start
  //   );
  // }, []);

  return (
    <>
      <section className="our-history">
        <h1>Our History</h1>
      </section>
      <section className="imt-section">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h2>
                IMT since 1967: Over 50 years of Stewardship in Balanced Plan
                Nutrition & Soil Remineralisation.
              </h2>
              <p>
                The concept of BALANCED Plant Nutrition (BPN) was started in
                India by late Mr. S N Ranade in 1961 when for the first time a
                product containing micronutrients was introduced in the country.
                Since our inception in 1967, we have released a series of
                products that are formulated to either increase the yield of the
                farmer, to address specific soil or crop nutritional issues
                and/or to increase the immunity of the crop against
                pests/disease and abioic factors. All our products are stand
                alone products and show noticeable results on the field. We can
                proudly say that we have never withdrawn a single product from
                the market for non-performance. That speaks about our dedication
                and focus on quality, result-driven products. We take great
                pride in saying that our company is driven by its R&D and not
                the other way around. All our products are tried & tested on the
                farmer’s field and the farmer’s approval is our litmus test!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="story-ranadey">
        <div className="story-silder">
          <div className="story-main story-mainbox-1 " ref={box1}>
            <div className="story-i" ref={box1line}></div>
            <div className="content-stroy-v">
              <p>
                {" "}
                MICNELF SERIES: First ever BORON based Multi-Micronutrient Spray
                Formulation.
              </p>
              <p>
                The distinction that we hold from other micronutrient products
                in the market is that we are the ONLY company in the country and
                perhaps the world, which exploits the intricacies of BORON AND
                MOLYBDENUM and use these 2 elements as the benchmark for
                formulating our products. All others generally use magnesium and
                zinc as the benchmark. Micnelf is a time tried and tested
                technical formulation in the market since 1967. It is still the
                only branded product in the market which has stood the test of
                time for the last 47 years.
              </p>
            </div>

            <h3>1967</h3>
            {/* ref={boxinner} */}
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="story-main story-main1" ref={box2}>
            <div className="story-i story-i2" ref={box2line}></div>
            <div className="content-stroy-v">
              <p>
                BORACOL SERIES: First ever BORON based Multi-Micronutrient Soil
                Application.
              </p>
              <p>
                Even after 38 years, it is the benchmark in the micronutrient
                soil application space market. We have evolved a series of
                crop-specific soil applied micronutrient mixtures- Boracol
                BSF-11, Boracol BSF-12, Boracol Ginger, Boracol BNJ, Boracol
                Permite.
              </p>
            </div>

            <h3>1976</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="story-main story-main3" ref={box3}>
            <div className="story-i story-i2"></div>
            <div className="content-stroy-v">
              <p>
                MICMOLL SERIES: First-ever MOLYBDENUM based Multi-Micronutrient
                Spray Formulation.
              </p>
              <p>
                To be used strictly in conjunction with Micnelf Series based on
                the crop. We have evolved a crop-specific Micmoll range.
              </p>
            </div>

            <h3>1979</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>

          <div className="story-main story-main1" ref={box4}>
            <div className="story-i story-i2"></div>
            <div className="content-stroy-v">
              <p>
                SatRite: IMT introduced the concept of Soil Conditioners and
                formulated the first ever Calcium and Magnesium Soil Conditioner
                for Alkaline Soils.
              </p>
              <p>
                With a focus on NPK and micronutrients, the secondary-nutrient
                status of soils was being neglected. Hence from 1980-1986 IMT
                directed its research towards secondary nutrients and in 1987
                first introduced the concept of “Soil Conditioners”.
              </p>
              <p>
                Soil Conditioners are soil pH specific products that helps
                “condition” the soil so that other nutrients can be taken up
                effectively and efficiently. Since India primarily has alkaline
                soils, our first soil conditioner was created specifically for
                alkaline soils.
              </p>
            </div>

            <h3>1987</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="story-main story-main3" ref={box5}>
            <div className="story-i story-i2"></div>
            <div className="content-stroy-v">
              <p>
                Kiecite G: The Kiecite-G Series includes zinc-based
                micronutrient foliar products for a wide variety of crops.
              </p>
            </div>

            <h3>1992</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="story-main story-main1" ref={box6}>
            <div className="story-i story-i2"></div>
            <div className="content-stroy-v">
              <p>
                Kiecite DF: is a technical product and the specialty of IMT
                Kiecite DF range.
              </p>
              <p>
                Kiecite DF is a complete micronutrient product for
                Fertigation/Drip purpose.
              </p>

              <p>
                This product contains six micronutrient i.e Iron, Manganese,
                Zinc, copper, Boron and Molybdenum in balanced and synergistic
                proportions.
              </p>
              <p>
                The specialty of this product is that antagonistic interaction
                between the elements in this formulation is minimized without
                affecting the elemental ratios.
              </p>
              <p>
                Crop Specific Formulations are available for: Banana,
                Pomegranate, Grape, Coconut, Coffee, Citrus.
              </p>
            </div>

            <h3>1994</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="story-main story-main3" ref={box7}>
            <div className="story-i story-i2"></div>
            <div className="content-stroy-v">
              <p>
                <b>We introduced 2 formulations in 1996.</b>
              </p>
              <p>
                Rasokal: Crop Specific Formulation for Areca and Coconut. <br />
                Sassori: First of its kind, Crop Biostabiliser
              </p>
              <p>
                Rasokal: Crop Specific Formulation for Areca and Coconut.
                Micronutrient application technology greatly differs in acidic
                soils than that of alkaline soils. Soil acidity has a profound
                influence on availability of micronutrients. Molybdenum
                availability decreases as pH decreases. Nutrient leaching losses
                are high in these soils. These soils are dominated by hydroxyl
                ions. The high concentration of H+ ions hinders the uptake of
                other cations.
              </p>
              <p>
                Nutrient availability, interaction with other nutrients, sources
                and purity of elements, soil and atmospheric factors are given
                importance in the Rasokal Technology. Rasokal is used
                specifically to alleviate nutritional problems in Arecanut and
                Coconut like yellowing of leaf, leaf spot, drying of
                inflorescence, death of terminal growing point, improper net
                setting, nut splitting, nut dropping and hollow nuts.
              </p>
              <p>
                Sassori: Crop Bio-stabiliser Use of higher quantities of
                nitrogenous fertilizers, extreme high or low temperature, heavy
                rains, increase in pest and diseases all such lead to
                disturbances in plant nitrogen metabolism, which in turn will
                lead to higher accumulation of urea as a metabolite. SASSORI
                helps to stabilize and balance the carbon and nitrogen metabolic
                pathways in the plant system.
              </p>
            </div>
            <h3>1996</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="story-main story-main1" ref={box8}>
            <div className="story-i story-i2"></div>
            <div className="content-stroy-v">
              <p>
                <b>Micnics:</b> is a product specifically manufactured for
                maintaining the patency of the conductive system. Patency is
                defined as a state of being un-clogged or un-choked.
              </p>
              <p>
                Indiscriminate and imbalanced use of chemical inputs causes a
                strain on cambial layer which eventually collapses or chokes up
                which is seen as die-back, heart rot, collar rot and damping
                off.
              </p>
              <p>
                MICNICS is a product specifically evolved to clean up the
                clogging and facilitate easy transport of water and
                photosynthates.
              </p>
              <p>
                It consists of organic boron complexes and necessary organic
                stimulators to ensure the patency of the conductive system.
              </p>
            </div>

            <h3>1998</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="story-main story-main3" ref={box9}>
            <div className="story-i story-i2"></div>
            <div className="content-stroy-v">
              <p>
                <b>Kiecite:</b> Keicite was evolved for the physiology of
                plantation crops. The focal elements in this formulation are
                Boron and Molybdenum. Being in a sulphatic form, Kiecite series
                is 100% water-soluble, easily absorbed by the leaves, is
                cost-competitive and affordable.
              </p>
              <p>
                <b>Kiecite® CF</b> is a complete micronutrient foliar product
                specifically designed specifically for Coffee.
              </p>
              <p>
                <b>Kiecite® T</b> is a complete micronutrient foliar product
                specifically designed with the physiology of Tea in mind.
              </p>
            </div>
            <h3>2001</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="story-main story-main1" ref={box10}>
            <div className="story-i story-i2"></div>
            <div className="content-stroy-v">
              <p>
                <b>Chrocal:</b> First of its kind, Soil Conditioner designed for
                “Sodium-Affected” soils.
              </p>
              <p>
                Alkaline soils are not all made equal, some soils are not just
                alkaline but SODIC in nature and specialised products have to be
                utilised to bring these soils under cultivation.
              </p>
              <p>This is a Silica based “Sodic Soil” conditioner.</p>
            </div>

            <h3>2002</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="story-main story-main3" ref={box11}>
            <div className="content-stroy-v">
              <p>
                <b>Kiecite:</b> Keicite was evolved for the physiology of
                plantation crops. The focal elements in this formulation are
                Boron and Molybdenum. Being in a sulphatic form, Kiecite series
                is 100% water-soluble, easily absorbed by the leaves, is
                cost-competitive and affordable.
              </p>
              <p>
                <b>Kiecite® CF</b> is a complete micronutrient foliar product
                specifically designed specifically for Coffee.
              </p>
              <p>
                <b>Kiecite® T</b> is a complete micronutrient foliar product
                specifically designed with the physiology of Tea in mind.
              </p>
            </div>
            <h3>2001</h3>
            <div className="story-i-main">
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
              <div className="story-i-box">
                <Image
                  alt=""
                  src="/img/story-card-img.png"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>

          <div className="story-sildervector" ref={timeline}>
            {/* <Image alt="" src="/img/story-sildervector.png" width={400} height={200} /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourhistory;
