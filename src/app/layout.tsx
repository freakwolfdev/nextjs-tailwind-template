import type { Metadata } from 'next';
import { Fira_Code, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Next.js Tailwind Template',
  description:
    'Modern development stack with Next.js, TypeScript, Tailwind CSS, and Biome',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
