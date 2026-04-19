# 🚀 Deployment Guide - Sistem Jurnal AKAPRO

## Pre-Deployment Checklist

### 1. Database Setup

#### Option A: Fresh Install (Database Baru)
```sql
-- Jalankan di Supabase SQL Editor
-- File: supabase_migration.sql

✅ Buat semua tabel
✅ Setup RLS policies
✅ Buat storage buckets
✅ Verifikasi struktur
```

#### Option B: Update Existing (Database Sudah Ada)
```sql
-- Jalankan di Supabase SQL Editor
-- File: supabase_artikel_update.sql

✅ Tambah kolom baru
✅ Update constraints
✅ Migrasi data lama
✅ Buat indexes
✅ Update policies
```

### 2. Storage Buckets Verification

Pastikan 2 buckets ini ada di Supabase Storage:

```
📁 artikel-foto
   - Public: ✅ YES
   - Allowed MIME: image/*
   - Max file size: 5MB
   - Used for: Foto penulis

📁 artikel-word
   - Public: ❌ NO (Private)
   - Allowed MIME: .doc, .docx
   - Max file size: 10MB
   - Used for: Upload artikel Word
```

**Cara Buat Bucket:**
1. Buka Supabase Dashboard
2. Storage → Create bucket
3. Set nama & public status
4. Apply policies dari migration SQL

### 3. Environment Variables

File: `.env`
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**Cara Dapat Keys:**
1. Supabase Dashboard
2. Settings → API
3. Copy URL & anon key

### 4. Admin User Setup

**Create Admin Account:**
1. Supabase Dashboard → Authentication → Users
2. Add user manually:
   - Email: `mukhsin9@gmail.com`
   - Password: [set password]
   - Confirm email: ✅
3. Atau gunakan signup flow

**Hardcoded Admin:**
```javascript
// src/pages/Admin.jsx
const SUPERADMIN_EMAIL = 'mukhsin9@gmail.com';
```

**Untuk Multiple Admins:**
Edit file Admin.jsx, ganti dengan array:
```javascript
const ADMIN_EMAILS = [
  'mukhsin9@gmail.com',
  'admin2@example.com',
  'admin3@example.com'
];
```

## Deployment Steps

### Step 1: Build Application

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Output: dist/ folder
```

### Step 2: Deploy to Vercel

**Via Vercel CLI:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Via Vercel Dashboard:**
1. Import Git repository
2. Set environment variables
3. Deploy

**Environment Variables di Vercel:**
```
VITE_SUPABASE_URL = https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY = your_anon_key_here
```

### Step 3: Verify Deployment

**Test Checklist:**
- [ ] Homepage loads
- [ ] /artikel page loads
- [ ] Tab "Daftar Artikel" works
- [ ] Tab "Submit Artikel" works
- [ ] Search & filter works
- [ ] Submit form works
- [ ] /admin login works
- [ ] Admin can review articles
- [ ] Approve workflow works
- [ ] Reject workflow works
- [ ] PDF download works
- [ ] Views counter increments
- [ ] Downloads counter increments

## Post-Deployment Configuration

### 1. Test Submit Flow

**As Public User:**
```
1. Go to /artikel
2. Click "Submit Artikel"
3. Fill form completely
4. Upload foto & artikel
5. Submit
6. Check success message
```

**Verify in Database:**
```sql
SELECT * FROM artikel 
WHERE status = 'pending' 
ORDER BY created_at DESC 
LIMIT 5;
```

### 2. Test Admin Flow

**As Admin:**
```
1. Login to /admin
2. Go to "Artikel" tab
3. Filter "Pending"
4. Click "Review Detail"
5. Read artikel
6. Add reviewer notes
7. Click "Approve & Publish"
8. Verify artikel appears in public list
```

**Verify in Database:**
```sql
SELECT * FROM artikel 
WHERE status = 'approved' 
ORDER BY tanggal_approved DESC 
LIMIT 5;
```

### 3. Test Public View

**As Public User:**
```
1. Go to /artikel
2. See artikel in list
3. Click artikel card
4. Modal opens with full content
5. Check views counter
6. Click "Download PDF"
7. Check downloads counter
```

**Verify Counters:**
```sql
SELECT id, judul, views, downloads 
FROM artikel 
WHERE status = 'approved'
ORDER BY views DESC;
```

## Monitoring & Maintenance

### Daily Checks

**Morning Routine:**
```
✅ Check pending articles count
✅ Review new submissions
✅ Respond to author emails
✅ Monitor error logs
```

**Weekly Checks:**
```
✅ Backup database
✅ Check storage usage
✅ Review analytics
✅ Update documentation
```

**Monthly Checks:**
```
✅ Performance audit
✅ Security review
✅ Update dependencies
✅ Clean up old data
```

### Database Backup

**Manual Backup:**
```sql
-- Export artikel table
COPY artikel TO '/tmp/artikel_backup.csv' CSV HEADER;

