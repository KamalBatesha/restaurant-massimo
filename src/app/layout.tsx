import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Massimo",
  description: "resturant Massimo for food lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-full overflow-x-hidden`}>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
