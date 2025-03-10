import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Balance is not something you find; it’s something you create',
    default: 'Workfit Life | Balance is not something you find; it’s something you create',
  },
  description: 'Workfit Life | Balance is not something you find; it’s something you create',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialisaed`}>{children}</body>
    </html>
  );
}
