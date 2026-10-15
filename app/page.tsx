import './globals.css';
import type { Metadata } from 'next';
import { Inter, Nunito, Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SITE_NAME } from '../config/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-poppins' });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: SITE_NAME,
  description: 'AMR Primary School with ECD - A Great Place to Grow & Learn',
  keywords: ['AMR Primary School', 'ECD', 'Zimbabwe school', 'primary school'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${nunito.variable} ${poppins.variable} bg-white text-slate-900`}>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
