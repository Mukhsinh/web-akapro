-- ============================================================
-- AKAPRO - Migration: Buat semua tabel yang dibutuhkan
-- Jalankan di: https://supabase.com/dashboard/project/ekcvvvwfotgcgfrruopz/sql
-- ============================================================

-- 1. Tabel pelatihan
CREATE TABLE IF NOT EXISTS pelatihan (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  judul text NOT NULL,
  deskripsi text,
  tanggal_mulai date,
  tanggal_selesai date,
  lokasi text,
  investasi_single numeric,
  investasi_twin numeric,
  investasi_no_stay numeric,
  kuota integer,
  status text DEFAULT 'aktif' CHECK (status IN ('aktif', 'nonaktif', 'selesai')),
  created_at timestamptz DEFAULT now()
);

-- 2. Tabel artikel
CREATE TABLE IF NOT EXISTS artikel (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
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
  mode_input text DEFAULT 'ketik' CHECK (mode_input IN ('ketik', 'upload')),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'review')),
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

-- 3. Tabel registrasi_pelatihan
CREATE TABLE IF NOT EXISTS registrasi_pelatihan (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  pelatihan_id uuid REFERENCES pelatihan(id) ON DELETE SET NULL,
  nama_lengkap text NOT NULL,
  email text,
  no_whatsapp text,
  instansi text,
  jenis_kamar text,
  status_pembayaran text DEFAULT 'pending' CHECK (status_pembayaran IN ('pending', 'lunas', 'batal')),
  created_at timestamptz DEFAULT now()
);

-- 4. Tabel cs_whatsapp
CREATE TABLE IF NOT EXISTS cs_whatsapp (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nama text NOT NULL,
  nomor text NOT NULL,
  status text DEFAULT 'aktif' CHECK (status IN ('aktif', 'nonaktif')),
  created_at timestamptz DEFAULT now()
);

-- 5. Tabel konten_halaman
CREATE TABLE IF NOT EXISTS konten_halaman (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  halaman text NOT NULL,
  key text NOT NULL,
  value text,
  tipe text DEFAULT 'text',
  created_at timestamptz DEFAULT now(),
  UNIQUE(halaman, key)
);

-- ============================================================
-- Enable Row Level Security
-- ============================================================
ALTER TABLE pelatihan ENABLE ROW LEVEL SECURITY;
ALTER TABLE artikel ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrasi_pelatihan ENABLE ROW LEVEL SECURITY;
ALTER TABLE cs_whatsapp ENABLE ROW LEVEL SECURITY;
ALTER TABLE konten_halaman ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- RLS Policies
-- ============================================================

-- Public bisa baca pelatihan, cs_whatsapp, konten_halaman
CREATE POLICY "public_read_pelatihan" ON pelatihan FOR SELECT USING (true);
CREATE POLICY "public_read_cs" ON cs_whatsapp FOR SELECT USING (true);
CREATE POLICY "public_read_konten" ON konten_halaman FOR SELECT USING (true);

-- Public bisa submit artikel dan registrasi (form publik)
CREATE POLICY "public_insert_artikel" ON artikel FOR INSERT WITH CHECK (true);
CREATE POLICY "public_insert_registrasi" ON registrasi_pelatihan FOR INSERT WITH CHECK (true);

-- Authenticated (admin) bisa semua operasi
CREATE POLICY "admin_all_pelatihan" ON pelatihan FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_artikel" ON artikel FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_registrasi" ON registrasi_pelatihan FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_cs" ON cs_whatsapp FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_konten" ON konten_halaman FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================
-- Storage Buckets (jalankan di SQL Editor juga)
-- ============================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('artikel-foto', 'artikel-foto', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('artikel-word', 'artikel-word', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies untuk artikel-foto (public upload & read)
CREATE POLICY "public_upload_foto" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'artikel-foto');

CREATE POLICY "public_read_foto" ON storage.objects
  FOR SELECT USING (bucket_id = 'artikel-foto');

-- Storage policies untuk artikel-word (upload publik, read hanya authenticated)
CREATE POLICY "public_upload_word" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'artikel-word');

CREATE POLICY "admin_read_word" ON storage.objects
  FOR SELECT USING (bucket_id = 'artikel-word' AND auth.role() = 'authenticated');
