import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export default function InfoSection() {
  return (
    <section className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">INFORMASI</h2>
      <Card>
        <CardHeader>
          <CardTitle>Informasi Penting</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-800">
            Informasi penting tentang Masjid AL Azhar akan ditampilkan di sini.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}