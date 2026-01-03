import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";



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
    <html lang="en">
      <body suppressHydrationWarning >
        <link href="/images/favicon-32x32.png" rel="icon" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
        <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Navbar/>
        {children}
        <Footer/>
        <script src="assets/vendors/js/glightbox.min.js"></script>

        {/* <script type="text/javascript">
          const lightbox = GLightbox({
            'touchNavigation': true,
          'href': 'https://www.youtube.com/watch?v=J9lS14nM1xg',
          'type': 'video',
          'source': 'youtube', //vimeo, youtube or local
          'width': 900,
          'autoPlayVideos': 'true',
})

        </script> */}
        <script src="assets/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
