import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <div >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
