import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FounderMatch - Find Your Perfect Co-Founder',
  description: 'Connect with potential co-founders and build your dream startup team.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        inter.className,
        "min-h-full bg-[#F8FAFC] text-[#1F2937]"
      )}>
        <main className="pb-16">
          {children}
        </main>
        <Navigation />
        <Toaster />
      </body>
    </html>
  );
}