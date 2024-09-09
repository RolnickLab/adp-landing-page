import { Analytics } from "@/components/analytics";
import { Logo } from "@/components/logo";
import { Menu } from "@/components/menu";
import content from "@/lib/content.json";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: content.appName,
  description: content.subTitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/images/favicon.png" />
      <body>
        <header className="h-14 px-4 sticky top-0 z-10 bg-muted/95 border-b overflow-hidden">
          <nav className="flex items-center justify-between max-w-screen-lg h-full mx-auto relative">
            <div className="absolute left-0 max-lg:static">
              <Link href="/">
                <Logo id="logo" className="w-10 h-10 color-primary" />
              </Link>
            </div>
            <Menu />
          </nav>
        </header>
        <main>
          <div>{children}</div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
