import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import "./globals.css";

const roboto = Roboto({
  weight:"300"  
})

export const metadata: Metadata = {
  title: "Clone Facebook",
  description: "Clon de Facebook creada con Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
