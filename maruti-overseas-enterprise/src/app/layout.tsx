import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maruti Overseas Consultancy - Study Abroad & Visa Services",
  description: "Leading visa consultancy in Gujarat since 2004. Expert guidance for student visas, visitor visas, and study abroad services for USA, UK, Canada, Australia, and more.",
  keywords: "study abroad, visa consultancy, student visa, IELTS coaching, overseas education, Visnagar, Ahmedabad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
