import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table';

export default function InfaqSection() {
  const infaqData = [
    { id: 1, oleh: 'John Doe', jumlah: 'Rp 500.000', tanggal: '2023-10-01' },
    { id: 2, oleh: 'Jane Doe', jumlah: 'Rp 300.000', tanggal: '2023-10-02' },
  ];

  return (
    <section className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">LAPORAN INFAQ</h2>
      <Card>
        <CardHeader>
          <CardTitle>Dana Terkumpul</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-800">Saldo: Rp 800.000</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Oleh</TableHead>
                <TableHead>Jumlah</TableHead>
                <TableHead>Tanggal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {infaqData.map((infaq) => (
                <TableRow key={infaq.id}>
                  <TableCell>{infaq.oleh}</TableCell>
                  <TableCell>{infaq.jumlah}</TableCell>
                  <TableCell>{infaq.tanggal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Lihat Semua
          </Button>
        </CardFooter>
      </Card>
      <div className="mt-6">
        <h3 className="text-lg font-bold">Salurkan infaq Anda melalui rekening berikut</h3>
        <p className="text-gray-800">
          Bank Syariah Indonesia (BSI) - 1029762062 A/n Masjid AL Azhar
        </p>
      </div>
    </section>
  );
}