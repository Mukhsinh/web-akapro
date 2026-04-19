# 🚀 Quick Reference - Sistem Jurnal AKAPRO

## 📋 Cheat Sheet

### Database Status Values
```
pending  → 🟠 Menunggu review
review   → 🔵 Sedang direview  
approved → 🟢 Disetujui & dipublikasikan
rejected → 🔴 Ditolak
```

### Kategori Artikel
```
1. Psikologi Klinis
2. Psikologi Industri
3. Psikologi Pendidikan
4. Psikometri
5. Konseling
6. Psikologi Sosial
7. Lainnya
```

### Storage Buckets
```
artikel-foto  → Public  → Max 5MB  → image/*
artikel-word  → Private → Max 10MB → .doc, .docx
```

### Admin Email
```javascript
const SUPERADMIN_EMAIL = 'mukhsin9@gmail.com';
```

## 🔧 Common SQL Queries

### Check Artikel by Status
```sql
SELECT id, judul, penulis, status, tanggal_submit
FROM artikel 
WHERE status = 'pending'
ORDER BY created_at DESC;
```

### Get Statistics
```sql
SELECT 
  status,
  COUNT(*) as total,
  SUM(views) as total_views,
  SUM(downloads) as total_downloads
FROM artikel 
GROUP BY status;
```

### Find Artikel by Keyword
```sql
SELECT id, judul, penulis, keywords
FROM artikel 
WHERE keywords ILIKE '%psikologi%'
AND status = 'approved';
```

### Top Viewed Articles
```sql
SELECT judul, penulis, views, downloads
FROM artikel 
WHERE status = 'approved'
ORDER BY views DESC 
LIMIT 10;
```

### Update Status Manually
```sql
UPDATE artikel 
SET status = 'approved',
    tanggal_approved = CURRENT_DATE
WHERE id = 'your-article-id';
```

### Clean Old Rejected Articles
```sql
DELETE FROM artikel 
WHERE status = 'rejected' 
AND created_at < NOW() - INTERVAL '6 months';
```

## 🎯 Common Tasks

### Submit Artikel (Public)
```
1. /artikel
2. Tab "Submit Artikel"
3. Fill form
4. Upload foto & artikel
5. Submit
```

### Review Artikel (Admin)
```
1. /admin → Login
2. Tab "Artikel"
3. Filter "Pending"
4. Click "Review Detail"
5. Read & evaluate
6. Add notes
7. Approve/Reject
```

### Approve Artikel
```
1. Open review modal
2. (Optional) Input DOI
3. Add positive notes
4. Click "Approve & Publish"
```

### Reject Artikel
```
1. Open review modal
2. Write rejection reason
3. Click "Reject"
4. Author will be notified
```

## 🐛 Troubleshooting

### Artikel tidak muncul setelah approve
```sql
-- Check status
SELECT status FROM artikel WHERE id = 'xxx';

-- Should be 'approved' not 'published'
UPDATE artikel SET status = 'approved' WHERE id = 'xxx';
```

### Upload foto gagal
```
✅ Check bucket 'artikel-foto' exists
✅ Check public access enabled
✅ Check file size < 5MB
✅ Check MIME type is image/*
```

### Views tidak bertambah
```sql
-- Check column exists
SELECT views FROM artikel LIMIT 1;

-- Manual increment
UPDATE artikel 
SET views = views + 1 
WHERE id = 'xxx';
```

### Admin tidak bisa login
```sql
-- Check user exists
SELECT email FROM auth.users 
WHERE email = 'mukhsin9@gmail.com';

-- Check email confirmed
SELECT email_confirmed_at FROM auth.users 
WHERE email = 'mukhsin9@gmail.com';
```

## 📊 Analytics Queries

### Daily Submissions
```sql
SELECT 
  DATE(created_at) as date,
  COUNT(*) as submissions
FROM artikel 
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

### Approval Rate
```sql
SELECT 
  status,
  COUNT(*) as count,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) as percentage
