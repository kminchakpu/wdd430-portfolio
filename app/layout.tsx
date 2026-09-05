import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins-next",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kevin Minchakpu | Web Developer",
  description:
    "Personal portfolio of Kevin Minchakpu, a web developer building responsive and useful web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={poppins.variable}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}