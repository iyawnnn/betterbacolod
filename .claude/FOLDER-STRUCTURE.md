# .claude/ Folder Structure

> **Visual guide to the context system**

## Complete Structure

```
.claude/
│
├── 📘 README.md                    # Overview and system guide
├── 🚀 QUICK-START.md               # 5-minute setup guide
├── 🔧 SETUP-HOOKS.md               # Hook configuration guide
├── 📁 FOLDER-STRUCTURE.md          # This file
│
├── ⚡ CONTEXT.md                   # Core context (<250 tokens) ★ AUTO-LOADED
├── 📍 ACTIVE-PHASE.md              # Current phase tracker ★ READ EACH SESSION
│
├── 📚 DATA-SOURCES.md              # Official sources (ENFORCED)
├── 📋 SCRAPING-SCHEMA.md           # Extraction rules and format
├── 📖 RULES.md                     # Development standards (reference)
├── 🔄 WORKFLOW.md                  # Claude work patterns (reference)
│
├── hooks/
│   └── session-start.sh            # Auto-load context hook
│
└── scripts/
    └── scraper.js                  # Web scraping tool
```

## File Sizes (Target)

| File               | Size   | Tokens    | Purpose              |
| ------------------ | ------ | --------- | -------------------- |
| CONTEXT.md         | <2 KB  | ~250      | Essential info only  |
| ACTIVE-PHASE.md    | <3 KB  | ~300      | Current work status  |
| DATA-SOURCES.md    | ~10 KB | ~1000     | All official sources |
| SCRAPING-SCHEMA.md | ~8 KB  | ~800      | Extraction rules     |
| RULES.md           | ~6 KB  | ~600      | Standards (ref only) |
| WORKFLOW.md        | ~8 KB  | ~800      | Patterns (ref only)  |
| **Total Context**  |        | **~1000** | Auto-loaded only     |

## File Relationships

```
Session Start
    ↓
session-start.sh (hook)
    ↓
Loads: CONTEXT.md + ACTIVE-PHASE.md
    ↓
Claude reads (~550 tokens total)
    ↓
When needed, references:
    ├── DATA-SOURCES.md (for valid sources)
    ├── SCRAPING-SCHEMA.md (when scraping)
    ├── RULES.md (for standards)
    └── WORKFLOW.md (for patterns)
```

## Integration with Project

```
betterlocalgov-bacolod/
│
├── .claude/                       ← Context system (NEW)
│   ├── CONTEXT.md
│   ├── ACTIVE-PHASE.md
│   ├── DATA-SOURCES.md
│   ├── SCRAPING-SCHEMA.md
│   ├── RULES.md
│   ├── WORKFLOW.md
│   ├── hooks/
│   └── scripts/
│
├── docs/bacolod/                  ← Detailed workflows & data
│   ├── WORKFLOW.md               (detailed workflow)
│   ├── SCRAPING-CHECKLIST.md     (full scraping list)
│   ├── BACOLOD-DATA-COLLECTION.md (scraped data output)
│   └── ...other docs
│
├── content/services/              ← Content to update
│   ├── health/
│   ├── business/
│   ├── education/
│   └── waste/
│
└── package.json                   ← npm run scrape:* commands
```

## Data Flow

### Scraping Flow

```
1. npm run scrape:health
   ↓
2. scraper.js reads SCRAPING-SCHEMA.md
   ↓
3. Scrapes URLs from docs/bacolod/SCRAPING-CHECKLIST.md
   ↓
4. Validates sources against DATA-SOURCES.md
   ↓
5. Outputs to docs/bacolod/BACOLOD-DATA-COLLECTION.md
```

### Content Update Flow

```
1. Claude reads ACTIVE-PHASE.md → Phase 4: Waste Management
   ↓
2. Reads docs/bacolod/BACOLOD-DATA-COLLECTION.md (waste section)
   ↓
3. Updates content/services/waste/*.md
   ↓
4. Adds source from DATA-SOURCES.md
   ↓
5. Updates ACTIVE-PHASE.md (mark tasks complete)
```

### Phase Completion Flow

