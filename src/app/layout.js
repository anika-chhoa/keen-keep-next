import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Providers from "./lib/providers";
import { ToastContainer } from "react-toastify";
import Footer from "./shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen-keeper",
  description: "Keep Your Friendships Alive",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        <ToastContainer position="top-center"/>
        </Providers>
        </body>
    </html>
  );
}
