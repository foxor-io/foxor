import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Foxor",
  description: "3D Streaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col items-center">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
