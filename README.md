# Aplikasi Web Masjid AL – Azhar

Aplikasi web ini dibangun untuk memudahkan pengelolaan informasi, donasi, dan kegiatan Masjid AL – Azhar. Aplikasi ini terdiri dari:

- **Frontend**: Dibangun dengan **Next.js** (TypeScript) dan **Tailwind CSS**.
- **Backend**: Dibangun dengan **Express.js** dan **Prisma ORM**.
- **Database**: Menggunakan **PostgreSQL** atau **MySQL**.

---

## Fitur

1. **Halaman Beranda**:
   - Menampilkan informasi umum tentang masjid.
   - Tombol donasi dan proposal wakaf.

2. **Halaman Informasi**:
   - Menampilkan artikel-artikel terbaru tentang kegiatan masjid.

3. **Halaman Infaq**:
   - Menampilkan laporan donasi terkini.
   - Informasi rekening untuk donasi.

4. **Halaman Admin**:
   - CMS sederhana untuk memposting artikel baru.
   - Mengelola data donasi.

5. **Responsive Design**:
   - Tampilan yang responsif dan ramah pengguna.

---

## Teknologi yang Digunakan

- **Frontend**:
  - Next.js (TypeScript)
  - Tailwind CSS
  - Shadcn UI (untuk komponen UI modern)

- **Backend**:
  - Express.js
  - Prisma ORM
  - PostgreSQL/MySQL

- **Lainnya**:
  - NextAuth.js (untuk autentikasi)
  - Axios (untuk HTTP requests)
  - Vercel (untuk deployment frontend)
  - Heroku/Railway (untuk deployment backend)

---

## Cara Setup dan Menjalankan Proyek

### 1. Prasyarat

- Node.js (v16 atau lebih baru)
- PostgreSQL/MySQL (atau database lain yang didukung Prisma)
- Git

---

### 2. Clone Repositori

```bash
git clone https://github.com/Restkand/masjid-app.git
cd masjid-app
```

### 3. Setup frontend

- Masuk ke direktori client:
```bash
cd client
```
- Install dependecies:
```bash
npm install
```

### 3. Setup Backend

- Masuk ke direktori server:
```bash
cd ../server
```
- Install dependecies:
```bash
npm install
```
- Buat file .env dan isi dengan konfigurasi database:
```env
DATABASE_URL="postgresql://restka:randompassword@localhost:5432/masjiddb?schema=public"
PORT=3000
```
- Jalankan migrasi Prisma
```bash
npx prisma migrate dev --name init
```
Jalankan Server
```bash
npm run dev
```
- Buka browser dan akses http://localhost:3000.

### 5. Plan Deployment

- Frontend: Deploy ke Vercel.
- Backend: Deploy ke Heroku, Railway, atau platform lainnya.
- Database: Gunakan layanan seperti Supabase, AWS RDS, atau PostgreSQL/MySQL di platform deployment Anda.

### Cara Berkontribusi
1. Fork Repositori ini
2. Buat Branch Baru
   ``` bash
   git checkout -b fitur-baru
   ```
3. Commit perubahan Anda:
  ```bash
   git commit -m "Tambahkan fitur baru"
  ```
4. Push ke branch:
   ```bash
   git push origin fitur-baru
   ```
5. Buat Pull Request

### Kontak

Jika Anda memiliki pertanyaan atau masukan, silakan hubungi:
Nama Anda: reiskand07@gmail.com
GitHub: restkand

Semoga membantu! Jika ada yang perlu disesuaikan, silakan beri tahu. 😊

