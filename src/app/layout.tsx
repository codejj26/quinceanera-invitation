import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XV Años • Julieta Rua David",
  description: "Te invitamos a celebrar los XV años de Julieta Rua David. Una noche mágica llena de amor, elegancia y recuerdos inolvidables.",
  openGraph: {
    title: "XV Años • Julieta Rua David",
    description: "¡Mis XV años! Acompáñame en esta noche especial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
