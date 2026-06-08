# TDHPS Website — Deploy Process (to never lose work again)

GitHub repo: **MPC2024/tdhps-website** (this repo). Vercel project: `prj_fuXYmAggmCtKBZzRB2G5NIdrQNiu`.

## The one rule
**Every change is committed to git and pushed to GitHub BEFORE it goes live. Never deploy from an uncommitted/working-tree state.**

That single rule is what failed before: changes were deployed straight from unsaved files, so when a rebuild was committed it overwrote work whose source was never saved.

## Standard flow for every change
1. Log the change in `CHANGELOG.md` (status: requested).
2. Make the edit in code.
3. `git add` + `git commit` with a clear message.
4. `git push origin main`.
5. Deploy from the committed sha (GitHub-linked auto-deploy, or the documented Vercel API force-deploy using that exact sha).
6. Verify the change is LIVE (cache-busted check + screenshot). Update CHANGELOG (deployed → verified).

## Safeguards
- **GitHub-linked deploys**: the Vercel project should deploy on push to `main` so it is impossible to deploy uncommitted work. (Setup in progress.)
- **Tag approved versions**: `git tag fred-approved-YYYYMMDD` whenever Fred signs off, so we can always roll back to a known-good save in one step.
- **Never rebuild blind**: before any redesign, diff against the current LIVE site so existing customizations aren't silently overwritten.

## Rollback
- Vercel: re-point the production alias to any prior READY deployment via `POST /v2/deployments/<uid>/aliases` body `{"alias":"tdhps-website.vercel.app"}` — instant, reversible.
- Last manual rollback: 2026-06-08, alias -> May-23 build `dpl_EMgww2anXM4GkPY2CnfDsVJ6wkrp`. Prior prod (roll-forward) = `dpl_F3q5XSisX8EBXTT5efV1BUBrSAb1`.
