# AKAPRO Ecosystem - Website Akademi Profesional Indonesia

Website modern dan profesional untuk Akademi Profesional Indonesia dengan fitur lengkap untuk manajemen pelatihan, artikel, dan konten.

## Fitur Utama

### 1. Halaman Beranda
- Hero banner dengan animasi
- Menu bento grid dengan 8 kategori layanan
- Dashboard card untuk informasi cepat
- Navigation dock dengan floating WhatsApp button

### 2. Halaman PINTAR UC (/pintar-uc)
- Showcase aplikasi PINTAR UC dengan gambar yang tampil sempurna
- Background images yang terintegrasi dengan baik
- Informasi lengkap tentang latar belakang, manfaat, dan target pengguna
- CTA button untuk demo

### 3. Halaman Pelatihan (/pelatihan)
- Grid cards dengan 9 program pelatihan
- Desain modern dengan warna lime green (#C6FF00)
- Floating WhatsApp button untuk kontak langsung
- Frameless dan stylish design

### 4. Halaman Jadwal (/jadwal)
- Daftar jadwal pelatihan dengan detail lengkap
- Tombol "Unduh TOR" untuk download PDF TOR pelatihan
- TOR PDF dengan KOP dan Footer profesional
- Form registrasi dengan validasi
- Informasi pembayaran

### 5. Halaman Artikel (/artikel)
- Tab untuk melihat daftar jurnal dan submit artikel
- Form registrasi lengkap dengan:
  - Nama lengkap
  - Email
  - Instansi/Rumah Sakit
  - Alamat lengkap
  - No. WhatsApp
  - Judul artikel
  - Kategori
  - Abstrak
  - Upload file PDF
- Search functionality
- Download dan cite artikel

### 6. Halaman Pusat Bantuan (/bantuan)
- CS Card dengan WhatsApp integration
- Informasi kontak lengkap:
  - Nama: Akademi Profesional Indonesia
  - Alamat: Perumahan Saphire Blok C3, Jl. Truntum Pekalongan
  - WhatsApp: 085726112001
  - Email: akademiprofesional@gmail.com
- Quick actions untuk 4 layanan utama
- Desain modern dan stylish

### 7. Halaman Admin (/admin)
- Login dengan email: mukhsin9@gmail.com
- Password: Jlamprang233!!
- Dashboard untuk mengelola:
  - Pelatihan (tambah, edit, hapus)
  - Artikel (approve, reject)
  - Konten halaman (edit nomor WA, dll)
- Terintegrasi dengan Supabase

### 8. WhatsApp Integration
- Icon chat di navigation dock (FAB button)
- Template otomatis saat diklik:
  ```
  Selamat Pagi, saya .... dari instansi/rumah sakit .... , berminat untuk :
  
  1. Informasi aplikasi
  2. Informasi pelatihan
  3. Submit artikel
  4. Mitra kerjasama
  
  Mohon informasi lebih lanjut.
  ```
- Nomor WhatsApp: 085726112001

### 9. Menu Mitra Bersama
- Badge "COMING SOON" di halaman beranda

## Database Schema (Supabase)

### Tabel: pelatihan
- id (UUID)
- judul (TEXT)
- deskripsi (TEXT)
- tanggal_mulai (DATE)
- tanggal_selesai (DATE)
- lokasi (TEXT)
- investasi_single (NUMERIC)
- investasi_twin (NUMERIC)
- investasi_no_stay (NUMERIC)
- kuota (INTEGER)
- status (TEXT)
- created_at, updated_at (TIMESTAMPTZ)

### Tabel: artikel
- id (UUID)
- judul (TEXT)
- penulis (TEXT)
- email (TEXT)
- instansi (TEXT)
- alamat (TEXT)
- no_whatsapp (TEXT)
- kategori (TEXT)
- abstrak (TEXT)
- file_url (TEXT)
- status (TEXT) - 'pending', 'published', 'rejected'
- tanggal_submit (DATE)
- created_at, updated_at (TIMESTAMPTZ)

### Tabel: registrasi_pelatihan
- id (UUID)
- pelatihan_id (UUID FK)
- nama_lengkap (TEXT)
- email (TEXT)
- no_whatsapp (TEXT)
- instansi (TEXT)
- alamat (TEXT)
- jenis_kamar (TEXT)
- status_pembayaran (TEXT)
- created_at, updated_at (TIMESTAMPTZ)

### Tabel: konten_halaman
- id (UUID)
- halaman (TEXT)
- key (TEXT)
- value (TEXT)
- tipe (TEXT)
- created_at, updated_at (TIMESTAMPTZ)

### Tabel: cs_whatsapp
- id (UUID)
- nama (TEXT)
- nomor (TEXT)
- status (TEXT)
- created_at, updated_at (TIMESTAMPTZ)

## Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.22.3
- **Animation**: Framer Motion 11.0.8
- **Icons**: Lucide React 0.358.0
- **PDF Generation**: jsPDF 4.2.1
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Build Tool**: Vite 5.2.0

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Tidak diperlukan file .env karena konfigurasi Supabase sudah ada di `src/lib/supabaseClient.js`

## Admin Access

- URL: `/admin`
- Email: mukhsin9@gmail.com
- Password: Jlamprang233!!

## Design System

### Colors
- Midnight Carbon: #0D0D0D (Background)
- Electric Lime: #C6FF00 (Primary)
- WhatsApp Green: #25D366
- Text Primary: #FFFFFF
- Text Secondary: rgba(255, 255, 255, 0.6)

### Typography
- Font Family: Inter, system-ui, -apple-system, sans-serif
- Heading: 900 weight
- Body: 500-700 weight

### Components
- Glass morphism effect
- Rounded corners (12px-24px)
- Smooth animations
- Responsive design

## Features Checklist

- [x] Halaman PintarUC dengan gambar tampil sempurna
- [x] Halaman Pelatihan dengan desain modern dan icon WA
- [x] Halaman Pusat Bantuan dengan info lengkap
- [x] Icon chat WA di navigation dock dengan template otomatis
- [x] Menu Mitra dengan badge "Coming Soon"
- [x] Halaman Jadwal dengan tombol unduh TOR PDF
- [x] TOR PDF dengan KOP dan Footer profesional
- [x] Halaman Artikel dengan form lengkap
- [x] Halaman Admin dengan CRUD functionality
- [x] Database Supabase terintegrasi
- [x] Authentication untuk admin
- [x] RLS policies untuk security

## Notes

- Semua gambar background di halaman PintarUC menggunakan `backgroundSize: 'cover'` dan `backgroundPosition: 'center'` untuk tampilan sempurna
- WhatsApp integration menggunakan nomor 085726112001
- Admin dapat mengelola semua konten melalui dashboard
- Database menggunakan Row Level Security (RLS) untuk keamanan
- PDF TOR dibuat dengan jsPDF dengan desain profesional

## Support

Untuk bantuan dan informasi lebih lanjut:
- WhatsApp: 085726112001
- Email: akademiprofesional@gmail.com
- Website: www.akaproindonesia.com
