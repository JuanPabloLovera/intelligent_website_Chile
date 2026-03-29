import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan Pablo Lovera Romero | CV Web Elite",
  description:
    "CV web premium de Juan Pablo Lovera Romero, orientado a IA aplicada, automatización, observabilidad y operación crítica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
