import Navbar from "@/components/sheared/Navbar";

export default function WithNavbarLayout({ children }) {
  return (
    <div data-scroll-section>
      <Navbar />
      {children}
    </div>
  );
}
