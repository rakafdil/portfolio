import type { Metadata } from "next";
import {
  Stint_Ultra_Condensed,
  Pacifico,
  Crimson_Text,
} from "next/font/google";
import "./globals.css";

const stintUltraCondensed = Stint_Ultra_Condensed({
  variable: "--font-stint",
  subsets: ["latin"],
  weight: "400",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raka - Portfolio",
  description: "Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stintUltraCondensed.variable} ${pacifico.variable} ${crimsonText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
