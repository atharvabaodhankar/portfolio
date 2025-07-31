import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home || Portfolio',
  description: 'Atharva Baodhankar - Web Designer and Video Editor Portfolio',
  icons: {
    icon: '/imgs/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* External Scripts */}
        <Script
          src="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/sheryjs/dist/Shery.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/gh/atharvabaodhankar/ferro.js@master/ferro.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}