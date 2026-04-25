import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { LenisProvider } from '@/components/lenis-provider';
import './globals.css';

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
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LenisProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
