import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kzelyn Artillo — Marketing & Brand Strategy",
  description: "Minimalist portfolio of Kzelyn Artillo. Marketing-driven, people-focused, and results-oriented brand strategy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-paper text-espresso min-h-screen antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
