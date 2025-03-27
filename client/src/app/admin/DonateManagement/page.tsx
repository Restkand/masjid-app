"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DonatePage() {
  const router = useRouter();
  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [donationDate, setDonationDate] = useState("");
  const [notes, setNotes] = useState("");

  // Handle submit form donasi
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const donationData = {
      donorName,
      amount: parseFloat(amount), // Konversi ke number
      donationDate,
      notes,
    };

    const response = await fetch("/api/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donationData),
    });

    if (response.ok) {
      alert("Donasi berhasil disimpan!");
      router.push("/admin/donate");
    } else {
      alert("Gagal menyimpan donasi");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Input Donasi</h1>

      <Card>
        <CardHeader>
          <CardTitle>Form Donasi</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="donorName">Nama Donatur</Label>
              <Input
                id="donorName"
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="amount">Jumlah Donasi</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="donationDate">Tanggal Donasi</Label>
              <Input
                id="donationDate"
                type="date"
                value={donationDate}
                onChange={(e) => setDonationDate(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="notes">Catatan (Opsional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <Button type="submit">Simpan Donasi</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}