```
1. Claude completes all Phase 4 tasks
   ↓
2. Updates ACTIVE-PHASE.md:
   - Move Phase 4 to "Completed"
   - Set Phase 5 as "Current"
   - Status: "In Progress"
   ↓
3. Next session: Claude sees Phase 5 is active
   ↓
4. Focuses on Phase 5 tasks only
```

## Token Optimization Strategy

### ❌ Old Approach (6,000+ tokens)

```
Read all of docs/bacolod/           (~3000 tokens)
Read full WORKFLOW.md               (~1500 tokens)
Read SCRAPING-CHECKLIST.md          (~800 tokens)
Read previous scraped data          (~1000 tokens)
Total: ~6,300 tokens per session
```

### ✅ New Approach (~1,000 tokens)

```
Auto-load CONTEXT.md                (~250 tokens)
Auto-load ACTIVE-PHASE.md           (~300 tokens)
Hook output                         (~200 tokens)
Ad-hoc reads (when needed)          (~250 tokens)
Total: ~1,000 tokens per session
```

**Savings: ~84% reduction in context tokens**

## File Update Frequency

| File               | Update When                       |
| ------------------ | --------------------------------- |
| CONTEXT.md         | Rarely (major changes only)       |
| ACTIVE-PHASE.md    | After each phase (~weekly)        |
| DATA-SOURCES.md    | When new sources found (~monthly) |
| SCRAPING-SCHEMA.md | Rarely (format changes only)      |
| RULES.md           | Rarely (new standards emerge)     |
| WORKFLOW.md        | Rarely (process changes)          |
| session-start.sh   | Almost never                      |
| scraper.js         | When features needed              |

## Maintenance Checklist

### Weekly

- [ ] Update ACTIVE-PHASE.md after phase completion
- [ ] Verify scraped data quality in docs/bacolod/
- [ ] Check for new sources to add to DATA-SOURCES.md

### Monthly

- [ ] Review and update DATA-SOURCES.md
- [ ] Verify all sources still accessible
- [ ] Clean up BACOLOD-DATA-COLLECTION.md if too large
- [ ] Check CONTEXT.md still under 250 tokens

### Quarterly

- [ ] Review RULES.md for relevance
- [ ] Update WORKFLOW.md if patterns changed
- [ ] Audit scraper.js for improvements
- [ ] Review token usage and optimize

## Access Patterns

### Claude (Each Session)

1. **Always reads:**
   - CONTEXT.md (via hook)
   - ACTIVE-PHASE.md (via hook or direct)

2. **Reads when needed:**
   - DATA-SOURCES.md (before scraping/citing)
   - SCRAPING-SCHEMA.md (when running scraper)

3. **References but doesn't read:**
   - RULES.md (quotes specific sections if needed)
   - WORKFLOW.md (mentions patterns by name)

4. **Reads from docs/bacolod/ when:**
   - Updating content (reads scraped data)
   - Checking detailed workflow
   - Verifying checklist items

### Human Developers

1. **Setup phase:**
   - QUICK-START.md
   - SETUP-HOOKS.md

2. **Daily work:**
   - ACTIVE-PHASE.md (check current work)
   - DATA-SOURCES.md (find sources)

3. **Reference:**
   - README.md (system overview)
   - FOLDER-STRUCTURE.md (this file)
   - RULES.md (standards)

## Best Practices

### Keep It Lean

- CONTEXT.md must stay under 250 tokens
- Don't duplicate content between .claude/ and docs/bacolod/
- Reference files by name, don't quote entire contents
- Archive old scraped data if files get too large

### Keep It Current

- Update ACTIVE-PHASE.md immediately after phase changes
- Add new sources to DATA-SOURCES.md as discovered
- Mark verified/unverified status on FB links

### Keep It Enforced

- All sources MUST be in DATA-SOURCES.md
- All content MUST have source citations
- All phases MUST be tracked in ACTIVE-PHASE.md
- All scraping MUST follow SCRAPING-SCHEMA.md

---

**Last Updated:** 2026-01-08
**Purpose:** Efficient, maintainable context system for Claude CLI
