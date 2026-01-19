# Quick Start Guide - Claude Context System

> **Get up and running in 5 minutes**

## First Time Setup

### 1. Enable Hooks (One-Time)

```bash
# Make hook executable
chmod +x .claude/hooks/session-start.sh

# Create Claude Code settings (if not exists)
mkdir -p ~/.config/claude-code/

# Add hook configuration
cat > ~/.config/claude-code/settings.json <<EOF
{
  "hooks": {
    "sessionStart": {
      "command": "\${workspaceFolder}/.claude/hooks/session-start.sh",
      "enabled": true
    }
  }
}
EOF
```

### 2. Test Hook

```bash
bash .claude/hooks/session-start.sh
```

You should see the context summary.

### 3. Start Claude Session

```bash
claude-code chat
```

Context should auto-load!

## Daily Workflow

### Starting Work

1. **Claude reads auto-loaded context:**
   - `.claude/CONTEXT.md` (via hook)
   - `.claude/ACTIVE-PHASE.md` (current work)

2. **You say:** "Continue with current phase"

3. **Claude:**
   - Checks ACTIVE-PHASE.md
   - Reads DATA-SOURCES.md for sources
   - Follows WORKFLOW.md pattern
   - Updates content or scrapes data

### Scraping Data

```bash
# Quick scrape single page
npm run scrape -- --url "https://bacolodcity.gov.ph/page" --extract-fb --extract-portals --append

# Scrape health category from checklist
npm run scrape:health

# Scrape business category
npm run scrape:business

# Custom scrape with all options
npm run scrape -- \
  --url "https://bacolodcity.gov.ph/permits" \
  --extract-fb \
  --extract-portals \
  --output "docs/bacolod/BACOLOD-DATA-COLLECTION.md" \
  --append
```

### Updating Content

1. **Claude scrapes data** (if needed)
2. **Claude reads scraped data** from `docs/bacolod/BACOLOD-DATA-COLLECTION.md`
3. **Claude updates content files** in `content/services/`
4. **Claude adds source citation** at bottom of each file
5. **You test:** `npm run dev` → Check localhost:5173
6. **Claude commits** with proper message format

### Completing a Phase

When phase is done:

1. **Claude updates** `.claude/ACTIVE-PHASE.md`:
   - Move current phase to "Completed"
   - Activate next phase
   - Set status to "In Progress"

2. **Next session:** Claude picks up new phase automatically

## Common Tasks

### Check Current Phase

```bash
cat .claude/ACTIVE-PHASE.md | grep "Current Phase" -A 5
```

### View Data Sources

```bash
cat .claude/DATA-SOURCES.md | grep "^- \*\*" | head -20
```

### See Recent Scrapes

```bash
tail -100 docs/bacolod/BACOLOD-DATA-COLLECTION.md
```

### Verify Source Citations

```bash
grep -r "**Source:**" content/services/ | wc -l
```

## File Reference Quick Map

| Task                 | File to Check                             |
| -------------------- | ----------------------------------------- |
| What to work on?     | `.claude/ACTIVE-PHASE.md`                 |
| What sources to use? | `.claude/DATA-SOURCES.md`                 |
| How to scrape?       | `.claude/SCRAPING-SCHEMA.md`              |
| Development rules?   | `.claude/RULES.md`                        |
| Workflow pattern?    | `.claude/WORKFLOW.md`                     |
| Full checklist?      | `docs/bacolod/SCRAPING-CHECKLIST.md`      |
| Scraped data?        | `docs/bacolod/BACOLOD-DATA-COLLECTION.md` |

## Claude Interaction Pattern

### ✅ Efficient (Low Context)

```
User: Work on health services

Claude:
- Reads ACTIVE-PHASE.md (sees Phase 4: Waste Management)
- "I see current phase is Waste Management, not health. Should I switch phases or did you mean waste management?"

User: Oh right, continue with waste management

Claude:
- Checks DATA-SOURCES.md for waste mgmt sources
- Scrapes if needed
- Updates content files
- Cites sources
- Updates ACTIVE-PHASE.md when done
```

### ❌ Inefficient (High Context)

```
User: Work on health services

Claude:
- Re-reads all of docs/bacolod/
- Reads full WORKFLOW.md
- Repeats all rules
- Quotes entire DATA-SOURCES.md
- Eventually gets to work
```

## Tips for Efficient Sessions

### For Claude

1. **Don't repeat file contents** - Reference by name
2. **Read only active phase data** - Skip completed phases
3. **Update state immediately** - Keep ACTIVE-PHASE.md current
4. **Check DATA-SOURCES.md** - Before scraping/citing

### For You

1. **Trust the system** - Context is auto-loaded
2. **Update ACTIVE-PHASE.md** - When priorities change
3. **Add new sources** - To DATA-SOURCES.md immediately
4. **Keep CONTEXT.md minimal** - Under 250 tokens

## Troubleshooting

### Hook not working?

```bash
# Test manually
bash .claude/hooks/session-start.sh

# Check permissions
ls -l .claude/hooks/session-start.sh

# Fix permissions
chmod +x .claude/hooks/session-start.sh
```

### Scraper not working?

```bash
# Check Node.js
node --version  # Should be v14+

# Test scraper
node .claude/scripts/scraper.js --url "https://bacolodcity.gov.ph" --append
```

### Claude not following context?

- Verify CONTEXT.md and ACTIVE-PHASE.md exist
- Check hook ran (should see output in first message)
- Manually tell Claude to read specific file

## Next Steps

1. ✅ Setup complete? Start scraping: `npm run scrape:health`
2. ✅ Data scraped? Update content files
3. ✅ Content updated? Test locally: `npm run dev`
4. ✅ Looks good? Commit changes
5. ✅ Phase done? Update `.claude/ACTIVE-PHASE.md`

---

**Need help?** Check `.claude/README.md` or `.claude/SETUP-HOOKS.md`

**Last Updated:** 2026-01-08
