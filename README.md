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

### 3. Setup Backend

