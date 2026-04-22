import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Holding Care — Compassionate Home Care in Portland, Maine",
    template: "%s | Holding Care",
  },
  description:
    "Holding Care provides compassionate, culturally competent personal care services in Portland, Maine. Helping individuals live with independence, dignity, and comfort at home.",
  openGraph: {
    title: "Holding Care",
    description:
      "Compassionate home care services in Portland, Maine. Personal Support Specialists dedicated to your independence and dignity.",
    url: "https://holdingcare.co",
    siteName: "Holding Care",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
