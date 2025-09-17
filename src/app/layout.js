import { Lato } from "next/font/google";
import "./globals.css";
import FixedButton from "@/components/landingPageComponents/FixedButton";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "My Lato App",
  description: "Using only Lato font in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <main data-scroll-container>{children}</main>

        {/* 👇 Fixed button সব পেইজে show করবে */}
        <FixedButton />
      </body>
    </html>
  );
}
