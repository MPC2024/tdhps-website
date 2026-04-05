# Cloudflare Migration Guides - Complete Package

This directory contains comprehensive guides for migrating your three pet services websites to Cloudflare hosting and R2 media storage.

## Documents in This Package

### 1. CLOUDFLARE-QUICK-START.md (Recommended First Read)
- **Length:** ~400 lines
- **Time to read:** 10-15 minutes
- **Best for:** Getting oriented, understanding the 5-step process
- **Contains:**
  - 60-second TL;DR
  - Five simple implementation steps
  - Quick reference menu paths
  - Common issues and fixes
  - Checklists

**Start here** if you're new to Cloudflare.

### 2. CLOUDFLARE-MIGRATION-GUIDE.md (Complete Reference)
- **Length:** 4500+ lines
- **Time to read:** 45-60 minutes (reference, not linear read)
- **Best for:** Step-by-step implementation, troubleshooting, all details
- **Contains:**
  - Part 1: Account & DNS Setup (detailed)
  - Part 2: Website Hosting Options (Pages vs. Vercel proxy)
  - Part 3: Media Hosting with R2 (complete walkthrough)
  - Part 4: Performance & Security (caching, WAF, SSL/TLS)
  - Part 5: Migration Checklist (day-by-day plan)
  - Appendix: Detailed troubleshooting
  - Resources and links

**Use this** when implementing. Navigate by section.

---

## Quick Navigation by Task

### I want to...

**...understand what Cloudflare is**
→ Read: CLOUDFLARE-QUICK-START.md (Architecture at a Glance)

**...understand hosting options**
→ Read: CLOUDFLARE-MIGRATION-GUIDE.md → Part 2 (Pages vs. Vercel Proxy)

**...set up a Cloudflare account**
→ Read: CLOUDFLARE-QUICK-START.md → Step 1, OR CLOUDFLARE-MIGRATION-GUIDE.md → Section 1.1-1.2

**...update my nameservers**
→ Read: CLOUDFLARE-QUICK-START.md → Step 2, OR CLOUDFLARE-MIGRATION-GUIDE.md → Section 1.3

**...configure DNS records**
→ Read: CLOUDFLARE-MIGRATION-GUIDE.md → Section 1.4

**...deploy to Cloudflare Pages**
→ Read: CLOUDFLARE-QUICK-START.md → Step 3, OR CLOUDFLARE-MIGRATION-GUIDE.md → Part 2

**...set up media hosting with R2**
→ Read: CLOUDFLARE-QUICK-START.md → Step 4, OR CLOUDFLARE-MIGRATION-GUIDE.md → Part 3

**...fix a problem**
→ Read: CLOUDFLARE-QUICK-START.md → Common Issues & Fixes, OR CLOUDFLARE-MIGRATION-GUIDE.md → Appendix A

**...understand caching and performance**
→ Read: CLOUDFLARE-MIGRATION-GUIDE.md → Part 4 (Caching Rules, etc.)

**...plan my migration day**
→ Read: CLOUDFLARE-MIGRATION-GUIDE.md → Part 5 (Day-by-day checklist)

---

## At a Glance: What You're Getting

### Three Websites Affected
1. **thedoghouseps.com** (pet salon)
   - Current: Vercel/Next.js
   - New: Cloudflare Pages
   - Media: R2 bucket at media.thedoghouseps.com

2. **dlpr.org** (pet rescue)
   - Current: Vercel/Next.js
   - New: Cloudflare Pages
   - Media: R2 bucket at media.dlpr.org

3. **mypetcredentials.com** (new platform)
   - Current: Needs hosting
   - New: Cloudflare Pages
   - Media: R2 bucket at media.mypetcredentials.com

### What Happens
- DNS moves to Cloudflare (authoritative nameservers)
- Websites move from Vercel to Cloudflare Pages
- Media (images/videos) moves to Cloudflare R2
- Email delivery remains unchanged (separate MX records)
- SSL/TLS encryption stays (Full Strict mode)

### Cost
**Free tier is sufficient** - covers:
- Unlimited domains (all 3 sites)
- 10 GB R2 storage
- 10M R2 reads/month
- Full SSL/TLS
- Caching, WAF, basic bot protection

**Total cost:** $0/month

### Timeline
1. Create accounts (30 minutes)
2. Add domains (15 minutes)
3. Update nameservers (5 minutes)
4. Wait for propagation (5 minutes to 24 hours)
5. Deploy to Pages (15 minutes)
6. Set up R2 (15 minutes)
7. Verify everything (30 minutes)

**Total hands-on time:** ~2 hours
**Total calendar time:** 2-3 days (due to DNS waiting)

---

## Before You Start

**Make sure you have:**
- [ ] Access to your domain registrar accounts (GoDaddy, Namecheap, 1&1, etc.)
- [ ] GitHub repositories for your three websites
- [ ] List of images/media you want to migrate
- [ ] Email provider details (Gmail, Office 365, etc.) - if applicable
- [ ] A quiet 2-3 hour block for setup and testing
- [ ] Backup of current DNS records (optional but recommended)

