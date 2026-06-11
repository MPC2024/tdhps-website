# TDHPS Deploy — Source of Truth & Drift Prevention

**Critical document**: Prevents work loss, clarifies which rendering state is "live," and enforces single source of truth.

**Last Updated**: 2026-06-11 (Post-Forensic Audit)

---

## The Core Problem (Why We Lost Work Before)

On 2026-06-08, a Vex message told Fred "the page is live and styled correctly" with a screenshot of the "Grooming Transformation" section. Fred believed this. In reality:

1. The screenshot was of `localhost:3000` (local dev build), NOT the deployed site
2. The work existed ONLY as uncommitted files in the repo working tree
3. The production alias (`tdhps-website.vercel.app`) pointed to a different deployment (May-23 build)
4. When the working tree was cleaned (rebuilds, rebases, pulls), the uncommitted work vanished — no git history, no recovery path

This document prevents that pattern from ever recurring.

---

## Drift Vectors: Four Sources of Truth (and How They Diverge)

### Vector 1: Local Uncommitted Work vs. Git Repository

**What it is**: Files modified in working tree but never `git add` + `git commit`. Exists only on one developer's machine.

**How it bit us**: 
- Grooming video component, video assets, and app/page.tsx integration existed as uncommitted changes
- A prior Vex screenshotted the local dev site (`localhost:3000` with these changes) and claimed it was live
- No git commit = no backup, no push, no vercel deployment
- Any `git pull`, `git reset`, workflow/build tool cleanup would delete the files permanently

**How to detect it**:
```bash
cd /home/aiciv/tdhps-website
git status  # Shows "Untracked files" or "Changes not staged for commit"
git diff    # Shows what's changed locally but not committed
```

**Prevention rule**: NEVER screenshot or claim "done" without `git add` + `git commit` first. Uncommitted work is not work — it's a temp file.

---

### Vector 2: Git HEAD vs. Deployed Production Alias

**What it is**: The `main` branch's latest commit (HEAD) may not match what the production alias (`tdhps-website.vercel.app`) is pointing to.

**How it bit us (June 8 rollback)**:
- HEAD was at commit `1750479` (2026-06-08 16:55)
- Production alias was manually rolled back to `dpl_EMgww2anXM4GkPY2CnfDsVJ6wkrp` (May-23 build)
- These diverged: HEAD had content the alias did NOT, and vice versa
- When Vex claimed "live" on the alias, Fred thought HEAD was also live — it wasn't

**How to detect it**:
```bash
# Check git HEAD
cd /home/aiciv/tdhps-website
git log -1 --format="%H %s"  # Current HEAD commit

# Check Vercel alias via API (requires token; see DEPLOY-PROCESS.md)
# OR: fetch the live site and reverse-engineer the deployed commit from metadata or git tags
```

**Prevention rule**: After every deploy, commit the exact deployed SHA to a `git tag fred-approved-YYYYMMDD` so we always know what's live. The alias must ALWAYS trace to a known git commit in the log.

---

### Vector 3: Per-Deployment Preview URL vs. Stable Production Alias

**What it is**: 
- Stable alias: `tdhps-website.vercel.app` (always points to production)
- Per-deployment preview: `tdhps-website-<hash>.vercel.app` (ephemeral, per-commit)

Vex may deploy to a per-deployment preview (auto-created by Vercel on each git push), take a screenshot, then forget that the stable alias hasn't been updated yet.

**How to detect it**:
- URL bar shows `tdhps-website-<hash>.vercel.app` instead of `tdhps-website.vercel.app`
- The stable alias was never pointed to that deployment

**Prevention rule**: NEVER screenshot a per-deployment preview and claim "live." Always use the stable alias (`tdhps-website.vercel.app`). The stable alias is the source of truth for what Fred sees.

---

### Vector 4: localhost Dev Build vs. Deployed Site

**What it is**: `localhost:3000` renders the current working tree (committed + uncommitted). The deployed site renders only committed code.

**How it bit us**:
- Vex ran `npm run dev` locally, saw the GroomingTransformationVideo component render, took a screenshot
- Claimed it was "live and styled correctly on the preview"
- The uncommitted component wasn't deployed, so the live alias showed a different state
- Fred thought it was live; Vex thought localhost == deployed; work was lost

**How to detect it**:
- URL bar shows `localhost:3000` or `127.0.0.1:3000`
- Not the canonical `tdhps-website.vercel.app`

**Prevention rule**: localhost is a development tool ONLY. NEVER use it as proof of "live." The only proof of live is the canonical Vercel URL.

---

## The Canonical Staging URL (Single Source of Truth)

### FRED AND VEX BOTH LOOK AT THIS URL FOR PROOF:

```
https://tdhps-website.vercel.app/
```

**Why this one**:
- Stable alias, always points to the current production deployment
- Everyone sees the same thing (no local state, no temp preview URLs)
- The truth about what's deployed
- If something looks wrong here, it's a deployment problem or a committed code problem — both fixable

**NEVER use**:
- `localhost:3000` (local dev; includes uncommitted work)
- `tdhps-website-<hash>.vercel.app` (per-deployment preview; temporary and confusing)
- Screenshots of local renders without a timestamp + canonical URL

---

## The Mandatory Workflow (Never Lose Work Again)

Every change follows this exact sequence:

