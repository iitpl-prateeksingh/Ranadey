"use client";
import React from "react";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import SoilConditioner from "@/components/our-product/Soil-Conditioner";
// import EssentialPlant from "@/components/our-product/Essential-Plant";
import Producttabs from "../../components/our-product/Product-tabs";

export default function Product() {
  return (
    <>
      <section className="our-product">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                Our <br />
                Products
              </h1>
            </div>
            <div className="col-md-6">
              <Image
                alt=""
                src="/img/product1.png"
                width={400}
                height={200}
                className="product-hero-img"
              />
            </div>
          </div>
        </div>
        <Image
          alt=""
          src="/img/product-reactangle.png"
          width={400}
          height={200}
          className="product-reactangle"
        />
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <Tabs
                defaultActiveKey="producttab1"
                id="uncontrolled-tab-producttab1"
                className="mb-3"
              >
                <Tab
                  eventKey="producttab1"
                  title="Soil Conditioner & pH Rectifier"
                >
                  <Producttabs />
                </Tab>
                <Tab
                  eventKey="producttab2"
                  title="Essential Plant Micronutrient Support-Foliar & Soil"
                >
                  <Producttabs />
                </Tab>

                <Tab eventKey="producttab3" title="Dryland Farming">
                  Dryland Farming
                </Tab>

                <Tab
                  eventKey="producttab4"
                  title="Die-back, Root-rot Ameliorator"
                >
                  Die-back, Root-rot Ameliorator
                </Tab>
                <Tab
                  eventKey="producttab5"
                  title="C:N Cellular Level Biostabiliser "
                >
                  C:N Cellular Level Biostabiliser 
                </Tab>

                <Tab eventKey="producttab6" title=" Abiotic Stress Quencher ">
                   Abiotic Stress Quencher
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

