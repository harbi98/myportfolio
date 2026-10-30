// Self-hosted Geist fonts: no network request to Google Fonts at build time.
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "Jan Harvey Jimenez · Software Developer",
  description:
    "Portfolio of Jan Harvey Jimenez, a software developer from the Philippines building web and mobile apps with Laravel, React Native, and Next.js.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
