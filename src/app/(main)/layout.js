import { Footer } from "@/components/sheared/Footer";
import Navbar from "@/components/sheared/Navbar";

export default function WithNavbarLayout({ children }) {
  return (
    <div data-scroll-section>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
