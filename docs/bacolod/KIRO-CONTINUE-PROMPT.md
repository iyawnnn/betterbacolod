# Kiro CLI Continue Prompt - BetterLocalGov Bacolod

## Quick Start Prompt (Copy & Paste This):

```
I'm continuing work on betterlocalgov-bacolod - a local government website for Bacolod City, Philippines.

CURRENT STATUS: 100% CONTENT COMPLETE ✅
- 45 service files across 12 categories
- All data scraped from bacolodcity.gov.ph using our scraper.js tool
- All contacts verified from official sources

READ THESE FILES FOR CONTEXT:
- docs/bacolod/CUSTOMIZATION-STATUS.md (full status)
- .claude/ACTIVE-PHASE.md (current phase tracker)
- .claude/WORKFLOW.md (development workflow)

COMPLETED CATEGORIES (45 files):
1. Health Services (4) - CHO, barangay health centers
2. Business (4) - BPLO, permits, markets
3. Education (4) - DepEd Bacolod, scholarships
4. Garbage/Waste (4) - DPS, BENRO, waste collection
5. Transportation (4) - BTTMD, BTAO, routes
6. Social Welfare (4) - DSSD, senior/PWD/solo parent benefits
7. Public Safety (4) - 911, DRRMO, BFP, disaster prep
8. Legal & Civil (4) - LCR, cedula, notary, legal aid
9. Environment (2) - ENRO, clean-up drives
10. Housing & Land Use (3) - BHA, OBO, building permits
11. Infrastructure (4) - CEO, DRRMO flood control, BACIWA
12. Agriculture & Fisheries (4) - City Agriculture, Veterinary

WHAT'S NEXT (Choose one):
A) Polish index.yaml files - Replace "your LGU" with "Bacolod City"
B) Test and fix any broken pages - npm run dev
C) Add new features (online service links, photos, maps)
D) Deploy to production
E) Integrate flood control data with infrastructure pages

IMPORTANT WORKFLOW:
1. ALWAYS scrape first: node .claude/scripts/scraper.js --url "URL" --append
2. Check scraped data: docs/bacolod/BACOLOD-DATA-COLLECTION.md
3. Use ONLY verified Bacolod data (no AI-generated content)
4. Keep files short (60-150 lines), table-based, factual
5. Cite sources at bottom of each file
6. Update docs after completing work
7. Commit frequently with descriptive messages

KEY CONTACTS (Verified from bacolodcity.gov.ph):
- DRRMO: Dr. Anna Maria Laarni Pornan, 24/7: (034) 432-3871-73
- ENRO: Ramel Palalon, 0995-187-4725
- OBO: Isidro Sun Jr., (034) 433-8286
- CEO: Engr. Luben Rafael D. Ceballos, (034) 432-3098
- City Agriculture: Maricar P. Quiro, cityagri@bacolodcity.gov.ph
- City Veterinary: Dr. Maria Agueda Trinidad F. dela Torre, 0921-602-9525

What would you like me to work on?
```

---

## Project Overview

**Project:** BetterLocalGov Bacolod
**Purpose:** Local government services website for Bacolod City, Philippines
**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, YAML content
**Branch:** bacolod-customization

## File Structure

```
betterlocalgov-bacolod/
├── content/services/          # Service content files (45 .md files)
│   ├── health-services/       # 4 files
│   ├── business/              # 4 files
│   ├── education/             # 4 files
│   ├── garbage-waste-disposal/# 4 files
│   ├── transportation/        # 4 files
│   ├── social-welfare/        # 4 files
│   ├── public-safety/         # 4 files (includes disaster prep)
│   ├── legal-civil/           # 4 files
│   ├── environment/           # 2 files
│   ├── housing-land-use/      # 3 files
│   ├── infrastructure-public-works/ # 4 files
│   └── agriculture-fisheries/ # 4 files
├── src/data/
│   ├── services.yaml          # Category definitions (12 categories)
│   └── yamlLoader.ts          # YAML loading logic
├── docs/bacolod/
│   ├── CUSTOMIZATION-STATUS.md    # Full project status
│   ├── BACOLOD-DATA-COLLECTION.md # Scraped data storage
│   └── WORKFLOW.md                # Development workflow
└── .claude/
    ├── scripts/scraper.js     # Web scraper tool
    ├── ACTIVE-PHASE.md        # Current phase tracker
    ├── DATA-SOURCES.md        # Official data sources
    └── WORKFLOW.md            # Claude workflow guide
```

## Scraper Usage

```bash
# Scrape a single page
node .claude/scripts/scraper.js --url "https://bacolodcity.gov.ph/page" --append

# Scrape with portal link extraction
node .claude/scripts/scraper.js --url "URL" --extract-portals --append

# Output goes to: docs/bacolod/BACOLOD-DATA-COLLECTION.md
```

## Content File Format

```markdown
# Service Title — Bacolod City

Brief description of the service.

---

## 1. Services Available

| Service | Description |
| ------- | ----------- |
| Item 1  | Details     |

---

## 2. Requirements

- Requirement 1
- Requirement 2

---

## 3. How to Apply

1. Step 1
2. Step 2

---

## 4. Contact Information

### Office Name

- **Head:** Name
- **Phone:** (034) XXX-XXXX
- **Email:** email@bacolodcity.gov.ph
- **Hours:** Monday-Friday, 8:00 AM - 5:00 PM

---

**Source:** [Page Title](https://bacolodcity.gov.ph/page/) — Scraped Date
```

## Git Workflow

```bash
# Check status
git status

# Stage and commit
git add -A
git commit -m "feat: Description of changes

- Detail 1
- Detail 2

Source: bacolodcity.gov.ph/page/"

# Push
git push origin bacolod-customization
```

## Commands

```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run scrape       # Run scraper (alias)
```

## Remaining Tasks (Optional Polish)

1. **index.yaml cleanup** - Replace generic "your LGU" text
2. **Add images** - Photos of offices, services
3. **Online service links** - Link to onlineservices.bacolodcity.gov.ph
4. **Flood control integration** - Link DRRMO data to infrastructure
5. **Deploy** - Push to Vercel or hosting platform

---

**Last Updated:** January 11, 2026
**Status:** 100% Content Complete
