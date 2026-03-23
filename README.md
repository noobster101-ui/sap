# Murty SAP Training - Admin Panel

## 🎯 **Update Data Without Code Push**

**Live Admin:** http://localhost:3000/admin

## Tabs

1. **Reviews** - Google testimonials (status toggle)
2. **Careers** - Job openings (active toggle)
3. **Courses** - SAP courses (active toggle)

## Features

- ✅ **Status Toggle** - Hide/Show on frontend, stays in admin
- ✅ **Image Upload** - /api/upload → public/uploads
- ✅ **CRUD** - Add/Edit/Delete
- ✅ **Responsive** Tailwind dashboard (no main header/footer)

## Toggle Logic

```
Admin table: ALL data (enabled + disabled)
Frontend: enabled only
Disable → hides frontend, stays admin ("Disabled")
Enable → shows everywhere
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel login
vercel

# Add DB
vercel env add POSTGRES_URL production
# Paste from Vercel Storage > Postgres > Create
```

## Local Test

```bash
npm run dev
```

## Production

- Data **persists** across deploys (Postgres)
- No git push needed!

**✅ Ready!**
