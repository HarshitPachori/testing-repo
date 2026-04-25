import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LenisProvider } from '@/components/lenis-provider';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Harshit Pachori | Lead Full-Stack Architect',
  description: 'A modern 3D-inspired portfolio showcasing architecture, design precision, and full-stack systems.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LenisProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
