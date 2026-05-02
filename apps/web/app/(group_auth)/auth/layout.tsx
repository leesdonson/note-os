import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/app/globals.css";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Note OS - Login / Register - By Lee Dosnson",
  description: "Sign in or Sign up on Note-OS",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="w-full min-h-screen flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
