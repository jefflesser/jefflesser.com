import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "LFGTM — Jeff Lesser",
  description:
    "Jeff Lesser — Technical marketing leader who builds AI-powered GTM systems to deliver outsized results with lean teams.",
  openGraph: {
    title: "LFGTM — Jeff Lesser",
    description:
      "Technical marketing leader who builds AI-powered GTM systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8LM2CKKH6V"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8LM2CKKH6V');
        `}
      </Script>
      <body className="antialiased">{children}</body>
    </html>
  );
}
