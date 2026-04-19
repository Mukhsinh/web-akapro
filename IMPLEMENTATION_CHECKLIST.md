# ✅ Implementation Checklist - Sistem Jurnal AKAPRO

## Pre-Implementation

### 1. Backup Current System
- [ ] Backup database Supabase
- [ ] Backup current code (git commit)
- [ ] Export current artikel data (if any)
- [ ] Document current state

### 2. Review Documentation
- [ ] Read `JURNAL_SUMMARY.md` (overview)
- [ ] Read `JURNAL_SYSTEM_GUIDE.md` (technical details)
- [ ] Read `ADMIN_QUICK_START.md` (admin guide)
- [ ] Read `DEPLOYMENT_JURNAL.md` (deployment steps)

## Database Setup

### 3. Choose Migration Path

**Option A: Fresh Database** (Recommended for new projects)
- [ ] Open Supabase SQL Editor
- [ ] Copy content from `supabase_migration.sql`
- [ ] Run SQL script
- [ ] Verify all tables created
- [ ] Check RLS policies enabled

**Option B: Update Existing Database**
- [ ] Open Supabase SQL Editor
- [ ] Copy content from `supabase_artikel_update.sql`
- [ ] Run SQL script
- [ ] Verify new columns added
- [ ] Check data migrated correctly
- [ ] Verify indexes created

### 4. Verify Database Structure
```sql
-- Run this query to verify
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'artikel'
ORDER BY ordinal_position;
```

Expected columns:
- [ ] id (uuid)
- [ ] judul (text)
- [ ] penulis (text)
- [ ] email (text)
- [ ] instansi (text)
- [ ] no_whatsapp (text)
- [ ] kategori (text)
- [ ] abstrak (text)
- [ ] isi_artikel (text)
- [ ] foto_penulis_url (text)
- [ ] word_file_url (text)
- [ ] mode_input (text)
- [ ] status (text)
- [ ] tanggal_submit (date)
- [ ] tanggal_approved (date)
- [ ] views (integer)
- [ ] downloads (integer)
- [ ] keywords (text)
- [ ] doi (text)
- [ ] reviewer_notes (text)
- [ ] created_at (timestamptz)
- [ ] updated_at (timestamptz)

## Storage Setup

### 5. Create Storage Buckets

**Bucket 1: artikel-foto**
- [ ] Go to Supabase Storage
- [ ] Create new bucket: `artikel-foto`
- [ ] Set public: ✅ YES
- [ ] Set allowed MIME types: `image/*`
- [ ] Set max file size: 5MB
- [ ] Apply upload policy (from migration SQL)
- [ ] Apply read policy (from migration SQL)

**Bucket 2: artikel-word**
- [ ] Create new bucket: `artikel-word`
- [ ] Set public: ❌ NO (Private)
- [ ] Set allowed MIME types: `.doc, .docx`
- [ ] Set max file size: 10MB
- [ ] Apply upload policy (from migration SQL)
- [ ] Apply read policy (authenticated only)

### 6. Test Storage Upload
- [ ] Try upload image to artikel-foto
- [ ] Verify public URL works
- [ ] Try upload .docx to artikel-word
- [ ] Verify authenticated access only

## Admin Setup

### 7. Create Admin User
- [ ] Go to Supabase Authentication
- [ ] Add new user manually OR
- [ ] Use signup flow
- [ ] Email: `mukhsin9@gmail.com` (or your admin email)
- [ ] Set password
- [ ] Confirm email
- [ ] Test login

### 8. Update Admin Email (if needed)
If using different admin email:
- [ ] Open `src/pages/Admin.jsx`
- [ ] Find line: `const SUPERADMIN_EMAIL = 'mukhsin9@gmail.com';`
- [ ] Change to your admin email
- [ ] Save file

## Code Deployment

### 9. Update Environment Variables
- [ ] Check `.env` file exists
- [ ] Verify `VITE_SUPABASE_URL` is correct
- [ ] Verify `VITE_SUPABASE_ANON_KEY` is correct
- [ ] Add to Vercel environment variables (if deploying)

### 10. Install Dependencies
```bash
npm install
```
- [ ] No errors during install
- [ ] All packages installed successfully

### 11. Test Locally
```bash
npm run dev
```
- [ ] App starts without errors
- [ ] Navigate to `/artikel`
- [ ] Check both tabs load
- [ ] Navigate to `/admin`
- [ ] Check login works

### 12. Build for Production
```bash
npm run build
```
- [ ] Build completes successfully
- [ ] No build errors
- [ ] `dist/` folder created

## Testing Phase

### 13. Test Public Submit Flow
- [ ] Go to `/artikel`
- [ ] Click "Submit Artikel" tab
- [ ] Fill all required fields:
  - [ ] Nama lengkap
  - [ ] Email
  - [ ] Instansi
  - [ ] No. WhatsApp
  - [ ] Judul artikel
  - [ ] Kategori
  - [ ] Abstrak (150-250 kata)
  - [ ] Keywords (minimal 3)
  - [ ] Isi artikel (ketik atau upload)
  - [ ] Foto penulis
- [ ] Click "Submit Artikel"
- [ ] See success message
- [ ] Check database for new entry

### 14. Test Admin Review Flow
- [ ] Login to `/admin`
- [ ] Go to "Artikel" tab
- [ ] See pending article
- [ ] Click "Review Detail"
- [ ] Modal opens with full info
- [ ] Read article content
- [ ] Add reviewer notes
- [ ] Click "Set Review" (status → review)
- [ ] Click "Approve & Publish"
- [ ] Verify status → approved
- [ ] Check tanggal_approved set

