import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kush Vasaniya",
  description: "Welcome Home!!! Your presence is valuable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={"theme-dark "} lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