FROM artikel 
GROUP BY status;
```

### Popular Categories
```sql
SELECT 
  kategori,
  COUNT(*) as total,
  SUM(views) as total_views
FROM artikel 
WHERE status = 'approved'
GROUP BY kategori
ORDER BY total_views DESC;
```

### Author Statistics
```sql
SELECT 
  penulis,
  instansi,
  COUNT(*) as total_articles,
  SUM(views) as total_views,
  SUM(downloads) as total_downloads
FROM artikel 
WHERE status = 'approved'
GROUP BY penulis, instansi
ORDER BY total_articles DESC;
```

## 🔐 Security Commands

### Check RLS Status
```sql
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'artikel';
```

### View RLS Policies
```sql
SELECT * FROM pg_policies 
WHERE tablename = 'artikel';
```

### Check Storage Policies
```sql
SELECT * FROM storage.policies 
WHERE bucket_id IN ('artikel-foto', 'artikel-word');
```

## 📁 File Locations

### Frontend
```
src/pages/Artikel.jsx       → Main artikel page
src/pages/Admin.jsx         → Admin panel
src/lib/supabaseClient.js   → Supabase config
```

### Database
```
supabase_migration.sql      → Fresh install
supabase_artikel_update.sql → Update existing
```

### Documentation
```
JURNAL_SYSTEM_GUIDE.md      → Complete guide
ADMIN_QUICK_START.md        → Admin guide
PANDUAN_PENULIS.md          → Author guide
DEPLOYMENT_JURNAL.md        → Deployment guide
IMPLEMENTATION_CHECKLIST.md → Implementation steps
JURNAL_SUMMARY.md           → Quick overview
```

## 🌐 URLs

### Development
```
Local: http://localhost:5173
Artikel: http://localhost:5173/artikel
Admin: http://localhost:5173/admin
```

### Production
```
Site: https://your-domain.vercel.app
Artikel: https://your-domain.vercel.app/artikel
Admin: https://your-domain.vercel.app/admin
```

### Supabase
```
Dashboard: https://supabase.com/dashboard
Project: https://supabase.com/dashboard/project/[project-id]
SQL Editor: https://supabase.com/dashboard/project/[project-id]/sql
Storage: https://supabase.com/dashboard/project/[project-id]/storage
```

## 🔑 Environment Variables

```env
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...
```

## 📞 Support Contacts

```
Technical: [developer email]
Content: [editor email]
General: akademiprofesional@gmail.com
WhatsApp: [see website]
```

## 🎨 Color Codes

```css
--electric-lime: #C6FF00
--midnight-carbon: #080808

Status Colors:
Pending:  #ffa500 (Orange)
Review:   #3b82f6 (Blue)
Approved: #00ff88 (Green)
Rejected: #ff4444 (Red)
```

## 📦 NPM Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
vercel --prod        # Deploy to Vercel
```

## 🔄 Git Commands

```bash
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to remote
git pull             # Pull from remote
```

## 📈 Performance Targets

```
Page Load: < 2s
API Response: < 500ms
Database Query: < 100ms
Storage Usage: < 80% quota
Uptime: > 99.9%
```

## ✅ Daily Admin Checklist

```
Morning:
□ Check pending articles
□ Review new submissions
□ Respond to emails

Afternoon:
□ Process reviews
□ Approve/reject articles
□ Update DOI

Evening:
□ Check statistics
□ Backup important data
□ Plan tomorrow
```

## 🚨 Emergency Contacts

```
Server Down: [hosting support]
Database Issue: [Supabase support]
Code Bug: [developer]
Content Issue: [editor]
```

## 📚 Quick Links

- [Supabase Docs](https://supabase.com/docs)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)
- [Framer Motion](https://www.framer.com/motion)

---

**Keep this file handy for quick reference!**

**Last Updated:** 2026-04-19  
**Version:** 1.0.0
