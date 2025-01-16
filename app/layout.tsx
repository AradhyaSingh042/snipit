import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

const metadata: Metadata = {
  title: "Snipit",
  description: "A Full Stack Snippet Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Snipit</title>
        <meta
          name="description"
          content="A Full Stack Snippet Management App"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
