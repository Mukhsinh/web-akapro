-- ============================================================
-- AKAPRO - Update Tabel Artikel untuk Sistem Jurnal
-- Jalankan di: Supabase SQL Editor
-- ============================================================

-- Tambah kolom baru ke tabel artikel yang sudah ada
ALTER TABLE artikel 
ADD COLUMN IF NOT EXISTS tanggal_approved date,
ADD COLUMN IF NOT EXISTS views integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS downloads integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS keywords text,
ADD COLUMN IF NOT EXISTS doi text,
ADD COLUMN IF NOT EXISTS reviewer_notes text,
ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

-- Update constraint status untuk menambah 'review' dan 'approved'
ALTER TABLE artikel DROP CONSTRAINT IF EXISTS artikel_status_check;
ALTER TABLE artikel ADD CONSTRAINT artikel_status_check 
  CHECK (status IN ('pending', 'review', 'approved', 'rejected'));

-- Update semua artikel dengan status 'published' menjadi 'approved'
UPDATE artikel SET status = 'approved' WHERE status = 'published';

-- Set tanggal_approved untuk artikel yang sudah approved
UPDATE artikel 
SET tanggal_approved = tanggal_submit 
WHERE status = 'approved' AND tanggal_approved IS NULL;

-- Buat index untuk performa
CREATE INDEX IF NOT EXISTS idx_artikel_status ON artikel(status);
CREATE INDEX IF NOT EXISTS idx_artikel_tanggal_approved ON artikel(tanggal_approved DESC);
CREATE INDEX IF NOT EXISTS idx_artikel_views ON artikel(views DESC);
CREATE INDEX IF NOT EXISTS idx_artikel_kategori ON artikel(kategori);

-- Update RLS policies untuk status baru
DROP POLICY IF EXISTS "public_read_artikel" ON artikel;
CREATE POLICY "public_read_artikel" ON artikel 
  FOR SELECT USING (status = 'approved');

-- Trigger untuk auto-update updated_at
CREATE OR REPLACE FUNCTION update_artikel_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS artikel_updated_at_trigger ON artikel;
CREATE TRIGGER artikel_updated_at_trigger
  BEFORE UPDATE ON artikel
  FOR EACH ROW
  EXECUTE FUNCTION update_artikel_updated_at();

-- Verifikasi hasil
SELECT 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'artikel'
ORDER BY ordinal_position;

-- Check data
SELECT 
  status, 
  COUNT(*) as total,
  SUM(views) as total_views,
  SUM(downloads) as total_downloads
FROM artikel 
GROUP BY status;
