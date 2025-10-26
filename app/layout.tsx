import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { RootProvider } from "fumadocs-ui/provider/next"
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: {
    default: "wiki.phph.dev | Personal wiki",
    template: "%s | wiki.phph.dev",
  },
  description: "Personal wiki",
  metadataBase: new URL("https://wiki.phph.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
