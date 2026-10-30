# NOCTRA Market

Website e-commerce fashion dan lifestyle dengan karakter heritage premium.
Frontend Vue 3 dan backend NestJS berada dalam satu repository.

## Status saat ini

| Bagian | Status |
|---|---|
| Design system (warna, tipografi, tombol, ikon) | Fondasi selesai |
| Homepage | Selesai, konten masih placeholder |
| Router + 5 layout + halaman 404 | Selesai |
| Katalog, detail produk, keranjang | Belum |
| Autentikasi dan akun | Belum, guard masih stub |
| Checkout dan pembayaran | Belum |
| Backend API | Scaffold saja (`GET /` mengembalikan `Hello World!`) |
| MongoDB | Belum terhubung |
| Admin dashboard | Baru route dan layout |

## Prasyarat

- Node.js `^22.18.0` atau `>=24.12.0` (lihat `frontend/package.json`).
  Diverifikasi pada Node v24.21.0 dan npm 12.2.0.
- npm, menggunakan `package-lock.json` yang sudah ada.

## Menjalankan frontend

```powershell
cd frontend
npm install
npm run dev
```

Buka `http://localhost:5173`.

| Perintah | Fungsi |
|---|---|
| `npm run dev` | development server |
| `npm run build` | type-check lalu build produksi ke `dist/` |
| `npm run preview` | menyajikan hasil build |
| `npm run type-check` | pemeriksaan tipe dengan `vue-tsc` |

## Menjalankan backend

```powershell
cd backend
npm install
npm run start:dev
```

`GET http://localhost:3000/` mengembalikan `Hello World!`.

| Perintah | Fungsi |
|---|---|
| `npm run start:dev` | jalankan dengan watch mode |
| `npm run build` | kompilasi ke `dist/` |
| `npm run lint` | oxlint |
| `npm run test` | unit test dengan Vitest |
| `npm run test:e2e` | end-to-end test |

## Environment

Jangan commit file `.env` atau `.env.local`.

- `backend/.env.example` disalin menjadi `backend/.env` bila diperlukan.
- `frontend/.env.example` disalin menjadi `frontend/.env.local` bila diperlukan.
  Saat ini frontend belum membutuhkan variabel environment.

## Struktur

```text
noctra/
├── backend/    NestJS REST API
├── docs/       Dokumentasi internal
├── frontend/   Vue 3 + Vite + Tailwind CSS
├── .gitignore
└── README.md
```

## Git

Satu repository aktif di root. Jalankan perintah `git` dari folder `noctra/`,
bukan dari dalam `frontend/` atau `backend/`.

## Catatan penting

- Data produk dan harga di homepage masih placeholder dari mockup, bukan inventaris nyata.
- Gambar di `frontend/public/images/` berasal dari mockup dan lisensinya belum jelas.
  Ganti dengan aset berlisensi sebelum produksi.
- Hampir semua route selain homepage masih memakai `ComingSoonView`.
- Telemetry `@nestjs/observe` masih aktif dengan key placeholder di
  `backend/src/app.module.ts`.
