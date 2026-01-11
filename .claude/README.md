# .claude/ - Claude Context System

> **Minimal context for efficient Claude CLI sessions**

## Purpose

This folder contains context files that Claude CLI automatically loads to:

1. Reduce token usage per session
2. Maintain project continuity across sessions
3. Enforce data source standards
4. Enable phase-based development

## Folder Structure

```
.claude/
├── README.md              # This file
├── CONTEXT.md             # Core context (<250 tokens) - ALWAYS READ
├── ACTIVE-PHASE.md        # Current phase tracker - READ EACH SESSION
├── DATA-SOURCES.md        # Official sources ENFORCED list
├── SCRAPING-SCHEMA.md     # What/how to extract from sources
├── RULES.md               # Development standards (reference only)
├── WORKFLOW.md            # How Claude should work (reference only)
├── hooks/
│   └── session-start.sh   # Auto-loads context on session start
└── scripts/
    └── scraper.js         # Web scraping tool
```

## File Usage Guide

### Always Read (Auto-loaded via hooks)

- `CONTEXT.md` - Essential project info
- `ACTIVE-PHASE.md` - What to work on now

### Reference When Needed

- `DATA-SOURCES.md` - When verifying sources
- `SCRAPING-SCHEMA.md` - When scraping data
- `RULES.md` - When uncertain about standards
- `WORKFLOW.md` - When planning work

### Never Read Directly

- Checklists (in `docs/bacolod/`)
- Scraped data (in `docs/bacolod/BACOLOD-DATA-COLLECTION.md`)
- Other docs (only when specifically needed)

## Hook System

### Session Start Hook

**File:** `hooks/session-start.sh`
**Triggers:** When Claude CLI session starts
**Action:** Displays context summary and key file locations

### To Enable Hooks in Claude CLI

Add to your Claude Code settings:

```json
{
  "hooks": {
    "session_start": {
      "command": "./.claude/hooks/session-start.sh",
      "enabled": true
    }
  }
}
```

## Scraping System

### Quick Usage

```bash
# Single page
node .claude/scripts/scraper.js --url "https://bacolodcity.gov.ph/page" --append

# From checklist (specific category)
node .claude/scripts/scraper.js \
  --checklist "docs/bacolod/SCRAPING-CHECKLIST.md" \
  --category "health" \
  --extract-fb \
  --extract-portals

# Full site crawl (careful!)
node .claude/scripts/scraper.js \
  --crawl "https://bacolodcity.gov.ph" \
  --max-depth 2 \
  --max-pages 20
```

### Output

All scraped data goes to: `docs/bacolod/BACOLOD-DATA-COLLECTION.md`

## Phase System

### How It Works

1. Only ONE phase active at a time
2. Phase defined in `ACTIVE-PHASE.md`
3. Claude focuses on current phase only
4. Complete phase → Update `ACTIVE-PHASE.md` → Move to next

### Phase Workflow

```
Read ACTIVE-PHASE.md
  ↓
Work on current phase tasks
  ↓
Complete phase
  ↓
Update ACTIVE-PHASE.md (move to completed, activate next)
  ↓
Repeat
```

## Context Reduction Strategy

### ❌ Old Way (Inefficient)

- Read all docs every session
- Repeat rules and workflows
- Load full checklists
- High token usage

### ✅ New Way (Efficient)

- Hooks load minimal context
- Reference files by name, don't repeat content
- Only read active phase data
- ~80% token reduction

## Token Budget

**Target per session:** <5,000 tokens for context

**Breakdown:**

- CONTEXT.md: ~250 tokens
- ACTIVE-PHASE.md: ~300 tokens
- Hook output: ~200 tokens
- Ad-hoc reads: ~500 tokens
- **Total:** ~1,250 tokens (vs ~6,000+ before)

## Maintenance

### When to Update

**CONTEXT.md**

- Project structure changes
- New major directories
- Key command changes

**ACTIVE-PHASE.md**

- After completing each phase
- When starting new phase
- When phase tasks change

**DATA-SOURCES.md**

- New official portals discovered
- FB pages verified
- Sources deprecated
- Monthly verification check

**SCRAPING-SCHEMA.md**

- Output format changes
- New data types to extract
- Validation rules change

**RULES.md**

- Development standards change
- New patterns emerge
- Quality issues discovered

## Best Practices

### For Claude

1. Read CONTEXT.md and ACTIVE-PHASE.md at start
2. Reference other files by name, don't quote full content
3. Update ACTIVE-PHASE.md when completing milestones
4. Check DATA-SOURCES.md before scraping/updating content
5. Follow SCRAPING-SCHEMA.md for data extraction

### For Humans

1. Keep CONTEXT.md under 250 tokens
2. Update ACTIVE-PHASE.md after each phase
3. Add new sources to DATA-SOURCES.md immediately
4. Review scraped data before using in content
5. Keep hooks simple and fast

## Troubleshooting

### Hook not running?

- Check if hook is executable: `chmod +x .claude/hooks/session-start.sh`
- Verify Claude Code settings include hook configuration
- Check hook script has no errors: `bash .claude/hooks/session-start.sh`

### Scraper not working?

- Check URL is accessible: `curl -I "URL"`
- Verify Node.js is installed: `node --version`
- Run in verbose mode: `node .claude/scripts/scraper.js --url "URL" --verbose`

### Context not loading?

- Verify files exist in `.claude/`
- Check file permissions
- Manually read CONTEXT.md to verify content

## Integration with Existing Docs

This `.claude/` system **complements** existing docs:

- `docs/bacolod/` - Detailed workflows, checklists, scraped data
- `.claude/` - Minimal context, automation, phase tracking

**Don't duplicate!** Reference docs from .claude files, don't copy content.

---

**Created:** 2026-01-08
**Purpose:** Efficient, phase-based development with enforced source standards