### 15. Test Public View Flow
- [ ] Go to `/artikel` (logged out)
- [ ] See approved article in list
- [ ] Click article card
- [ ] Modal opens with full content
- [ ] Check views counter increments
- [ ] Click "Download PDF"
- [ ] PDF downloads successfully
- [ ] Check downloads counter increments

### 16. Test Search & Filter
- [ ] Use search bar
- [ ] Search by judul
- [ ] Search by penulis
- [ ] Search by keywords
- [ ] Click kategori filters
- [ ] Verify results update
- [ ] Clear filters

### 17. Test Reject Flow
- [ ] Submit another test article
- [ ] Login as admin
- [ ] Review article
- [ ] Add rejection notes
- [ ] Click "Reject"
- [ ] Verify status → rejected
- [ ] Verify notes saved
- [ ] Check article NOT in public list

### 18. Test Edge Cases
- [ ] Submit without foto → Should fail
- [ ] Submit without keywords → Should fail
- [ ] Submit with short abstrak → Should work but may be rejected
- [ ] Upload large file (>10MB) → Should fail
- [ ] Upload wrong file type → Should fail
- [ ] Try access admin without login → Should redirect
- [ ] Try access admin with wrong email → Should deny

## Production Deployment

### 19. Deploy to Vercel
- [ ] Push code to Git repository
- [ ] Connect to Vercel
- [ ] Set environment variables in Vercel
- [ ] Deploy
- [ ] Wait for deployment to complete
- [ ] Check deployment URL

### 20. Post-Deployment Verification
- [ ] Visit production URL
- [ ] Test submit flow on production
- [ ] Test admin flow on production
- [ ] Test public view on production
- [ ] Check all images load
- [ ] Check PDF download works
- [ ] Verify database updates

## Documentation & Training

### 21. Prepare Documentation
- [ ] Share `ADMIN_QUICK_START.md` with admin team
- [ ] Share `PANDUAN_PENULIS.md` with potential authors
- [ ] Create internal wiki/knowledge base
- [ ] Document any custom configurations

### 22. Train Admin Team
- [ ] Walk through admin panel
- [ ] Demonstrate review process
- [ ] Show how to approve/reject
- [ ] Explain reviewer notes
- [ ] Show DOI management
- [ ] Practice with test articles

### 23. Announce to Users
- [ ] Prepare announcement email
- [ ] Update website with new feature
- [ ] Post on social media
- [ ] Send to mailing list
- [ ] Update navigation/menu

## Monitoring & Maintenance

### 24. Setup Monitoring
- [ ] Enable Vercel Analytics
- [ ] Setup error tracking (Sentry, etc.)
- [ ] Monitor Supabase usage
- [ ] Setup uptime monitoring
- [ ] Create admin dashboard bookmark

### 25. Schedule Regular Tasks
- [ ] Daily: Check pending articles
- [ ] Weekly: Backup database
- [ ] Monthly: Review analytics
- [ ] Quarterly: Security audit
- [ ] Yearly: Major updates

### 26. Create Support Process
- [ ] Define support email
- [ ] Create FAQ document
- [ ] Setup WhatsApp support
- [ ] Train support team
- [ ] Document common issues

## Final Checks

### 27. Security Audit
- [ ] RLS enabled on all tables
- [ ] Storage policies correct
- [ ] Admin access restricted
- [ ] Environment variables secure
- [ ] No sensitive data in code
- [ ] HTTPS enabled
- [ ] CORS configured

### 28. Performance Check
- [ ] Page load time < 2s
- [ ] Images optimized
- [ ] Database queries optimized
- [ ] Indexes created
- [ ] Caching enabled
- [ ] CDN configured (if needed)

### 29. Accessibility Check
- [ ] Forms have labels
- [ ] Images have alt text
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Focus indicators visible

### 30. Final Sign-off
- [ ] All tests passed
- [ ] Documentation complete
- [ ] Team trained
- [ ] Monitoring active
- [ ] Backup strategy in place
- [ ] Support process ready
- [ ] Go-live approved

## Post-Launch

### 31. First Week Monitoring
- [ ] Monitor error logs daily
- [ ] Check user feedback
- [ ] Track submission rate
- [ ] Monitor performance
- [ ] Quick bug fixes if needed

### 32. First Month Review
- [ ] Analyze usage statistics
- [ ] Collect user feedback
- [ ] Identify improvements
- [ ] Plan next iteration
- [ ] Update documentation

### 33. Continuous Improvement
- [ ] Regular feature updates
- [ ] Performance optimization
- [ ] Security patches
- [ ] User experience improvements
- [ ] Documentation updates

---

## Quick Reference

### Key URLs
- Production: `https://your-domain.vercel.app`
- Admin: `https://your-domain.vercel.app/admin`
- Artikel: `https://your-domain.vercel.app/artikel`
- Supabase: `https://supabase.com/dashboard`

### Key Files
- Frontend: `src/pages/Artikel.jsx`, `src/pages/Admin.jsx`
- Database: `supabase_migration.sql`, `supabase_artikel_update.sql`
- Docs: `JURNAL_SYSTEM_GUIDE.md`, `ADMIN_QUICK_START.md`

### Support Contacts
- Technical: [developer email]
- Content: [editor email]
- General: akademiprofesional@gmail.com

---

## Status Tracking

**Implementation Started:** ___________  
**Database Setup:** ___________  
**Testing Complete:** ___________  
**Deployed to Production:** ___________  
**Go-Live Date:** ___________

**Implemented By:** ___________  
**Approved By:** ___________

---

**Print this checklist and check off items as you complete them!**

✅ = Completed  
⏳ = In Progress  
❌ = Blocked  
⏭️ = Skipped
