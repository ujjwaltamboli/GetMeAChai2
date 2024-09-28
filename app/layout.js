import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "../components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Me A Chai",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <SessionWrapper>
       <Navbar/>
       <div>
       {children}
       </div>
       <Footer/>
      </SessionWrapper>
      </body>
      
    </html>
  );
}