**Recommended but optional:**
- Staging environment to test before production
- Team member to review during migration
- Monitoring of site traffic during/after migration

---

## Implementation Path

### Day 1: Setup (1-2 hours hands-on time)
1. Create Cloudflare account (5 min)
2. Add three domains (15 min)
3. Review DNS records (10 min)
4. Update nameservers at registrar (5 min)
5. Set SSL/TLS to Full (Strict) (5 min)
6. Create R2 buckets (10 min)
7. Set up R2 custom domains (15 min)

**Then: Wait for DNS propagation (5 min to 24 hours)**

### Day 2-3: Deployment & Testing (1 hour hands-on time)
1. Deploy to Cloudflare Pages (15 min per site)
2. Verify DNS (5 min)
3. Test websites (15 min per site)
4. Upload images to R2 (15 min per site)
5. Test media loading (10 min)
6. Test email delivery (5 min)
7. Monitor for issues (30 min)

### Optional: Optimization (after migration)
1. Create caching rules for images (10 min)
2. Test performance improvements (15 min)
3. Enable bot protection if needed (5 min)
4. Document setup for team (20 min)

---

## Key Concepts to Understand

### Nameservers
**What:** DNS servers that route your domain traffic
**Current:** Hosted by your registrar (GoDaddy, etc.)
**Future:** Hosted by Cloudflare (neal.ns.cloudflare.com, sara.ns.cloudflare.com)
**Why:** Lets Cloudflare manage all DNS, hosting, caching in one place

### CNAME Records
**What:** Alias pointing one domain to another
**Example:** media.thedoghouseps.com → bucket.r2.cloudflarestorage.com
**Purpose:** Routes requests from your custom domain to R2

### Cloudflare Pages
**What:** Hosting service for Next.js and static sites
**How:** Connects to GitHub, auto-deploys on push
**Why:** Faster than Vercel for small projects, more integrated with Cloudflare

### R2
**What:** Object storage (like AWS S3) but with no egress charges
**How:** Upload images, access via custom domain
**Why:** Cheaper than storing on main server, faster delivery from edge

### SSL/TLS Full (Strict)
**What:** End-to-end encryption (Visitor → Cloudflare → Origin)
**Why:** Most secure option, requires origin to have valid certificate
**Status:** Free on Cloudflare, included in all plans

---

## Troubleshooting Quick Links

| Problem | Solution |
|---------|----------|
| Site doesn't load | See: CLOUDFLARE-QUICK-START.md → Common Issues → Site Not Loading |
| Email not sending | See: CLOUDFLARE-QUICK-START.md → Common Issues → Email Not Sending |
| Images not loading | See: CLOUDFLARE-QUICK-START.md → Common Issues → Images Not Loading |
| HTTPS warning | See: CLOUDFLARE-QUICK-START.md → Common Issues → HTTPS Warning |
| Site is slow | See: CLOUDFLARE-MIGRATION-GUIDE.md → Appendix A.5 (Performance Issues) |
| 404 errors | See: CLOUDFLARE-MIGRATION-GUIDE.md → Appendix A.6 (404 Errors) |

Full troubleshooting appendix available in CLOUDFLARE-MIGRATION-GUIDE.md

---

## Key Files to Keep

**After migration, keep these files for reference:**

1. `CLOUDFLARE-QUICK-START.md` - For quick lookups
2. `CLOUDFLARE-MIGRATION-GUIDE.md` - For detailed reference
3. `migration-log.md` (you'll create this) - Record of your migration
4. `dns-backup.txt` (you'll create this) - Backup of DNS records
5. `hosting-setup.md` (you'll create this) - New infrastructure diagram

---

## Support Resources

**Official Cloudflare:**
- Dashboard: https://dash.cloudflare.com
- Docs: https://developers.cloudflare.com
- Community: https://community.cloudflare.com

**For Next.js specific help:**
- Docs: https://nextjs.org/docs/app/building-your-application/deploying

**External tools:**
- DNS Propagation Checker: https://dnschecker.org
- SSL Checker: https://www.sslshopper.com/ssl-checker.html
- Performance Checker: https://pagespeed.web.dev

---

## Questions?

See the Troubleshooting section in either guide, or check Cloudflare Community.

---

## Document Versions

| Document | Version | Date | Status |
|----------|---------|------|--------|
| CLOUDFLARE-QUICK-START.md | 1.0 | March 2026 | Ready |
| CLOUDFLARE-MIGRATION-GUIDE.md | 1.0 | March 2026 | Ready |
| This README | 1.0 | March 2026 | Ready |

---

**Created by:** Web Researcher Agent
**Date:** March 29, 2026
**For:** thedoghouseps.com, dlpr.org, mypetcredentials.com
**Cost:** Free (Cloudflare free plan)
**Status:** Ready for implementation

**Next step:** Read CLOUDFLARE-QUICK-START.md or jump to a specific section in CLOUDFLARE-MIGRATION-GUIDE.md based on your task.
