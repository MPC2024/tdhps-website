# TDHPS Website — Change Log

Single source of truth for every requested change. Funnel ALL change requests here (from Telegram, the portal, or .docx) so nothing is scattered or lost. Status: `requested` → `in code (committed)` → `deployed` → `verified live`.

Rule: **every change is committed to git before it is deployed.** Never deploy from an uncommitted working tree. Deploys come only from a committed git sha (ideally via GitHub-linked auto-deploy).

---

## Open — Fred's fine-tuned changes to re-apply (recovered May 22–23, see TDHPS-Missing-Changes-May23-v2.pdf)

| # | Change | Page | Status |
|---|--------|------|--------|
| 1 | Restore homepage pricing buttons: "View Boarding Prices", "View Day Care Prices", "Get Groom Price Estimate" | Homepage | requested |
| 2 | "View Boarding Prices" anchors to `#boarding-packages` ("OUR PET BOARDING PACKAGES"); add id + `scroll-margin-top:120px` | Home → Boarding | requested |
| 3 | CTA wording: every CTA = exactly "Book Appointment" (NOT "Book An Appointment"); incl. header + /our-team + translation files; verify 0 matches | Site-wide | requested |
| 4 | Single homepage H1 (no duplicate carousel H1s — currently 3) | Homepage (SEO) | requested |
| 5 | Remove old COVID footer copy ("…during the COVID-19 outbreak…") | Footer | requested |
| 6 | Location review ratings show "4.3 (334)" on all 3 locations (map + below name); restore the review count | All 3 locations | requested |
| 7 | All logo instances link to home (sticky header, footer circular, non-sticky home header) | Header/Footer | requested |
| 8 | Pearland = grooming only (no boarding/daycare) + FAQ accuracy | Pearland | DONE 2026-06-08 (af5899c) |

> Note: live site rolled back to the May-23 build (Fred's last save) on 2026-06-08. Items 1–7 to be re-applied into committed code, then deployed (which replaces the rollback with the finished, fully-saved version).

---

## Deployed history
- 2026-06-08 — `5f66f64` restored simplified static hero; `af5899c` Pearland grooming-only. (Both committed; live alias later rolled back to May-23 build as the working base.)