-- Or use Supabase Dashboard
-- Database → Backups → Create backup
```

**Automated Backup:**
- Setup Supabase automatic backups
- Schedule: Daily at 2 AM
- Retention: 7 days

### Storage Management

**Check Usage:**
```sql
-- Count files
SELECT 
  bucket_id,
  COUNT(*) as file_count,
  SUM(metadata->>'size')::bigint as total_size
FROM storage.objects
GROUP BY bucket_id;
```

**Clean Old Files:**
```sql
-- Delete rejected articles older than 6 months
DELETE FROM artikel 
WHERE status = 'rejected' 
AND created_at < NOW() - INTERVAL '6 months';

-- Clean orphaned files
-- (manual process via Supabase Dashboard)
```

### Performance Monitoring

**Key Metrics:**
- Page load time: < 2s
- API response time: < 500ms
- Database query time: < 100ms
- Storage usage: < 80% quota

**Tools:**
- Vercel Analytics
- Supabase Dashboard
- Google Analytics (optional)

## Troubleshooting

### Issue: Artikel tidak muncul setelah approve

**Check:**
```sql
-- Verify status
SELECT id, judul, status FROM artikel WHERE id = 'xxx';

-- Should be 'approved' not 'published'
UPDATE artikel SET status = 'approved' WHERE id = 'xxx';
```

**Check RLS:**
```sql
-- Verify policy
SELECT * FROM pg_policies WHERE tablename = 'artikel';

-- Should have: status = 'approved'
```

### Issue: Upload foto gagal

**Check Bucket:**
- Bucket 'artikel-foto' exists
- Public access enabled
- MIME type allowed: image/*
- Size limit: 5MB

**Check Policy:**
```sql
-- Storage policy for upload
SELECT * FROM storage.policies 
WHERE bucket_id = 'artikel-foto';
```

### Issue: Admin tidak bisa login

**Check User:**
```sql
-- Verify user exists
SELECT email, email_confirmed_at 
FROM auth.users 
WHERE email = 'mukhsin9@gmail.com';
```

**Check Code:**
```javascript
// src/pages/Admin.jsx
const SUPERADMIN_EMAIL = 'mukhsin9@gmail.com';
// Must match exactly
```

### Issue: Views/Downloads tidak bertambah

**Check Columns:**
```sql
-- Verify columns exist
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'artikel' 
AND column_name IN ('views', 'downloads');
```

**Check Update:**
```javascript
// Should increment on action
await supabase
  .from('artikel')
  .update({ views: (article.views || 0) + 1 })
  .eq('id', article.id);
```

## Rollback Plan

### If Deployment Fails

**Option 1: Revert Code**
```bash
# Revert to previous commit
git revert HEAD
git push

# Redeploy
vercel --prod
```

**Option 2: Revert Database**
```sql
-- Restore from backup
-- Use Supabase Dashboard → Backups → Restore
```

**Option 3: Disable Feature**
```javascript
// Temporarily hide artikel page
// Add to App.jsx
const ARTIKEL_ENABLED = false;

{ARTIKEL_ENABLED && <Route path="/artikel" element={<Artikel />} />}
```

## Security Checklist

### Before Going Live

- [ ] RLS enabled on all tables
- [ ] Storage policies configured
- [ ] Admin email hardcoded/secured
- [ ] Environment variables set
- [ ] HTTPS enabled (Vercel default)
- [ ] CORS configured
- [ ] Rate limiting (Supabase default)
- [ ] Input validation on forms
- [ ] File upload size limits
- [ ] SQL injection prevention (Supabase default)

### Regular Security Audits

**Monthly:**
- Review access logs
- Check failed login attempts
- Update dependencies
- Scan for vulnerabilities

**Quarterly:**
- Full security audit
- Penetration testing
- Update security policies
- Review user permissions

## Support & Resources

### Documentation
- 📚 JURNAL_SYSTEM_GUIDE.md - Complete system guide
- 🚀 ADMIN_QUICK_START.md - Admin quick start
- ✍️ PANDUAN_PENULIS.md - Author guide
- 📝 CHANGELOG.md - Version history

### External Resources
- Supabase Docs: https://supabase.com/docs
- Vercel Docs: https://vercel.com/docs
- React Docs: https://react.dev
- Framer Motion: https://www.framer.com/motion

### Contact
- Technical Issues: [developer email]
- Content Issues: [editor email]
- General Support: akademiprofesional@gmail.com

---

## Quick Reference

### Important URLs
```
Production: https://your-domain.vercel.app
Admin Panel: https://your-domain.vercel.app/admin
Artikel Page: https://your-domain.vercel.app/artikel
Supabase: https://supabase.com/dashboard/project/[project-id]
```

### Important Files
```
Database: supabase_migration.sql, supabase_artikel_update.sql
Frontend: src/pages/Artikel.jsx, src/pages/Admin.jsx
Config: .env, vercel.json
Docs: JURNAL_SYSTEM_GUIDE.md, ADMIN_QUICK_START.md
```

### Important Commands
```bash
# Development
npm run dev

# Build
npm run build

# Deploy
vercel --prod

# Database
# Run SQL in Supabase Dashboard
```

---

**Deployment Status:** ✅ Ready  
**Last Updated:** 2026-04-19  
**Version:** 1.0.0
