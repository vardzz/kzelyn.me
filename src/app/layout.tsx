import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kzelyn Artillo | Portfolio",
  description: "Marketing-Driven. People-Focused. Results-Oriented.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter bg-background text-primary-dark overflow-x-hidden">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
