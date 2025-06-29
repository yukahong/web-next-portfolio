import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const notoSansTC = Noto_Sans_TC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuka | Portfolio",
  description: "A frontend developer with 4.5 years experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${notoSansTC.className} antialiased 
         w-full py-28 sm:py-36 text-primary bg-gray-50 sm:text-xs md:text-base
        `}
      >
        <div className="absolute -z-10 top-[-6rem] right-[10rem] w-[30rem] h-[30rem] bg-warning rounded-full blur-[10rem] sm:w-[12rem] sm:right-[1rem] md:w-[20rem] md:right-[1rem] lg:w-[50rem] lg:right-[2rem] xl:right-[1rem] 2xl:right-[10rem]"></div>
        <div className="absolute -z-10 top-[-2rem] left-[-36rem] w-[30rem] h-[30rem] bg-primary rounded-full blur-[10rem] sm:w-[12rem] sm:left-[1rem] md:w-[20rem] md:left-[-3rem] lg:w-[50rem] lg:left-[-5rem] xl:left-[-5rem] 2xl:left-[10rem]"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
