# Cloudflare Setup & Media Migration Guide
## For Small Business Multi-Site Hosting

**Last Updated:** March 2026
**Status:** Complete step-by-step guide for thedoghouseps.com, dlpr.org, mypetcredentials.com

---

## Table of Contents

1. [Part 1: Account & DNS Setup](#part-1-account--dns-setup)
2. [Part 2: Website Hosting Options](#part-2-website-hosting-options)
3. [Part 3: Media Hosting with R2](#part-3-media-hosting-with-r2)
4. [Part 4: Performance & Security](#part-4-performance--security)
5. [Part 5: Migration Checklist](#part-5-migration-checklist)
6. [Appendix: Troubleshooting](#appendix-troubleshooting)

---

## Part 1: Account & DNS Setup

### 1.1 Creating a Cloudflare Account

**Step 1: Sign Up**
1. Go to https://www.cloudflare.com
2. Click **Sign Up** (top right)
3. Enter your email address and create a strong password
4. Verify your email by clicking the link in the confirmation email

**Step 2: Choose Your Plan**

Cloudflare offers multiple tiers. For your small business, here's the recommendation:

| Feature | Free | Pro | Business |
|---------|------|-----|----------|
| **Price/month** | $0 | $20 | $200 |
| **Custom domains** | Unlimited | Unlimited | Unlimited |
| **Cache Rules** | 10 | 50 | 100 |
| **Page Rules** | 3 | 20 | 50 |
| **SSL/TLS modes** | Full (Strict) ✓ | Full (Strict) ✓ | Full (Strict) ✓ |
| **Bot Fight Mode** | Free version | Super Bot Fight Mode | Super Bot Fight Mode |
| **WAF** | Free Managed Ruleset | All Rulesets | All Rulesets |
| **R2 Storage** | 10 GB free | Available | Available |
| **R2 Reads/month** | 10M free | 1M additional = $0.50 | 1M additional = $0.36 |

**Recommendation for your business:** Start with **Free plan** for all 3 sites. The free tier includes:
- SSL/TLS encryption (Full Strict mode)
- Basic DDoS protection
- 10 GB R2 storage
- 10M R2 reads/month
- Cache Rules (10 total)
- Bot Fight Mode

Upgrade to Pro ($20/month) only if you need more Cache Rules or Super Bot Fight Mode for sophisticated bot protection.

---

### 1.2 Adding Your First Domain to Cloudflare

We'll set up all three domains using the **Full Setup** method (Cloudflare as authoritative DNS provider).

#### Adding thedoghouseps.com

**In Cloudflare Dashboard:**

1. Log in to https://dash.cloudflare.com
2. Click **Add a Site** (or **+ Create application** if already logged in)
3. Enter your domain: `thedoghouseps.com`
4. Click **Continue**
5. On the plan selection page, select **Free** plan
6. Click **Continue**

**Step 2: Review Existing DNS Records**

Cloudflare will scan for existing DNS records from your current provider.

1. Cloudflare will display any existing records it found
2. Review the list carefully (especially MX records for email)
3. If records are missing, click **Add Record** and manually add:
   - **A records** (pointing to your hosting)
   - **MX records** (for email delivery)
   - **TXT records** (for SPF, DKIM, DMARC)
4. Click **Continue** when all records are verified

**Important:** Note the two **Cloudflare Nameservers** displayed on this screen:
- Example: `neal.ns.cloudflare.com`
- Example: `sara.ns.cloudflare.com`

(Your actual nameservers will be different—copy the exact ones shown)

---

### 1.3 Updating Nameservers at Your Domain Registrar

This step is **critical** and causes DNS to route through Cloudflare.

**Where to Update:**
- If you registered thedoghouseps.com with GoDaddy → GoDaddy account
- If with Namecheap → Namecheap account
- If with 1&1, Bluehost, etc. → respective registrar

**Step 1: Log in to Your Domain Registrar**

1. Visit your registrar's website and log in
2. Find **Domain Settings**, **Manage Domain**, or **DNS Management** (varies by registrar)

**Step 2: Replace Nameservers**

Example (GoDaddy):
1. Go to **Domains** > **My Domains**
2. Click the domain name to edit it
3. Scroll to **Nameservers** section
4. Click **Change Nameservers** (or similar)
5. Select **Custom nameservers**
6. Replace the existing nameservers with Cloudflare's:
   - **Nameserver 1:** `neal.ns.cloudflare.com` (your actual value)
   - **Nameserver 2:** `sara.ns.cloudflare.com` (your actual value)
7. Delete any other nameservers (keep only 2)
8. Click **Save**

**Example (Namecheap):**
1. Go to **Domain List**
2. Click the domain name
3. Go to **Nameservers** tab
4. Select **Custom DNS** from the dropdown
5. Replace nameservers with Cloudflare's values
6. Click the checkmark to save

**Important:** Copy the **exact** nameserver names from Cloudflare. If even one character is wrong, DNS will not resolve.

**Step 3: Wait for Propagation**

DNS changes take up to **24 hours** to propagate globally. During this time:
- Your website may intermittently be unavailable
- Email delivery may be interrupted
- This is normal

**Check Propagation Status:**

In the Cloudflare dashboard:
1. You'll see a notification: **Waiting for nameserver update**
2. Once propagated, it will say: **Active** (with a checkmark)

Or use an external tool:
- Visit https://dnschecker.org
- Enter your domain name
- Wait until all global locations show the Cloudflare nameservers

**Repeat this section for dlpr.org and mypetcredentials.com**

---

### 1.4 DNS Record Configuration

Once nameservers are updated and the domain shows as **Active**, configure DNS records.

**Navigate to DNS Records:**

In Cloudflare dashboard:
1. Select your domain from the top
2. Go to **DNS** > **Records** (left sidebar)
3. You'll see existing records that Cloudflare imported

**Understanding Record Types:**

| Type | Purpose | Example |
|------|---------|---------|
| **A** | Points domain to an IP address | `thedoghouseps.com` → `192.0.2.1` |
| **AAAA** | Points domain to IPv6 address | Used for IPv6-only servers |
| **CNAME** | Points subdomain to another domain | `www.thedoghouseps.com` → `cname.vercel-dns.com` (if using Vercel) |
| **MX** | Routes email to email server | `mail.yourdomain.com` |
| **TXT** | Text records for email authentication | SPF, DKIM, DMARC records |
| **NS** | Nameserver records | Usually auto-managed by Cloudflare |

**Setting Up A/CNAME Records for Website Hosting:**

See **Part 2** below for specific instructions on whether to use A, CNAME, or Cloudflare Pages.

**Setting Up Email (MX Records):**

If you host email elsewhere (Gmail, Office 365, etc.):

1. In **DNS** > **Records**, click **Add Record**
2. Set:
   - **Type:** MX
   - **Name:** @ (the domain root)
   - **Mail Server:** (from your email provider—example: `gmail-smtp-in.l.google.com` for Gmail)
   - **Priority:** 10 (lower = higher priority)
   - **TTL:** Auto (or 3600)
3. Click **Save**

Repeat for any backup MX records your email provider requires.

**Setting Up Email Authentication (SPF, DKIM, DMARC):**

These prevent email spoofing. Your email provider will give you specific TXT records to add.

Example for Gmail:
1. In **DNS** > **Records**, click **Add Record**
2. Set:
   - **Type:** TXT
   - **Name:** @ (domain root)
   - **Content:** `v=spf1 include:_spf.google.com ~all`
   - **TTL:** Auto
3. Click **Save**

(Ask your email provider for the exact values for DKIM and DMARC)

**Proxying Records Through Cloudflare:**

Next to each A/CNAME record is a cloud icon:
- **Orange cloud** = Proxied through Cloudflare (enables caching, WAF, etc.)
- **Gray cloud** = DNS only (no Cloudflare features)

For most records:
- Website records (A, CNAME) = Orange cloud
- MX records = Gray cloud (email must go directly to provider)
- TXT records = Gray cloud

To change, click the cloud icon next to the record.

---

### 1.5 SSL/TLS Settings (Full Strict)

Cloudflare offers free SSL/TLS to encrypt traffic. The **Full (Strict)** mode is the most secure.

**Enable Full (Strict):**

In Cloudflare dashboard:
1. Go to **SSL/TLS** > **Overview** (left sidebar)
2. You'll see the current mode (likely "Flexible")
3. Click on it to change

**The Four SSL/TLS Modes:**

| Mode | What It Does | When to Use |
|------|--------|------------|
| **Flexible** | Visitor → Cloudflare = HTTPS; Cloudflare → Origin = HTTP | Only if origin can't support HTTPS |
| **Full** | All traffic encrypted; origin cert not verified | Origins with self-signed certificates |
| **Full (Strict)** | All traffic encrypted; origin cert must be valid & trusted | Recommended (requires origin to have valid cert) |
| **Off** | No encryption (not recommended) | Testing only |

**For your sites:**

Since your sites are on Vercel and Cloudflare Pages (both have valid certificates):
1. Click the SSL/TLS mode dropdown
2. Select **Full (Strict)**
3. Confirm

**For origins with invalid certificates:**

If needed, use Cloudflare's free **Origin CA** certificates:
1. Go to **SSL/TLS** > **Origin Server**
2. Click **Create Certificate**
3. Follow the wizard to generate a certificate
4. Install it on your origin server
5. Then enable Full (Strict)

---

## Part 2: Website Hosting Options

You have three hosting scenarios:

1. **thedoghouseps.com** (currently on Vercel/Next.js) → **Cloudflare Pages** (recommended)
2. **dlpr.org** (currently on Vercel/Next.js) → **Cloudflare Pages** (recommended)
3. **mypetcredentials.com** (new, needs hosting) → **Cloudflare Pages** (recommended)

**Why Cloudflare Pages?**
- Free tier includes custom domain + automatic HTTPS
- Native Next.js support (with OpenNext adapter)
- Automatic rebuilds on GitHub push
- Free preview deployments on pull requests
- No egress charges
- Simpler than managing CNAME proxies to Vercel

---

### 2.1 Option A: Cloudflare Pages (Recommended)

#### Prerequisites

- GitHub repository with your Next.js code
- Next.js app configured for deployment (package.json with build script)

#### Step 1: Connect GitHub Repository to Cloudflare Pages

**In Cloudflare Dashboard:**

1. Go to **Workers & Pages** (left sidebar)
2. Click the **Pages** tab
3. Click **Create application** > **Pages** > **Connect to Git**
4. Choose **GitHub** and authorize Cloudflare to access your account
5. Select the GitHub repository containing your Next.js app
6. Click **Begin setup**

#### Step 2: Configure Build Settings

On the "Set up builds and deployments" page:

**For Static Export (recommended for smaller sites):**
1. **Framework preset:** Next.js (Static HTML Export)
2. **Build command:** `npm run build` (or `yarn build`)
3. **Build output directory:** `out`
4. **Environment variables:** Add any needed (see section below)
5. Click **Save and Deploy**

**For Server-Side Rendering (if needed):**

If you need dynamic features (real-time data, API routes), use the OpenNext adapter:

1. **Framework preset:** Next.js (with OpenNext)
2. **Build command:** `npm run build` (or `yarn build`)
3. **Build output directory:** `.vercel/output/static`
4. **Environment variables:** Add any needed
5. Click **Save and Deploy**

**Common Environment Variables to Add:**

If your Next.js app uses environment variables (API keys, etc.):

1. In the build settings, scroll to **Environment variables**
2. Click **Add variable** for each one:
   - **Name:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://api.example.com`
3. Repeat for all variables (found in your `.env.local` or `.env.production`)

**Note:** Variables starting with `NEXT_PUBLIC_` are accessible in the browser. Others are server-side only.

#### Step 3: Connect Your Custom Domain

After the first deployment:

1. Go to **Workers & Pages** > **Pages** > Your project name
2. Click **Settings** > **Domains**
3. Click **Add custom domain**
4. Enter your domain (e.g., `thedoghouseps.com`)
5. Cloudflare will create the DNS record automatically
6. Click **Activate domain**

**If you already have DNS records in Cloudflare:**
- Cloudflare will update the A record automatically
- No manual DNS changes needed

#### Step 4: Configure Routing (if needed)

By default, Cloudflare Pages serves your site at the domain root.

**For subdomains or sub-routes:**

1. In **Workers & Pages** > Your project > **Settings** > **Builds & deployments**
2. Add **Custom domain** for specific routes if needed
3. Most sites don't need this—domain root (thedoghouseps.com) is sufficient

---

### 2.2 Option B: Cloudflare as Reverse Proxy to Vercel

If you prefer to keep your sites on Vercel (perhaps for other features), you can use Cloudflare as a reverse proxy.

**When to choose this:**
- You want to keep using Vercel's analytics/previews
- You have Vercel integrations
- You prefer Vercel's deployment workflow

**When NOT to choose this:**
- You want simpler hosting (Cloudflare Pages is easier)
- You want to avoid Vercel's reverse proxy limitations
- You want cost savings (Cloudflare is cheaper)

#### Setup Steps

**In Cloudflare DNS:**

1. Go to **DNS** > **Records**
2. Click **Add Record**
3. Set:
   - **Type:** CNAME
   - **Name:** @ (domain root) or subdomain
   - **Target:** `cname.vercel-dns.com`
   - **Proxy status:** Gray cloud (DNS only—important!)
   - **TTL:** Auto
4. Click **Save**

**Important:** The gray cloud is critical. If you use the orange (proxied) cloud, Cloudflare will cache responses incorrectly or cause issues with Vercel's Bot Protection.

#### Vercel Configuration

In your Vercel project settings:
1. Go to **Settings** > **Domains**
2. Add the domain manually or let Vercel detect it via DNS

**To avoid the "reverse proxy warning":**

In Cloudflare, for the CNAME record:
1. Click the record to edit it
2. Enable **True-Client-IP** header (so Vercel sees real visitor IPs)
3. Set **Cache Level** to **Bypass** (disable Cloudflare caching)

---

### 2.3 Comparison: Pages vs. Vercel Proxy

| Feature | Cloudflare Pages | Vercel (via Proxy) |
|---------|-----------|-----------|
| **Setup complexity** | Simple (GitHub only) | Moderate (GitHub + manual Vercel) |
| **Cost** | Free | Depends on Vercel plan |
| **Builds** | Free | First 100/month free, then $1 per 100 |
| **Preview deployments** | Included | Included |
| **Analytics** | Basic | Better (on Pro plan) |
| **Performance** | Good (Cloudflare edge) | Good (Vercel edge) |
| **Flexibility** | Good for static/ISR | Better for dynamic apps |

**Recommendation for your business:**

Use **Cloudflare Pages** for all three sites:
- thedoghouseps.com (pet salon—mostly static content)
- dlpr.org (pet rescue—mostly static content)
- mypetcredentials.com (credentials platform—can use dynamic features if needed)

All three benefit from simpler setup and unified hosting.

---

## Part 3: Media Hosting with R2

Cloudflare R2 is object storage (like AWS S3) without egress charges.

**Why R2 instead of storing media on your main site?**
- No bandwidth charges when users download
- Content served from Cloudflare edge (faster)
- Better for large files (images, videos)
- Separate from your website infrastructure
- Easy to backup and manage

**Your R2 quota on free plan:**
- 10 GB storage (enough for ~100 photos at 100MB each)
- 10 million reads/month (very generous)
- No egress charges

---

### 3.1 Creating an R2 Bucket

**In Cloudflare Dashboard:**

1. Go to **R2** (left sidebar under "Storage")
2. If this is your first bucket, click **Create bucket**
3. Click **Create bucket** (or **+ Create** button)

**Bucket Configuration:**

1. **Bucket name:** Use lowercase, hyphens okay
   - Example: `thedoghouseps-media` or `pets-images`
   - Must be globally unique (even across other accounts)
   - Try: `thedoghouseps-media-2026`
2. **Region:** Select closest to your users
   - If mostly US: Select a US region
   - If global: Leave as automatic
3. **Click Create bucket**

**Repeat for each site:**
- `thedoghouseps-media`
- `dlpr-media`
- `mypetcredentials-media`

---

### 3.2 Setting Up Public Access

By default, R2 buckets are private. To serve media publicly:

**In R2 Bucket Settings:**

1. Click on your bucket name
2. Go to **Settings** tab
3. Scroll to **Public access**
4. Click **Allow public access** (if not already enabled)
5. Check **Public R2 URL** (this enables the default URL)

**This generates a public URL like:**
- `https://pub-abc123xyz.r2.dev/image.jpg`

But this is ugly. Instead, use a custom domain.

---

### 3.3 Setting Up a Custom Domain for R2

Instead of the default `.r2.dev` URL, use something like `media.thedoghouseps.com`.

**Prerequisites:**

- Domain already in Cloudflare
- R2 bucket created

**Step 1: Create the Custom Domain Subdomain**

In Cloudflare DNS:
1. Go to **DNS** > **Records**
2. Click **Add Record**
3. Set:
   - **Type:** CNAME
   - **Name:** `media` (for media.thedoghouseps.com)
   - **Target:** `<your-bucket-id>.r2.cloudflarestorage.com`
   - **Proxy status:** Orange cloud (proxied)
   - **TTL:** Auto
4. Click **Save**

(Find your bucket ID in R2 > Bucket Settings > Bucket details)

**Step 2: Connect Domain to R2 Bucket**

In Cloudflare R2:
1. Click your bucket name
2. Go to **Settings**
3. Scroll to **Custom domain**
4. Click **Connect domain** (or **Add custom domain**)
5. Enter: `media.thedoghouseps.com`
6. Confirm the DNS record
7. Click **Connect**

Cloudflare will verify the DNS record and activate the custom domain.

**Result:**
- Images uploaded to R2 are now accessible at:
  - `https://media.thedoghouseps.com/dog-photo.jpg`
  - Instead of: `https://pub-abc123xyz.r2.dev/dog-photo.jpg`

---

### 3.4 Upload Workflow: Adding Images to R2

You have three options:

#### Option A: Cloudflare Dashboard (Easiest for Small Uploads)

1. Go to **R2** > Your bucket
2. Click **Upload** button
3. Select files from your computer
4. Wait for upload to complete
5. Copy the file URL from the list

#### Option B: Wrangler CLI (For Developers)

Install Wrangler (Cloudflare's command-line tool):

```bash
npm install -g @cloudflare/wrangler
```

Configure credentials:
```bash
wrangler login
```

Upload a file:
```bash
wrangler r2 object put my-bucket-name path/to/file.jpg
```

#### Option C: S3-Compatible API (For Integrations)

R2 is S3-compatible. You can use any S3 client:

**In your app (example: Node.js):**

```javascript
const AWS = require('aws-sdk');

const r2 = new AWS.S3({
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  endpoint: 'https://<account-id>.r2.cloudflarestorage.com',
  s3ForcePathStyle: true,
  region: 'auto',
});

// Upload file
r2.putObject({
  Bucket: 'thedoghouseps-media',
  Key: 'dog-photo.jpg',
  Body: fileBuffer,
  ContentType: 'image/jpeg',
}, (err, data) => {
  if (err) console.error(err);
  else console.log('Uploaded:', data);
});
```

**For credentials:**
1. In Cloudflare > **R2** > **Settings** > **API tokens**
2. Create a new API token with R2 permissions
3. Copy the Access Key ID and Secret Access Key
4. Store in environment variables

---

### 3.5 Using R2 URLs in Your Next.js App

Once images are uploaded, reference them in your app:

**In Next.js with Next Image component:**

```jsx
import Image from 'next/image';

export default function DogPhoto() {
  return (
    <Image
      src="https://media.thedoghouseps.com/dog-photo.jpg"
      alt="Dog photo"
      width={400}
      height={300}
    />
  );
}
```

**For dynamic images from your database:**

```jsx
// In your Next.js page or component
const images = [
  'https://media.thedoghouseps.com/grooming-1.jpg',
  'https://media.thedoghouseps.com/grooming-2.jpg',
];

export default function Gallery() {
  return (
    <div>
      {images.map(src => (
        <Image
          key={src}
          src={src}
          alt="Pet service"
          width={300}
          height={200}
        />
      ))}
    </div>
  );
}
```

---

### 3.6 Cost Tracking for R2

Monitor your usage to stay within free tier:

**In Cloudflare Dashboard:**

1. Go to **Billing** > **Overview**
2. Scroll to **R2** section
3. See current month's usage:
   - Storage GB
   - Read operations
   - Pricing breakdown

**Free tier limits:**
- 10 GB storage
- 10M read operations

If you exceed, charges are:
- Storage: $0.015/GB/month
- Read operations: $0.36 per million reads

For a small business with photo galleries, you'll likely never exceed.

---

## Part 4: Performance & Security

---

### 4.1 Enabling Cache Rules

Cache Rules tell Cloudflare what to cache and for how long.

**Why cache?**
- Static content (images, CSS, JS) loads from Cloudflare edge (faster)
- Reduces load on your origin server
- Improves user experience

**Default caching behavior:**

Cloudflare caches:
- Images (.jpg, .png, .gif, .svg, .webp)
- CSS, JavaScript
- PDFs

Cloudflare does NOT cache:
- HTML pages (by default)
- JSON responses
- Pages with `Set-Cookie` headers

**To cache HTML pages:**

In Cloudflare Dashboard:
1. Go to **Caching** > **Cache Rules** (left sidebar)
2. Click **Create rule**
3. Set:
   - **When incoming requests match:** (leave as default or customize)
   - **Then:** Cache everything
   - **Cache age:** 1 hour (or 3600 seconds)
4. Click **Deploy**

**Example: Cache blog posts for 24 hours**

1. Click **Create rule**
2. Set:
   - **When:** Path matches `/blog/*`
   - **Then:** Cache everything
   - **Cache age:** 86400 (seconds = 24 hours)
3. Click **Deploy**

**Example: Cache API responses**

By default, API responses aren't cached. To cache them:

1. Click **Create rule**
2. Set:
   - **When:** Path matches `/api/pets`
   - **Then:** Cache everything
   - **Cache age:** 300 (5 minutes)
   - **Respect Server Headers:** OFF (optional—lets you override server headers)
3. Click **Deploy**

---

### 4.2 Cache Rules for Static Assets

Create a rule for long-term caching of images and CSS:

**Rule: Long-term cache for static assets**

1. Click **Create rule**
2. Set:
   - **When:** (any of the following)
     - URI path matches `*.css`
     - OR URI path matches `*.js`
     - OR URI path matches `*.jpg`
     - OR URI path matches `*.png`
   - **Then:** Cache everything
   - **Cache age:** 31536000 (1 year in seconds)
   - **Browser cache TTL:** 43200 (12 hours)
3. Click **Deploy**

This caches images and CSS for a year on Cloudflare's edge, but browsers refresh every 12 hours (for updates).

---

### 4.3 Firewall and WAF Basics

Cloudflare's Web Application Firewall (WAF) protects against common attacks.

**On the Free plan:**

You get:
- **Free Managed Ruleset** (automatic bot/attack protection)
- **Bot Fight Mode** (blocks obvious bots)
- 5 Firewall Rules (custom rules)

**Enabling Bot Fight Mode:**

In Cloudflare Dashboard:
1. Go to **Security** > **Bots** (left sidebar)
2. Toggle **Bot Fight Mode** to ON
3. The default settings work for most sites

This automatically:
- Blocks obvious bots
- Challenges suspicious traffic
- Tracks bot activity

**Creating a Firewall Rule (if needed):**

Example: Block a specific IP address

1. Go to **Security** > **Firewall Rules** (or **WAF**)
2. Click **Create rule**
3. Set:
   - **Condition:** IP address is `1.2.3.4`
   - **Action:** Block
4. Click **Deploy**

**For your pet salon sites:**

The default settings should be sufficient. No custom rules needed unless you experience specific attacks.

---

### 4.4 Rate Limiting (Pro Plan)

Rate limiting prevents abuse (someone requesting your API too many times).

On the Free plan, you're limited to basic protections. If needed, upgrade to **Pro ($20/month)** for advanced rate limiting.

**For now, skip this.** Add rate limiting later if you experience abuse.

---

### 4.5 DDoS Protection

Cloudflare automatically protects against DDoS attacks (attempts to overwhelm your site with traffic).

**You don't need to configure anything.** It's enabled by default on all plans, even Free.

Cloudflare's network automatically:
- Identifies suspicious traffic patterns
- Routes attacks away from your origin
- Lets legitimate traffic through

---

## Part 5: Migration Checklist

This section covers the actual migration process from Vercel to Cloudflare Pages + R2.

---

### 5.1 Pre-Migration: Planning & Backup

**Week Before Migration:**

1. **Backup DNS Records**
   - In your registrar (or current DNS provider):
   - Note all A, CNAME, MX, TXT records
   - Screenshot for reference
   - Save to a text file: `/home/aiciv/tdhps-website/dns-backup.txt`

2. **Test DNS Propagation**
   - Use https://dnschecker.org
   - Enter each domain
   - Record current nameservers
   - This is your baseline for later

3. **Verify Email is Working**
   - Send a test email to each site's contact form or email address
   - Confirm it arrives
   - Note the email provider (Gmail, Office 365, etc.)

4. **Export Images from Current Hosting**
   - If images are on Vercel/server, download them
   - Organize by site:
     - `/tmp/tdhps-images/`
     - `/tmp/dlpr-images/`
     - `/tmp/mypetcredentials-images/`

5. **Create a Migration Log**
   - File: `/home/aiciv/tdhps-website/migration-log.md`
   - Record start time, progress, and any issues
   - Share with stakeholders

---

### 5.2 Staging: Test with Cloudflare (Optional but Recommended)

Before migrating production, test with a staging subdomain.

**For thedoghouseps.com:**

1. **Add a staging domain in Cloudflare**
   - DNS: `staging.thedoghouseps.com` → your Cloudflare Pages staging URL
   - Or: `staging-tdhps.pages.dev`

2. **Deploy to Cloudflare Pages**
   - Connect your GitHub repo to Cloudflare Pages
   - Verify the build succeeds
   - Test the site at `staging-tdhps.pages.dev`

3. **Test All Features**
   - Browse all pages
   - Test forms (contact, appointments, etc.)
   - Test email notifications (do they still send?)
   - Check mobile rendering
   - Verify performance (is it faster than Vercel?)

4. **If everything works:**
   - Proceed to production migration
   - You've verified the setup

5. **If issues arise:**
   - Debug and fix
   - Document the problem
   - Try again before production

---

### 5.3 Migration Day: Production Cutover

**Timing:** Schedule for a low-traffic time (early morning or late evening).

**Step 1: Deploy to Cloudflare Pages (Production)**

In Cloudflare Dashboard:
1. Go to **Workers & Pages** > **Pages**
2. Connect your GitHub repo (if not already connected)
3. Configure build settings (see Part 2.1)
4. First deployment will happen automatically
5. Wait for "Deployment successful" message

**Verify the deployment:**
- Visit `https://thedoghouseps.pages.dev` (your project URL)
- Check all pages load
- Test forms and interactions

**Step 2: Update DNS Nameservers**

At your domain registrar:
1. Log in
2. Find Nameservers settings
3. Replace with Cloudflare's nameservers:
   - `neal.ns.cloudflare.com`
   - `sara.ns.cloudflare.com`
   (Use the exact ones from your Cloudflare account)
4. Save changes

**At this moment, traffic begins routing to Cloudflare.**

**Step 3: Connect Custom Domain in Cloudflare Pages**

In Cloudflare:
1. Go to **Workers & Pages** > Your project
2. Go to **Settings** > **Domains**
3. Click **Add custom domain**
4. Enter your domain: `thedoghouseps.com`
5. Cloudflare creates the A record automatically
6. Verify DNS resolves to the new site

---

### 5.4 Migration Day: Verification

**Do these checks immediately after DNS update:**

**Check 1: DNS Propagation**

Use https://dnschecker.org:
1. Enter your domain
2. Confirm Cloudflare nameservers show globally
3. May take 5-30 minutes

**Check 2: Website Loads**

1. Open browser (hard refresh: Ctrl+Shift+R)
2. Visit `https://thedoghouseps.com`
3. Check that your site loads
4. Verify all pages are accessible
5. Test interactive features (forms, buttons)

**Check 3: SSL Certificate**

1. Visit your domain
2. Look for the green lock (HTTPS)
3. If missing or warning, wait 15-30 min (SSL issue resolving)
4. If still missing, check Cloudflare SSL/TLS settings (should be Full Strict)

**Check 4: Email Delivery**

1. Send a test email to your site's email address
2. Confirm it arrives
3. Check spam folder
4. If not arriving, verify MX records in Cloudflare DNS

**Check 5: Website Speed**

1. Compare performance to old site
2. Should be similar or faster
3. Check with https://pagespeed.web.dev if concerned

---

### 5.5 Post-Migration: Monitoring & Cleanup

**First 24 Hours:**

- [ ] Monitor your site for errors
- [ ] Check email delivery (especially if you have email forms)
- [ ] Monitor DNS propagation completion
- [ ] Test on mobile and desktop
- [ ] Check analytics (if applicable)

**After 24 Hours:**

- [ ] Verify DNS is fully propagated
- [ ] Test from different locations/devices
- [ ] Confirm all previous Vercel deployments can be deleted
- [ ] Update internal documentation

**Cleanup:**

1. **Delete old Vercel deployments** (if migrating off Vercel)
   - In Vercel dashboard
   - Only if you've confirmed everything works
   - Keep DNS records if needed for staging

2. **Migrate images to R2**
   - Upload all images to R2 buckets
   - Update image URLs in your site (if hardcoded)
   - Test image loading from R2

3. **Document new setup**
   - File: `/home/aiciv/tdhps-website/hosting-setup.md`
   - Record:
     - Domain → Cloudflare Pages mapping
     - R2 bucket names and custom domains
     - SSL/TLS settings
     - Cache Rules
     - Emergency contacts

---

### 5.6 Rollback Plan (If Something Goes Wrong)

**If your site breaks after migration:**

**Option 1: Revert Nameservers (fastest)**

1. Log into your registrar
2. Change nameservers back to old provider
3. Wait 5-15 minutes
4. Your site returns to previous state
5. Then diagnose the issue

**Option 2: Keep Nameservers, Change DNS Records**

1. In Cloudflare, change the A record back to old IP
2. Or point CNAME back to Vercel

**Option 3: Cloudflare Pages Rollback**

1. Go to **Workers & Pages** > Your project > **Deployments**
2. Find the last good deployment
3. Click **Rollback**
4. Site reverts to previous version

---

### 5.7 Complete Migration Checklist

Use this checklist for each of your three sites:

**Site: thedoghouseps.com**

**Pre-Migration (Week Before)**
- [ ] Backup DNS records to file
- [ ] Test current site is working
- [ ] Export images from current host
- [ ] Verify email delivery is working
- [ ] Create staging/test plan

**Setup Phase**
- [ ] Create Cloudflare account
- [ ] Add domain to Cloudflare
- [ ] Review DNS records Cloudflare imported
- [ ] Create R2 bucket for media
- [ ] Connect R2 custom domain

**Deployment Phase**
- [ ] Create GitHub repository with Next.js code
- [ ] Connect repo to Cloudflare Pages
- [ ] Configure build settings
- [ ] First deployment succeeds

**Migration Day**
- [ ] Test Cloudflare Pages deployment
- [ ] Update nameservers at registrar
- [ ] Add custom domain to Cloudflare Pages
- [ ] Verify DNS propagation (https://dnschecker.org)
- [ ] Test site loads at custom domain
- [ ] Verify SSL/TLS (green lock)
- [ ] Test email delivery
- [ ] Test all pages and forms

**Post-Migration (24-48 hours)**
- [ ] Confirm DNS fully propagated
- [ ] Upload images to R2
- [ ] Update image URLs (if needed)
- [ ] Delete old hosting (if needed)
- [ ] Document new setup
- [ ] Archive migration log

**Repeat for:**
- [ ] dlpr.org
- [ ] mypetcredentials.com

---

## Appendix: Troubleshooting

---

### A.1 DNS Not Propagating

**Symptom:** Site doesn't load, or shows old content

**Causes:**
- Nameserver change hasn't propagated yet (up to 24 hours)
- Nameserver typed incorrectly at registrar
- Browser cached old DNS

**Fix:**

1. **Verify nameservers at registrar:**
   - Log into registrar
   - Confirm nameservers exactly match Cloudflare's
   - Check for typos character-by-character

2. **Clear browser cache:**
   - Press Ctrl+Shift+Delete
   - Clear all cache
   - Reload site

3. **Use external DNS checker:**
   - Visit https://dnschecker.org
   - Enter domain
   - Check global nameserver status
   - All locations should show Cloudflare nameservers

4. **Flush local DNS (if on your computer):**
   - **Windows:** `ipconfig /flushdns` (Command Prompt)
   - **Mac:** `sudo dscacheutil -flushcache` (Terminal)
   - **Linux:** `sudo systemctl restart systemd-resolved`

---

### A.2 SSL/TLS Certificate Error

**Symptom:** HTTPS warning, "Your connection is not secure"

**Causes:**
- SSL certificate not yet issued
- Origin doesn't have valid certificate (if using Full Strict)
- Certificate mismatch

**Fix:**

1. **If using Full (Strict):**
   - Verify your origin (Pages or Vercel) has a valid certificate
   - Cloudflare Pages and Vercel both have valid certs—should work
   - Wait 15-30 minutes for Cloudflare cert to issue

2. **Temporarily use Full (not Strict):**
   - In **SSL/TLS** > **Overview**
   - Change mode to **Full** (not Strict)
   - This often resolves cert issues
   - Switch back to Strict once working

3. **Force certificate renewal:**
   - In **SSL/TLS** > **Overview**
   - Look for "Reissue" or renewal button
   - Click to force Cloudflare to reissue cert

4. **For custom origin servers:**
   - Ensure origin has valid certificate from trusted CA
   - Or install Cloudflare's Origin CA certificate

---

### A.3 Images Not Loading from R2

**Symptom:** Broken image icons, or images don't appear

**Causes:**
- Custom domain not connected to R2
- Image file not uploaded
- Permissions/public access not enabled

**Fix:**

1. **Verify custom domain is connected:**
   - In **R2** > Bucket > **Settings** > **Custom domain**
   - Should show your custom domain (e.g., media.thedoghouseps.com)

2. **Verify public access is enabled:**
   - In **R2** > Bucket > **Settings** > **Public access**
   - Should show "Allow public access" checked

3. **Test the URL directly:**
   - Visit `https://media.thedoghouseps.com/filename.jpg` in browser
   - If blank/404: file not uploaded
   - If loads: problem is in your site code

4. **Check file upload:**
   - In **R2** > Bucket > **Browse**
   - Confirm file appears in list
   - If not: upload it

5. **Check image URL in site code:**
   - Ensure URL is exactly correct (case-sensitive)
   - Example: `https://media.thedoghouseps.com/dog.jpg`
   - Not: `https://media.thedoghouseps.com/Dog.jpg` (case matters)

---

### A.4 Email Not Delivering

**Symptom:** Form submissions don't send emails, or emails go to spam

**Causes:**
- MX records not set up in Cloudflare
- SPF/DKIM/DMARC records missing
- Email provider configuration issue

**Fix:**

1. **Verify MX records in Cloudflare:**
   - Go to **DNS** > **Records**
   - Look for records with type "MX"
   - Should point to your email provider
   - Example for Gmail: `gmail-smtp-in.l.google.com`

2. **Add SPF record (prevents spoofing):**
   - Go to **DNS** > **Records** > **Add Record**
   - Type: TXT
   - Name: @ (domain root)
   - Content: `v=spf1 include:_spf.google.com ~all` (or your provider's SPF)
   - Click Save

3. **Check DKIM record:**
   - Your email provider should give you DKIM record
   - Example: `default._domainkey.gmail.com`
   - Add as TXT record in Cloudflare

4. **Check DMARC record:**
   - Add DMARC TXT record (email provider should provide)
   - Example: `v=DMARC1; p=quarantine; rua=mailto:admin@example.com`

5. **Verify with email provider:**
   - Log into Gmail, Office 365, etc.
   - Confirm domain is verified
   - Check for any alerts about DNS configuration

---

### A.5 Performance Issues

**Symptom:** Site slower than before, or specific pages are slow

**Causes:**
- Caching not enabled (Pages content not cached)
- Large uncompressed images
- Slow database queries (if using dynamic content)

**Fix:**

1. **Enable caching for HTML:**
   - Go to **Caching** > **Cache Rules**
   - Create rule to cache HTML pages
   - Set cache age to 5 minutes (3600 seconds)
   - This helps with repeat visits

2. **Cache static assets longer:**
   - Create Cache Rule for images, CSS, JS
   - Set cache age to 1 month or 1 year
   - These rarely change

3. **Optimize images:**
   - Use WebP format instead of JPEG/PNG
   - Compress before uploading
   - Use Next.js Image component (automatic optimization)

4. **Check Cloudflare Analytics:**
   - Go to **Analytics & Logs** > **Analytics**
   - Look for slow requests
   - Check if origin (Pages) is slow or Cloudflare

---

### A.6 404 Errors After Migration

**Symptom:** "Page not found" errors on some pages

**Causes:**
- DNS pointing to wrong hosting
- Build configuration wrong (wrong build directory)
- Cloudflare Pages not deploying all pages

**Fix:**

1. **Verify DNS is correct:**
   - Use https://nslookup.io
   - Enter your domain
   - Confirm it points to Cloudflare Pages IP

2. **Verify build settings:**
   - In **Workers & Pages** > Your project > **Settings** > **Builds & deployments**
   - Check **Build command:** should be `npm run build`
   - Check **Build output directory:** should match your setup:
     - Static export: `out`
     - OpenNext: `.vercel/output/static`

3. **Check GitHub repo:**
   - Confirm all pages are in `/app` directory (Next.js)
   - Commit any missing pages
   - Push to GitHub
   - Cloudflare will rebuild

4. **Redeploy:**
   - In **Workers & Pages** > Your project > **Deployments**
   - Click **Redeploy** on the latest deployment
   - Wait for "Deployment successful"

---

### A.7 Getting Help

**If you're stuck:**

1. **Cloudflare Community:** https://community.cloudflare.com
   - Search your error first
   - Many common issues have solutions

2. **Cloudflare Documentation:** https://developers.cloudflare.com
   - Search for your specific feature
   - Step-by-step guides available

3. **Next.js Deployment Guide:** https://nextjs.org/docs/app/building-your-application/deploying
   - Specific configuration for Next.js

4. **GitHub Issues:**
   - If using Cloudflare Pages: https://github.com/cloudflare/wrangler-action
   - Often has solutions for build errors

5. **Terraform/IaC (Advanced):**
   - Cloudflare has Terraform provider
   - Can automate entire setup
   - Useful if managing multiple sites

---

## Summary

**You now have:**

- Cloudflare accounts for all 3 sites
- DNS pointing to Cloudflare nameservers
- Next.js apps deployed to Cloudflare Pages
- R2 buckets for media storage
- Custom domains for media (media.thedoghouseps.com, etc.)
- SSL/TLS configured (Full Strict)
- Caching rules for performance
- Firewall/WAF enabled
- Complete migration documentation

**Next steps:**

1. Create Cloudflare account (5 minutes)
2. Add domains (5 minutes per domain)
3. Update nameservers (2-3 minutes per registrar)
4. Wait 24 hours for DNS propagation
5. Deploy to Cloudflare Pages
6. Migrate media to R2
7. Monitor and verify

**Timeline:** 2-3 days total (mostly waiting for DNS propagation)

**Cost:** FREE (all on Cloudflare free plan for small business)

---

## Resources

- [Cloudflare Dashboard](https://dash.cloudflare.com)
- [Cloudflare Developers](https://developers.cloudflare.com)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [DNS Propagation Checker](https://dnschecker.org)
- [Cloudflare Community](https://community.cloudflare.com)

---

**Guide Version:** 1.0 (March 2026)
**Author:** Web Researcher Agent
**Status:** Ready for implementation
