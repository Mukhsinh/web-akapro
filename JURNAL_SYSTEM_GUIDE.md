# 📚 Panduan Sistem Jurnal Ilmiah AKAPRO

## Overview
Sistem jurnal ilmiah AKAPRO dirancang dengan standar enterprise seperti ScienceDirect untuk mengelola publikasi artikel ilmiah psikologi dengan proses peer-review yang profesional.

## 🎯 Fitur Utama

### 1. Halaman Publik (/artikel)

#### Tab: Daftar Artikel
- **Tampilan Profesional**: Desain mirip jurnal ilmiah internasional
- **Informasi Lengkap**:
  - Foto penulis profesional
  - Nama penulis & instansi
  - Tanggal submit & publish
  - Jumlah views (dilihat)
  - Jumlah downloads (diunduh)
  - Kategori artikel
  - Keywords
  - DOI (jika sudah approved)

- **Fitur Pencarian & Filter**:
  - Search bar untuk cari judul, penulis, keywords
  - Filter berdasarkan kategori:
    - Psikologi Klinis
    - Psikologi Industri
    - Psikologi Pendidikan
    - Psikometri
    - Konseling
    - Psikologi Sosial
    - Lainnya

- **Statistik Real-time**:
  - Total artikel terpublikasi
  - Views per artikel
  - Downloads per artikel

#### Tab: Submit Artikel
- **Form Lengkap**:
  - Informasi Penulis:
    - Nama lengkap
    - Email
    - Instansi/Lembaga
    - No. WhatsApp
    - Foto penulis (untuk profil publikasi)
  
  - Detail Artikel:
    - Judul artikel
    - Kategori
    - Abstrak (150-250 kata)
    - Keywords (minimal 3, pisahkan dengan koma)
  
  - Isi Artikel (2 opsi):
    - ✍️ Ketik langsung di form
    - 📄 Upload file Word (.doc/.docx)

- **Panduan Submit**:
  - Artikel harus original
  - Belum dipublikasikan di tempat lain
  - Abstrak 150-250 kata
  - Minimal 3-5 keywords
  - Bahasa Indonesia/Inggris yang baik

- **Status Tracking**:
  - Notifikasi sukses submit
  - Info waktu review (3-5 hari kerja)
  - Update via email & WhatsApp

### 2. Halaman Admin (/admin)

#### Tab: Artikel (Manajemen Jurnal)

**Status Workflow**:
1. **Pending** 🟠: Artikel baru masuk, menunggu review
2. **Review** 🔵: Sedang dalam proses review
3. **Approved** 🟢: Disetujui dan dipublikasikan
4. **Rejected** 🔴: Ditolak dengan catatan

**Fitur Review**:
- Filter berdasarkan status
- Counter jumlah artikel per status
- Review detail artikel:
  - Lihat semua informasi penulis
  - Baca abstrak & isi artikel lengkap
  - Download file Word (jika ada)
  - Lihat keywords
  - Tracking views & downloads

**Aksi Admin**:
- 📋 Set Review: Tandai artikel sedang direview
- ✅ Approve & Publish: Setujui dan publikasikan
- ❌ Reject: Tolak dengan catatan
- ⏳ Set Pending: Kembalikan ke pending
- 🗑️ Delete: Hapus artikel

**Catatan Reviewer**:
- Tambahkan feedback untuk penulis
- Alasan penolakan
- Saran perbaikan
- History catatan tersimpan

**DOI Management**:
- Input DOI untuk artikel approved
- Format: 10.xxxxx/xxxxx
- Otomatis tampil di publikasi

**Tracking Metadata**:
- Tanggal submit
- Tanggal approved
- Views count
- Downloads count
- Last updated

## 🗄️ Database Schema

### Tabel: artikel

```sql
CREATE TABLE artikel (
  id uuid PRIMARY KEY,
  judul text NOT NULL,
  penulis text,
  email text,
  instansi text,
  no_whatsapp text,
  kategori text,
  abstrak text,
  isi_artikel text,
  foto_penulis_url text,
  word_file_url text,
  mode_input text DEFAULT 'ketik',
  status text DEFAULT 'pending',
  tanggal_submit date DEFAULT CURRENT_DATE,
  tanggal_approved date,
  views integer DEFAULT 0,
  downloads integer DEFAULT 0,
  keywords text,
  doi text,
  reviewer_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Status Values**:
- `pending`: Menunggu review
- `review`: Sedang direview
- `approved`: Disetujui & dipublikasikan
- `rejected`: Ditolak

## 📊 Workflow Proses Review

```
1. Penulis Submit Artikel
   ↓
