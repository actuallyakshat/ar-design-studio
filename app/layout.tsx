import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Instrument_Serif,
  Inter,
  Playfair_Display,
} from "next/font/google";

//playfair and intrumental serif
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorantGaramond",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AR Design Studio",
  description: "Demo Preview of the portfolio for AR Design Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable} bg-background`}
      >
        <Navbar />
        <div className="flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
