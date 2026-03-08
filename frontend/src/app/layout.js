import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopLoader from "@/components/ui/TopLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "360° Success Squad | Premium EdTech Solutions",
  description: "Find the best teachers, choose your subjects, and boost your success with 360° Success Squad.",
  icons: {
    icon: "/icon.svg",
    type: "image/svg+xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <TopLoader />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
