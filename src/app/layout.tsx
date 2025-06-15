import type { Metadata } from "next";
import { Noto_Sans_TC } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header/Header";

const notoSansTC = Noto_Sans_TC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

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
    <html lang="en">
      <body
        className={`${notoSansTC.className} antialiased text-primary bg-gray-50 sm:text-xs md:text-base
        `}
      >
        <div className="absolute -z-10 top-[-6rem] right-[10rem] w-[30rem] h-[30rem] bg-warning rounded-full blur-[10rem] sm:w-[68rem]"></div>
        <div className="absolute -z-10 top-[-2rem] left-[-36rem] w-[30rem] h-[30rem] bg-primary rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
