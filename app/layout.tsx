import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Calia Functional Wellness & Aesthetics | Integrative Care in Texas",
  description: "BHRT, Thyroid Support, Functional Medicine, and Aesthetics with a modern/boho chic, nature-inspired approach.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
