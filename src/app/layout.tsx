import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {

  title: "Emad Ahmed ",
  description: "Hi, I'm a Junior Front End Developer and Designer",
  openGraph: {

  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
