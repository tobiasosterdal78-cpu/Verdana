import type { Metadata, Viewport } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = siteMetadata("en");

export const viewport: Viewport = { colorScheme: "light dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
