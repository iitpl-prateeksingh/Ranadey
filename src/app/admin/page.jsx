"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  FiBox,
  FiEdit,
  FiStar,
  FiMail,
  FiCalendar,
  FiArrowUp,
  FiArrowDown,
  FiChevronRight,
} from "react-icons/fi";
// ✅ Dynamic import (important for Next.js)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function Dashboard() {
  const [stats] = useState({
    totalProducts: 245,
    totalBlogs: 128,
    totalTestimonials: 89,
    totalQueries: 567,
  });

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
 // ✅ Queries Chart Data
  const queryChartOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    colors: ["#dc3545"],
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    tooltip: {
      theme: "light",
    },
  };

  const queryChartSeries = [
    {
      name: "Queries",
      data: [120, 150, 180, 140, 210, 190],
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="dashboard-header d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1>Dashboard</h1>
          <p>
           {" Welcome back! Here's what's happening with your store today."}
          </p>
        </div>
        <div className="date-badge d-flex align-items-center gap-2">
          <FiCalendar />
          <span>{currentDate}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4">
        {/* Products */}
        <div className="col-md-6 col-lg-4">
          <div className="dashboard-card d-flex justify-content-between text-end p-3">
            <div className="card-icon mb-3">
              <FiBox size={24} />
            </div>
            <div>
            <h6 className="card-title">Total Products</h6>
            <h2 className="card-value">{stats.totalProducts}</h2>
            <div className="card-trend d-flex align-items-center gap-2 text-success">
              <FiArrowUp />
              <span>+12% from last month</span>
            </div>
            </div>
          </div>
        </div>

        {/* Blogs */}
        <div className="col-md-6 col-lg-4">
          <div className="dashboard-card d-flex justify-content-between text-end p-3">
            <div className="card-icon mb-3">
              <FiEdit size={24} />
            </div>
            <div>

            <h6 className="card-title">Total Blogs</h6>
            <h2 className="card-value">{stats.totalBlogs}</h2>
            <div className="card-trend d-flex align-items-center gap-2 text-success">
              <FiArrowUp />
              <span>+8% from last month</span>
            </div>
            </div>
          </div>
        </div>
        {/* Queries */}
        <div className="col-md-6 col-lg-4">
          <div className="dashboard-card d-flex justify-content-between text-end p-3">
            <div className="card-icon mb-3">
              <FiMail size={24} />
            </div>
            <div>
            <h6 className="card-title">Total Queries</h6>
            <h2 className="card-value">{stats.totalQueries}</h2>
            <div className="card-trend d-flex align-items-center gap-2 text-danger">
              <FiArrowDown />
              <span>-5% from last month</span>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
    <div className="row mt-3">
        <div className="col-12">
          <div className="dashboard-card p-4">
            <h5 className="mb-4">Queries Overview</h5>
            <Chart
              options={queryChartOptions}
              series={queryChartSeries}
              type="area"
              height={260}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
