# Cloudflare Migration Quick Start
## 30-Minute Overview for Busy People

**Full guide:** See `CLOUDFLARE-MIGRATION-GUIDE.md`

---

## 60-Second TL;DR

1. **Create Cloudflare account** (free)
2. **Add 3 domains** to Cloudflare
3. **Update nameservers** at registrar (pointing to Cloudflare)
4. **Wait 24 hours** for DNS propagation
5. **Deploy Next.js to Cloudflare Pages** via GitHub
6. **Upload images to R2** bucket
7. **Set up media domain** (media.thedoghouseps.com, etc.)
8. **Enable caching & SSL** (defaults are good)
9. **Test everything** (forms, email, images)
10. **Done** ✓ (no more Vercel)

**Total cost:** $0 (free tier is sufficient)
**Total time:** 2-3 days (mostly waiting for DNS)

---

## The Five Simple Steps

### Step 1: Cloudflare Account Setup (5 minutes)

```
1. Go to https://www.cloudflare.com
2. Sign up with your email
3. Choose FREE plan
4. Add domain: thedoghouseps.com
5. Repeat for dlpr.org and mypetcredentials.com
```

**Result:** Three domains in Cloudflare, nameservers assigned to you.

### Step 2: Update Nameservers (3 minutes per domain)

```
At your domain registrar (GoDaddy, Namecheap, 1&1, etc.):

1. Log in
2. Find "Nameservers" or "DNS" settings
3. Copy Cloudflare's two nameservers (example):
   - neal.ns.cloudflare.com
   - sara.ns.cloudflare.com
4. Replace old nameservers with these
5. Save
6. Repeat for other domains
```

**Result:** DNS now routes through Cloudflare

**Wait:** 5-30 minutes (up to 24 hours) for propagation

### Step 3: Deploy to Cloudflare Pages (10 minutes)

```
In Cloudflare Dashboard:

1. Go to Workers & Pages > Pages
2. Click "Create application"
3. Choose "Import an existing Git repository"
4. Select your GitHub repo (tdhps-website)
5. Framework: Next.js
6. Build command: npm run build
7. Build output: out/ (for static) or .vercel/output/static (for dynamic)
8. Click "Save and Deploy"
9. Wait for deployment (2-5 minutes)
10. You get a URL like: tdhps.pages.dev
11. Go to Settings > Domains > Add custom domain: thedoghouseps.com
```

**Result:** Your site is live on Cloudflare!

**Repeat for:** dlpr.org and mypetcredentials.com

### Step 4: Set Up Media with R2 (10 minutes per site)

```
In Cloudflare Dashboard:

1. Go to R2 > Create bucket
2. Name: thedoghouseps-media
3. Scroll to "Public access" > Allow public access
4. Go to DNS > Add Record:
   - Type: CNAME
   - Name: media
   - Target: <bucket-id>.r2.cloudflarestorage.com
   - Proxy: Orange cloud (on)
5. In R2 > Settings > Custom domain > Connect domain: media.thedoghouseps.com
6. Verify DNS record added
7. Upload images to R2 via dashboard
8. Images accessible at: https://media.thedoghouseps.com/photo.jpg
```

**Result:** Media served from Cloudflare edge (fast, no charges)

**Repeat for:** dlpr-media, mypetcredentials-media

### Step 5: Verify & Test (10 minutes)

```
1. Visit https://thedoghouseps.com
2. Check green HTTPS lock
3. Load all pages
4. Test contact form (should still send emails)
5. Check images load from media.thedoghouseps.com
6. Test on mobile
7. If anything breaks → see troubleshooting below
```

**Result:** Everything works!

---

## Architecture at a Glance

```
Internet User
    ↓
Cloudflare DNS (Fast, secure)
    ↓
    ├─→ Website traffic → Cloudflare Pages (Your Next.js app)
    │
    ├─→ Image requests → R2 Bucket (media.thedoghouseps.com)
    │
    └─→ Email (MX records) → Your email provider (Gmail, Office 365, etc.)

Benefits:
- Unified DNS provider (Cloudflare)
- Website on Cloudflare Pages (no Vercel)
- Images served from edge (fast + no egress charges)
- Email still works (separate from web)
```

---

## Quick Reference: Menu Paths

**SSL/TLS Settings:**
`Dashboard → SSL/TLS → Overview → (select "Full (Strict)")`

**DNS Records:**
`Dashboard → DNS → Records → (Add A, CNAME, MX, TXT)`

**Cache Rules:**
`Dashboard → Caching → Cache Rules → (Create rule)`

**R2 Buckets:**
`Dashboard → R2 → (Create bucket, upload files)`

