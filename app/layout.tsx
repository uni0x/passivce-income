import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Passive Income Source with Zero-Effort: Laptop Hosting",
  description: "One-page landing for a laptop hosting opportunity."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Passive Income Without Effort: Laptop Hosting</title>
        <meta name="description" content="Discover practical strategies to earn passive income without working actively. Step-by-step guidance and tips included." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Passive Income Without Effort" />
        <meta property="og:description" content="Learn proven methods to generate passive income effortlessly." />
        <meta name="google-site-verification" content="ndDbVKfyEKWfdkXIjSwoclt4DBT8Di-iAqJJv6dxdGw" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://passive-income-without-effort.vercel.app/" />
        <meta property="og:image" content="https://passive-income-without-effort.vercel.app/images/hero.svg" />
        <link rel="canonical" href="https://passive-income-without-effort.vercel.app/" />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is passive income?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Passive income is money earned with little to no ongoing effort."
                }
              },
              {
                "@type": "Question",
                "name": "How can I earn passive income online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can use investments, content creation, or automated businesses to earn online."
                }
              }
            ]
          })
        }}
      />

      </Head>
      <body>{children}</body>
    </html>
  );
}