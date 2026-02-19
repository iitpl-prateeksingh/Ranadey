// import "../adminGlobals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import LeftSidebar from "../components/admin/layout/LeftSidebar";
// import AdminHeader from "../components/admin/layout/Header";

// export default function RootLayout({ children }) {
//   return (
//     <div>
//       <LeftSidebar />
//       <AdminHeader />
//       <div className="main-content">{children}</div>
//     </div>
//   );
// }
"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import AdminHeader from "../components/admin/layout/Header";
import LeftSidebar from "../components/admin/layout/LeftSidebar";
import "../adminGlobals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
 if (pathname === "/admin/login") {
    return <>{children}</>;
  }
  return (
    <>
      {/* Header */}
      <AdminHeader toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <LeftSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>
    </>
  );
}
