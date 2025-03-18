import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Masjid AL – Azhar</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-green-600">
                  Beranda
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/informasi">
                <Button variant="ghost" className="text-white hover:bg-green-600">
                  Informasi
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/infaq">
                <Button variant="ghost" className="text-white hover:bg-green-600">
                  Infaq
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/galeri">
                <Button variant="ghost" className="text-white hover:bg-green-600">
                  Galeri
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}