### 1. **Branch & Code**
```bash
cd /home/aiciv/tdhps-website
git checkout -b feature/your-feature-name
# Make edits...
```

### 2. **Commit (NOT Stash)**
```bash
# NEVER git stash — it buries files and loses work
# ALWAYS commit, even if partial or WIP
git add <files>
git commit -m "WIP: [your change]"
# OR if ready:
git add <files>
git commit -m "Feature: [clear message describing what + why]"
```

**Why**: Commits are recoverable via git log. Stashes are not.

### 3. **Deploy from Repo Root**
```bash
cd /home/aiciv/tdhps-website  # NEVER a subdirectory
npx vercel --prod --token="<TOKEN>"
```

**Why**: This pushes to the same Vercel project. A nested directory creates a new project and reverts the site.

### 4. **Verify on Canonical URL**
```bash
# Wait 30–60 seconds for Vercel to propagate
# Open https://tdhps-website.vercel.app/ in a browser
# Take a full-page screenshot (Cmd+Shift+5 on Mac, or tool of choice)
# Compare against what's expected
```

**Why**: The only proof is the rendered live site. Not localhost, not a preview URL, not a file listing.

### 5. **Mark as Done**
Only after verification:
```bash
# Tag the deployed commit
git tag fred-approved-20260611  # Use today's date

# Update CHANGELOG.md
# Mark change as "deployed" + "verified live" + screenshot

# Communicate to Fred with:
# - The Vercel URL
# - A screenshot of the live render
# - The git commit SHA
# - Confirmation that the SHA is live (tag + log match)
```

---

## 30-Second Drift-Check Checklist

Run this before every claim of "it's live":

```bash
cd /home/aiciv/tdhps-website

# 1. Confirm no uncommitted work lurking
git status
# Expected: "nothing to commit, working tree clean"

# 2. Confirm HEAD is the expected commit
git log -1 --format="%H %s"
# Expected: matches the deployed SHA or the latest tag

# 3. Confirm no local changes hidden
git diff
# Expected: (empty output)

# 4. Verify the canonical URL renders correctly
# Open https://tdhps-website.vercel.app/ in browser
# Screenshot + compare vs. expected
```

If any of these fail, you're in a drift state — fix it before claiming "live."

---

## Recovery: If You Discover Drift

### Scenario A: Uncommitted Work on Main Branch
```bash
cd /home/aiciv/tdhps-website
git status  # Shows changes

# Solution: Commit to a preserve branch IMMEDIATELY
git checkout -b preserve/your-feature-YYYYMMDD
git add <all files>
git commit -m "Preserve: [what was lost]"
# Now the work is safe in git and can be merged or reviewed
```

### Scenario B: HEAD != Deployed Alias
```bash
# Check what's deployed
git log -1 --format="%H %s"  # HEAD
# Manually verify Vercel deployment SHA (see DEPLOY-PROCESS.md)

# If alias is behind HEAD:
# Redeploy HEAD via:
cd /home/aiciv/tdhps-website
npx vercel --prod --token="<TOKEN>"

# If alias is ahead of HEAD (older work):
# Understand the rollback reason first, then either:
#   a) Revert HEAD to match, or
#   b) Redeploy HEAD to move forward
# NEVER silently ignore a divergence.
```

### Scenario C: Localhost Shows Content That Deployed Site Doesn't
```bash
# The uncommitted files are probably in your working tree
git status
# Move them to a preserve branch (Scenario A) before they're lost
```

---

## How This Prevents Future Loss

1. **Commit-before-deploy discipline**: Every change lives in git history forever. No "lost to stash" or "forgotten in working tree."

2. **Single canonical URL**: Fred and Vex both look at `tdhps-website.vercel.app`. No confusion between localhost, preview URLs, or past rollbacks.

3. **Deployed SHA is tracked**: Every deployed version is tagged. We always know what's live.

4. **Workflow is linear**: branch → commit → deploy from root → verify on canonical URL → tag. No shortcuts.

5. **Drift is detectable**: A 30-second checklist catches misalignment before it causes damage.

---

## Related Documents

- **DEPLOY-PROCESS.md**: Exact Vercel token, project ID, and deploy command
- **CHANGELOG.md**: What was requested, what's committed, what's deployed, what's verified
- **Git tags**: `fred-approved-*` = known-good states, rollback-safe checkpoints

---

## Rule Summary (Tl;dr)

| Rule | Why |
|------|-----|
| ALWAYS `git commit` before claiming "done"; never `git stash` | Stash loses work; commits are recoverable |
| Use ONLY `tdhps-website.vercel.app` as proof of "live" | Canonical URL, everyone sees the same thing |
| Never screenshot `localhost:3000` as proof | Local render ≠ deployed render |
| Never screenshot `tdhps-website-<hash>.vercel.app` | Per-deployment previews are temp; stable alias is truth |
| Always deploy from `/home/aiciv/tdhps-website/` root | Subdirs create new Vercel project, site reverts |
| Tag every deployed version | Need to know what git SHA is currently live |
| Run 30-second drift check before "done" | Catch misalignment early |

---

**Created by**: Vex (Conductor)  
**Purpose**: Prevent work loss during deploy/rollback cycles  
**Audience**: Fred, Vex, future developers on TDHPS  
**Last Incident**: 2026-06-08 (grooming video work lost to uncommitted state + alias rollback)
