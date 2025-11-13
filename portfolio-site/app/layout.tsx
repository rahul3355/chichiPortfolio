import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marketing & Communications Portfolio | Professional Storytelling & Strategy",
  description: "Marketing and communications professional specializing in cultural campaigns, content creation, and data-driven strategy. Experience with ICCR, University of Manchester, and Pagrav Dance Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
