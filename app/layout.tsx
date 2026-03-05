import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Passive Income Source with Zero-Effort: Laptop Hosting",
  description: "One-page landing for a laptop hosting opportunity."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}