import Navbar from '@/components/Navbar'; // nebo vaše přesná cesta k souboru
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <Navbar /> {/* Tady bude svítit opravené menu */}
        {children}
      </body>
    </html>
  );
}