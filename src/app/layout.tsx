import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Choo Jian Cheng | Senior Frontend Engineer",
  description: "Senior Software Engineer with 6+ years of experience in React, TypeScript, and modern web development. Expert in building scalable applications and modernizing legacy systems.",
  keywords: ["Frontend Engineer", "React Developer", "TypeScript", "Next.js", "Software Engineer", "Penang", "Malaysia"],
  authors: [{ name: "Choo Jian Cheng" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Choo Jian Cheng",
              "jobTitle": "Senior Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Nindatech Sdn. Bhd."
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Penang",
                "addressCountry": "Malaysia"
              },
              "email": "choopk1994@gmail.com",
              "url": "https://choojc.dev",
              "sameAs": [
                "https://www.linkedin.com/in/jian-cheng-choo-77699a280/",
                "https://github.com/choopk"
              ],
              "knowsAbout": [
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Docker",
                "Frontend Development",
                "Software Engineering"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
