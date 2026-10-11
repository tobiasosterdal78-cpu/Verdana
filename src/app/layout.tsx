import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verdana — Affärssystem med riktning",
  description:
    "Microsoft Dynamics 365 Business Central, smarta integrationer och rådgivning som tar din verksamhet framåt.",
  robots: { index: false, follow: false },
  icons: { icon: "data:," },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