2. Status: PENDING (masuk antrian review)
   ↓
3. Admin: Set REVIEW (mulai evaluasi)
   ↓
4. Admin Review:
   - Baca artikel lengkap
   - Evaluasi kualitas
   - Tambahkan catatan
   ↓
5a. APPROVED                    5b. REJECTED
    - Input DOI (opsional)          - Tambahkan alasan
    - Set tanggal approved          - Kirim feedback
    - Publikasikan                  - Penulis bisa revisi
    ↓                               ↓
6. Tampil di Daftar Artikel    6. Tidak dipublikasikan
```

## 🎨 Design System

### Warna Status
- **Pending**: `#ffa500` (Orange)
- **Review**: `#3b82f6` (Blue)
- **Approved**: `#00ff88` (Green)
- **Rejected**: `#ff4444` (Red)

### Typography
- **Judul Artikel**: 28px, Bold
- **Nama Penulis**: 16px, Bold
- **Abstrak**: 15px, Regular
- **Meta Info**: 12px, Regular

### Layout
- **Max Width**: 1000px (daftar), 800px (viewer)
- **Card Spacing**: 16px gap
- **Border Radius**: 12-16px
- **Padding**: 20-24px

## 🔒 Security & Permissions

### Public Access
- ✅ Baca artikel approved
- ✅ Submit artikel baru
- ✅ View statistics
- ❌ Edit/Delete artikel
- ❌ Approve/Reject

### Admin Access (Authenticated)
- ✅ Semua aksi public
- ✅ Review artikel
- ✅ Approve/Reject
- ✅ Edit metadata
- ✅ Delete artikel
- ✅ Manage DOI

### Storage Buckets
- **artikel-foto**: Public (foto penulis)
- **artikel-word**: Private (hanya admin)

## 📈 Analytics & Metrics

### Tracking Otomatis
- **Views**: Increment saat artikel dibuka
- **Downloads**: Increment saat PDF diunduh
- **Submit Date**: Otomatis saat submit
- **Approved Date**: Otomatis saat approved

### Statistik Dashboard
- Total artikel per status
- Total views keseluruhan
- Total downloads
- Artikel terpopuler

## 🚀 Deployment Checklist

### Database Migration
1. Jalankan `supabase_migration.sql`
2. Verifikasi tabel `artikel` sudah ada
3. Check storage buckets:
   - `artikel-foto` (public)
   - `artikel-word` (private)
4. Verifikasi RLS policies aktif

### Environment Variables
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Testing
1. Submit artikel dari form publik
2. Login admin dan review
3. Test approve workflow
4. Test reject workflow
5. Verifikasi artikel muncul di daftar
6. Test views & downloads counter
7. Test search & filter
8. Test PDF generation

## 📝 Best Practices

### Untuk Admin
1. Review artikel dalam 3-5 hari kerja
2. Berikan feedback konstruktif
3. Gunakan status "Review" saat evaluasi
4. Input DOI untuk artikel approved
5. Simpan catatan reviewer untuk tracking

### Untuk Penulis
1. Baca panduan submit sebelum kirim
2. Pastikan abstrak 150-250 kata
3. Sertakan minimal 3 keywords
4. Upload foto profil profesional
5. Gunakan bahasa yang baik dan benar

### Untuk Developer
1. Backup database secara berkala
2. Monitor storage usage
3. Optimize image uploads
4. Cache artikel list untuk performa
5. Log semua perubahan status

## 🔧 Maintenance

### Regular Tasks
- Backup database mingguan
- Clean up rejected articles (>6 bulan)
- Update DOI untuk artikel lama
- Monitor storage quota
- Review analytics monthly

### Performance Optimization
- Index pada kolom `status` dan `tanggal_approved`
- Compress foto penulis (max 500KB)
- Lazy load artikel list
- Cache search results
- CDN untuk static assets

## 📞 Support

Untuk pertanyaan atau issue:
- Email: akademiprofesional@gmail.com
- WhatsApp: Lihat di halaman kontak
- GitHub Issues: (jika ada repo)

---

**Version**: 1.0.0  
**Last Updated**: 2026-04-19  
**Maintained by**: AKAPRO Development Team
