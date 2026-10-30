# Routing Map — NOCTRA Market

Peta route frontend. Sumber kebenaran tetap `frontend/src/router/index.ts`; dokumen ini
adalah ringkasan agar mudah dibaca. Jika keduanya berbeda, file router yang benar.

## Ringkasan

- Router: `vue-router@4`, mode `createWebHistory`.
- Total route: **33** (termasuk halaman 404).
- Struktur: satu parent per layout, halaman sebagai child.
- Judul dokumen: `meta.title` + ` — NOCTRA Market`. Tanpa `meta.title`, dipakai
  `NOCTRA Market — Heritage-Inspired Essentials`.
- Scroll: posisi tersimpan dipulihkan saat back/forward; anchor (`#...`) memakai offset
  96px untuk header sticky; selain itu kembali ke atas.
- Guard: **masih stub** (`frontend/src/router/guards.ts`). Flag `requiresAuth`,
  `requiresAdmin`, dan `guestOnly` sudah ditulis di meta, tetapi **belum ditegakkan**.
- Hampir semua halaman memakai `ComingSoonView`, kecuali homepage dan 404.

## Layout

| Layout | File | Dipakai oleh |
|---|---|---|
| Storefront | `src/layouts/StorefrontLayout.vue` | Halaman publik toko |
| Checkout | `src/layouts/CheckoutLayout.vue` | Alur checkout |
| Auth | `src/layouts/AuthLayout.vue` | Login, register, reset password |
| Account | `src/layouts/AccountLayout.vue` | Area akun pengguna |
| Admin | `src/layouts/AdminLayout.vue` | Dashboard admin |

## Route publik (StorefrontLayout)

| Path | Name | View | Meta | Status |
|---|---|---|---|---|
| `/` | `home` | `views/home/HomeView.vue` | — | Selesai (konten placeholder) |
| `/shop` | `shop` | `ComingSoonView` | Shop All | Belum |
| `/category/:slug` | `category` | `ComingSoonView` | Category | Belum |
| `/product/:slug` | `product-detail` | `ComingSoonView` | Product | Belum |
| `/search` | `search` | `ComingSoonView` | Search | Belum |
| `/cart` | `cart` | `ComingSoonView` | Cart | Belum |
| `/journal` | `journal` | `ComingSoonView` | The Journal | Belum |
| `/journal/:slug` | `journal-detail` | `ComingSoonView` | Journal Story | Belum |
| `/:pathMatch(.*)*` | `not-found` | `NotFoundView.vue` | Page Not Found | Selesai |

Catatan: route 404 berada di dalam StorefrontLayout, jadi halaman tidak dikenal tetap
menampilkan header dan footer toko.

## Checkout (CheckoutLayout)

| Path | Name | View | Meta | Status |
|---|---|---|---|---|
| `/checkout` | `checkout` | `ComingSoonView` | Checkout | Belum |
| `/checkout/success/:orderId` | `checkout-success` | `ComingSoonView` | Order Confirmed | Belum |

## Autentikasi (AuthLayout)

| Path | Name | View | Meta | Status |
|---|---|---|---|---|
| `/login` | `login` | `ComingSoonView` | Sign In, `guestOnly` | Belum |
| `/register` | `register` | `ComingSoonView` | Create Account, `guestOnly` | Belum |
| `/forgot-password` | `forgot-password` | `ComingSoonView` | Reset Password, `guestOnly` | Belum |

## Akun (AccountLayout)

Semua route memakai `requiresAuth: true` (belum ditegakkan).

| Path | Name | Meta | Status |
|---|---|---|---|
| `/account` | `account-profile` | Profile | Belum |
| `/account/orders` | `account-orders` | Order History | Belum |
| `/account/orders/:id` | `account-order-detail` | Order Detail | Belum |
| `/account/wishlist` | `account-wishlist` | Wishlist | Belum |
| `/account/addresses` | `account-addresses` | Addresses | Belum |
| `/account/security` | `account-security` | Security | Belum |
| `/account/fitting` | `account-fitting` | Fitting Notes | Belum |

## Admin (AdminLayout)

Semua route memakai `requiresAdmin: true` (belum ditegakkan; otorisasi wajib juga
diterapkan di backend, bukan hanya di router).

| Path | Name | Meta | Status |
|---|---|---|---|
| `/admin` | `admin-dashboard` | Dashboard | Belum |
| `/admin/orders` | `admin-orders` | Orders | Belum |
| `/admin/orders/:id` | `admin-order-detail` | Order Detail | Belum |
| `/admin/products` | `admin-products` | Products | Belum |
| `/admin/products/new` | `admin-product-new` | New Product | Belum |
| `/admin/products/:id/edit` | `admin-product-edit` | Edit Product | Belum |
| `/admin/categories` | `admin-categories` | Categories | Belum |
| `/admin/customers` | `admin-customers` | Customers | Belum |
| `/admin/inventory` | `admin-inventory` | Inventory | Belum |
| `/admin/reports` | `admin-reports` | Reports | Belum |
| `/admin/promotions` | `admin-promotions` | Promotions | Belum |
| `/admin/settings` | `admin-settings` | Settings | Belum |

## Flag meta

| Flag | Arti | Kondisi sekarang |
|---|---|---|
| `title` | Nama halaman untuk `document.title` | Aktif |
| `requiresAuth` | Hanya untuk pengguna login | Ditulis, belum ditegakkan |
| `requiresAdmin` | Hanya untuk admin | Ditulis, belum ditegakkan |
| `guestOnly` | Hanya untuk pengguna belum login | Ditulis, belum ditegakkan |

## Langkah berikutnya untuk routing

1. Implementasikan guard berdasarkan status autentikasi nyata dari backend.
2. Tambahkan halaman katalog, detail produk, cart, dan checkout.
3. Pastikan otorisasi admin divalidasi di backend, bukan hanya lewat `meta`.
