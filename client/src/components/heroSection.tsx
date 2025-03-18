import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Masjid AL - Azhar</h2>
        <p className="text-lg mb-6">
          DONASIKAN WAKAF TERBAIK ANDA KE MASJID AL AZHAR
        </p>
        <div className="space-x-4">
          <Button variant="secondary" className="bg-white text-green-700">
            Lihat Proposal
          </Button>
          <Button variant="secondary" className="bg-white text-green-700">
            Lokasi
          </Button>
        </div>
      </div>
    </section>
  );
}