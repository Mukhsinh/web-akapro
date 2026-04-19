# 🚀 Quick Start Guide - Admin Jurnal AKAPRO

## Setup Awal

### 1. Update Database
Jalankan SQL berikut di Supabase SQL Editor:

```bash
# Jika tabel artikel belum ada
Jalankan: supabase_migration.sql

# Jika tabel artikel sudah ada (update)
Jalankan: supabase_artikel_update.sql
```

### 2. Verifikasi Storage Buckets
Pastikan 2 buckets ini ada di Supabase Storage:

- ✅ `artikel-foto` (public: true)
- ✅ `artikel-word` (public: false)

### 3. Login Admin
1. Buka: `https://your-domain.com/admin`
2. Login dengan email: `mukhsin9@gmail.com`
3. Password: (sesuai yang didaftarkan di Supabase Auth)

## Workflow Harian Admin

### Pagi: Check Artikel Baru
```
1. Login ke /admin
2. Klik tab "📝 Artikel"
3. Filter: "Pending" - lihat artikel baru
4. Jumlah pending ditampilkan di badge
```

### Review Artikel

#### Step 1: Buka Detail
```
1. Klik tombol "🔍 Review Detail" pada artikel
2. Modal akan terbuka dengan info lengkap
```

#### Step 2: Evaluasi
Periksa:
- ✅ Judul jelas dan spesifik
- ✅ Abstrak 150-250 kata
- ✅ Keywords minimal 3
- ✅ Isi artikel lengkap (Pendahuluan, Metode, Hasil, Pembahasan, Kesimpulan)
- ✅ Bahasa Indonesia/Inggris yang baik
- ✅ Referensi jelas (jika ada)

#### Step 3: Set Status Review
```
1. Klik "📋 Set Review"
2. Artikel berpindah ke status "Review"
3. Tambahkan catatan di "Catatan Reviewer"
```

#### Step 4: Keputusan

**Jika APPROVE:**
```
1. (Opsional) Input DOI: 10.xxxxx/xxxxx
2. Tambahkan catatan positif
3. Klik "✅ Approve & Publish"
4. Artikel langsung muncul di halaman publik
```

**Jika REJECT:**
```
1. Tulis alasan penolakan di "Catatan Reviewer"
   Contoh:
   - "Abstrak terlalu singkat (hanya 80 kata)"
   - "Metodologi tidak jelas"
   - "Referensi tidak lengkap"
2. Klik "❌ Reject"
3. Penulis akan dihubungi via email/WA
```

### Sore: Monitor Statistik
```
1. Check total artikel approved
2. Lihat artikel dengan views tertinggi
3. Monitor downloads
```

## Shortcut & Tips

### Filter Cepat
- **Pending** 🟠: Artikel baru, prioritas review
- **Review** 🔵: Sedang Anda evaluasi
- **Approved** 🟢: Sudah dipublikasikan
- **Rejected** 🔴: Ditolak, perlu follow-up

### Catatan Reviewer - Template

**Template Approve:**
```
Artikel diterima untuk publikasi.
Kualitas penelitian baik, metodologi jelas, hasil signifikan.
Selamat! Artikel Anda telah dipublikasikan di Jurnal AKAPRO.
```

**Template Reject - Revisi Minor:**
```
Artikel memiliki potensi baik namun perlu perbaikan:
1. Abstrak perlu diperpanjang (minimal 150 kata)
2. Tambahkan 2-3 keywords lagi
3. Perbaiki typo di bagian Pembahasan

Silakan revisi dan submit ulang.
```

**Template Reject - Revisi Major:**
```
Artikel perlu revisi substansial:
1. Metodologi penelitian kurang detail
2. Hasil analisis perlu diperdalam
3. Referensi terlalu sedikit (minimal 15 referensi)
4. Kesimpulan tidak sesuai dengan hasil

Silakan lakukan revisi menyeluruh dan submit ulang.
```

### DOI Format
```
Format standar: 10.xxxxx/akapro.2026.xxxxx

Contoh:
- 10.12345/akapro.2026.001
- 10.12345/akapro.2026.002
- dst...

Tips: Gunakan nomor urut untuk tracking
```

## Troubleshooting

### Artikel tidak muncul di publik setelah approve
```
✅ Check: Status = 'approved' (bukan 'published')
✅ Check: RLS policy aktif
✅ Refresh halaman /artikel
```

### File Word tidak bisa didownload
```
✅ Check: Bucket 'artikel-word' ada
✅ Check: Storage policy untuk authenticated user
✅ Login sebagai admin untuk download
```

### Views/Downloads tidak bertambah
```
✅ Check: Kolom views & downloads ada di tabel
✅ Check: Trigger update berjalan
✅ Refresh browser (clear cache)
```

### Foto penulis tidak muncul
```
✅ Check: Bucket 'artikel-foto' public
✅ Check: URL foto valid
✅ Check: File size < 5MB
```

## Best Practices

### ✅ DO
- Review artikel dalam 3-5 hari kerja
- Berikan feedback konstruktif
- Gunakan template catatan reviewer
- Input DOI untuk artikel approved
- Backup catatan penting
- Komunikasi dengan penulis via email/WA

### ❌ DON'T
- Jangan approve tanpa baca lengkap
- Jangan reject tanpa alasan jelas
- Jangan edit artikel tanpa izin penulis
- Jangan share artikel pending ke publik
- Jangan hapus artikel tanpa backup

## Checklist Harian

### Morning Routine
- [ ] Login admin dashboard
- [ ] Check pending articles (badge counter)
- [ ] Prioritas review artikel >3 hari
- [ ] Reply email/WA dari penulis

### Review Session
- [ ] Baca minimal 2-3 artikel
- [ ] Set status "Review" saat mulai
- [ ] Tulis catatan reviewer
- [ ] Approve/Reject dengan alasan

### Evening Wrap-up
- [ ] Update status semua artikel yang direview
- [ ] Send notification ke penulis
- [ ] Log aktivitas hari ini
- [ ] Plan review besok

## Kontak Support

**Technical Issues:**
- Developer: [email developer]
- Supabase Dashboard: https://supabase.com/dashboard

**Content Issues:**
- Editor in Chief: [email]
- WhatsApp: [nomor]

## Resources

- 📚 Full Guide: `JURNAL_SYSTEM_GUIDE.md`
- 🗄️ Database Schema: `supabase_migration.sql`
- 🔄 Update Script: `supabase_artikel_update.sql`
- 🌐 Live Site: `https://your-domain.com/artikel`
- 🔐 Admin Panel: `https://your-domain.com/admin`

---

**Happy Reviewing! 🎓**

*Pertanyaan? Hubungi tim development atau check dokumentasi lengkap.*