**Custom Domains for R2:**
`Dashboard → R2 → Bucket → Settings → Custom domain → Connect domain`

**Cloudflare Pages:**
`Dashboard → Workers & Pages → Pages → (Connect GitHub, deploy)`

---

## Common Issues & Fixes

### Site Not Loading
```
1. Check: https://dnschecker.org — is DNS pointing to Cloudflare?
   - Should show Cloudflare nameservers globally
   - If not: Wait or check registrar nameserver update
2. Check browser cache: Ctrl+Shift+Delete > Clear cache
3. Check Cloudflare: Go to Workers & Pages > Your project >
   Is deployment "Successful"? If not, rebuild.
```

### Email Not Sending
```
1. Check DNS: Dashboard → DNS → Records
   - MX record exists? (should point to email provider)
   - MX record has gray cloud? (not orange—must be DNS only)
2. Check email provider setup (Gmail, Office 365, etc.)
   - Is domain verified?
3. Add SPF/DKIM records from email provider
```

### Images Not Loading
```
1. Check: Can you visit media.thedoghouseps.com/filename.jpg directly?
   - If yes: Problem is in your site code (URL typo?)
   - If no: R2 bucket not set up correctly
2. Check R2: R2 > Bucket > Browse
   - File exists in bucket?
   - Public access enabled?
3. Check custom domain: R2 > Settings > Custom domain
   - Domain connected?
```

### HTTPS Warning / Red Lock
```
1. Wait 15 minutes (SSL cert is being issued)
2. Hard refresh: Ctrl+Shift+R
3. If still broken:
   - Go to SSL/TLS > Overview
   - Change to "Full" (not "Full Strict")
   - Wait 5 minutes
   - Change back to "Full (Strict)"
```

---

## Environment Variables (if your Next.js needs them)

When setting up Cloudflare Pages:

```
In build settings, add any env vars your app needs:

NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
SECRET_KEY=your-secret-here
```

Variables starting with `NEXT_PUBLIC_` are visible in browser (public data).
Others are server-side only (secrets).

---

## Pre-Migration Checklist

- [ ] Back up DNS records from old registrar
- [ ] Test current site works
- [ ] Download images from Vercel/current host
- [ ] Send test email to verify email works
- [ ] Have GitHub repo ready with Next.js code
- [ ] Know your email provider (Gmail, Office 365, etc.)

## Migration Day Checklist

- [ ] Create Cloudflare account
- [ ] Add domains to Cloudflare
- [ ] Update nameservers at registrar
- [ ] Wait for DNS propagation (5-30 min)
- [ ] Deploy to Cloudflare Pages
- [ ] Test website loads
- [ ] Create R2 buckets
- [ ] Upload images
- [ ] Set up custom domains for R2
- [ ] Test images load
- [ ] Send test email
- [ ] Test forms on site

## Post-Migration Checklist

- [ ] Verify all pages work
- [ ] Verify SSL/TLS (green lock)
- [ ] Verify email still sends
- [ ] Verify images load from R2
- [ ] Delete old hosting (if not needed)
- [ ] Monitor for 24 hours

---

## Pricing (This Should Be Zero)

Cloudflare Free Plan:
- Unlimited domains: FREE
- SSL/TLS: FREE
- 10 GB R2 storage: FREE
- 10M R2 reads/month: FREE
- CDN/Caching: FREE
- Basic WAF: FREE

**Total cost for 3 sites:** $0

Only upgrade to Pro ($20/month) if you need:
- More than 10 Cache Rules
- Advanced bot protection
- Advanced analytics

---

## Need Help?

**Official resources:**
- Cloudflare Docs: https://developers.cloudflare.com
- Cloudflare Community: https://community.cloudflare.com
- Full Guide: See `CLOUDFLARE-MIGRATION-GUIDE.md`

**Common issues covered in full guide:**
- DNS not propagating
- SSL certificate errors
- Email delivery issues
- Image loading problems
- Performance problems

---

## One More Time: The Absolute Minimum Steps

```
1. cloudflare.com → Sign up (FREE)
2. Add domains (3 domains)
3. Copy nameservers
4. At registrar: Replace nameservers
5. Wait 24 hours
6. Cloudflare → Connect GitHub → Deploy
7. Cloudflare R2 → Create buckets → Upload images
8. Test everything
9. Done!
```

**You're now hosting with Cloudflare for free. Congrats!**

---

**Created:** March 2026
**For:** thedoghouseps.com, dlpr.org, mypetcredentials.com
**Cost:** $0
**Complexity:** Easy (mostly clicking in dashboards)
**Time:** 2-3 days (due to DNS propagation)
