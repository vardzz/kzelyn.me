import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kzelyn Artillo | Portfolio",
  description: "Marketing-Driven. People-Focused. Results-Oriented.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
