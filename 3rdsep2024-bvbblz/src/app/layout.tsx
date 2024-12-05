import type { Metadata } from "next";
// import { formular } from "./fonts";
import "./style/globals.scss";
import "./style/responsive.scss";
import "./style/mobile.scss";
import icon from "../../public/images/icon.png"
import Head from "next/head"; // Correct import for meta tags handling

if (process.env.NODE_ENV === "development") {
  console.log = function() {};
  console.warn = function() {};
  console.error = function() {};
}

export const metadata: Metadata = {
  title: "BVBBLZ by odsgns",
  description: "BVBBLZ is a bold and fun Framer website template designed for bold apps in FinTech, Fitness, AI, Web3 & much more. Designed with startups in mind. Made by odsgns.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={icon.src} />
      </Head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
