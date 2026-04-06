import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: 'swap' });

export const metadata = {
  title: "Nexel Data - Empowering Innovation with IT Services",
  description:
    "Nexel Data is a leading IT services company providing innovative solutions in web development, cloud computing, data engineering, and digital transformation. Partner with us to elevate your business through cutting-edge technology.",
  keywords: [
    "Nexel Data",
    "IT services",
    "web development",
    "cloud solutions",
    "data engineering",
    "digital transformation",
    "software development",
    "tech consulting"
  ],
  authors: [{ name: "Nexel Data", url: "https://nexeldata.com" }],
  creator: "Nexel Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning >
        <link href="/images/favicon-32x32.png" rel="icon" />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
