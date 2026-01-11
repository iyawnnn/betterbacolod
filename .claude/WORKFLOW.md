# Claude Development Workflow

> **How Claude should work on this project**

## Session Start Protocol

When a new Claude session starts:

1. **Auto-load context** via hooks (`.claude/hooks/session-start.sh`)
2. **Read state** from `.claude/PROJECT-STATE.md`
3. **Continue current phase** or ask user for next task

## Task Execution Flow

### 1. Receive Task

```
User: "Update health services with Bacolod data"
```

### 2. Load Context (Auto)

- `.claude/CONTEXT.md` → Project overview
- `.claude/PROJECT-STATE.md` → Current phase and todos
- `.claude/RULES.md` → Development standards

### 3. Plan Phase

```markdown
I'll update health services. Current approach:

1. Check if data already scraped in docs/bacolod/
2. If not, scrape from bacolodcity.gov.ph
3. Update content files
4. Verify and cite sources
```

### 4. Execute Phase

**For Scraping Tasks:**

```bash
# Use the scraping script
node .claude/scripts/scraper.js \
  --url "https://bacolodcity.gov.ph/page" \
  --extract-fb-links \
  --extract-portals \
  --output "docs/bacolod/BACOLOD-DATA-COLLECTION.md"
```

**For Content Updates:**

1. Read existing content file
2. Read scraped data from docs/bacolod/
3. Update with Bacolod-specific info
4. Add source citation
5. Verify on localhost:5173

### 5. Verify Phase

- [ ] Content accurate to source
- [ ] Source cited at bottom
- [ ] Links work
- [ ] No formatting issues
- [ ] Tested locally

### 6. Commit Phase

```bash
git add content/services/[files]
git commit -m "feat: Update [category] with Bacolod info

- Updated [specific files]
- Added [what was added]
- Source: bacolodcity.gov.ph/page"
```

### 7. Update State

Update `.claude/PROJECT-STATE.md` with:

- Completed items
- Current phase progress
- Next steps

## Phase-Based Development

### Phase Structure

Each phase focuses on a service category:

- Health Services
- Business Services
- Education Services
- Waste Management
- etc.

### Phase Workflow

```
Phase Start
  ↓
Scrape Official Data → Save to docs/bacolod/
  ↓
Update Content Files → content/services/[category]/
  ↓
Verify Locally → npm run dev
  ↓
Add Source Citations
  ↓
Commit Changes
  ↓
Update PROJECT-STATE.md
  ↓
Phase Complete
```

## Scraping Workflow

### Quick Scrape (Single Page)

```bash
node .claude/scripts/scraper.js \
  --url "https://bacolodcity.gov.ph/page" \
  --append
```

### Deep Scrape (Multiple Pages)

```bash
# Use the checklist from docs/bacolod/SCRAPING-CHECKLIST.md
node .claude/scripts/scraper.js \
  --checklist "docs/bacolod/SCRAPING-CHECKLIST.md" \
  --phase "health" \
  --extract-fb-links \
  --extract-portals
```

### What Gets Extracted

- Main content (headings, paragraphs, lists)
- Contact information (phone, email, address)
- Requirements and processes
- Facebook page links (verified only)
- Portal/online service links
- Download/form links

## Context Reduction Strategy

### ❌ Old Way (High Context)

```
Claude reads entire docs/ folder every session
Claude re-reads all documentation
User has to explain project context
```

### ✅ New Way (Low Context)

```
Hooks auto-load .claude/CONTEXT.md
Claude checks .claude/PROJECT-STATE.md for current phase
Claude follows .claude/RULES.md and .claude/WORKFLOW.md
Only reads specific files when needed
```

### File Reading Rules

**Read Every Session:**

- `.claude/CONTEXT.md` (via hooks)
- `.claude/PROJECT-STATE.md` (for current state)

**Read When Needed:**

- `.claude/RULES.md` (reference only, don't repeat)
- `.claude/WORKFLOW.md` (reference only, don't repeat)
- `docs/bacolod/BACOLOD-DATA-COLLECTION.md` (when updating content)
- Specific content files being modified

**Don't Read Unless Asked:**

- Existing docs/bacolod/ files (unless updating them)
- Source code (unless debugging/modifying)
- Package files (unless installing dependencies)

## Feature Development Pattern

### New Feature Request

```
User: "Add [feature]"
```

### Claude Response Pattern

```markdown
I'll add [feature]. Here's my approach:

1. [Step 1]
2. [Step 2]
3. [Step 3]

I'll reference:

- .claude/RULES.md for standards
- .claude/CONTEXT.md for project structure

Proceeding with implementation...
```

### Implementation

1. Follow rules in `.claude/RULES.md`
2. Update state in `.claude/PROJECT-STATE.md`
3. Commit with proper message format
4. Update relevant documentation

## Hook Integration

### Session Start Hook

Located: `.claude/hooks/session-start.sh`

Automatically loads:

- Project context
- Current phase
- Active todos

### User Prompt Submit Hook

- Could validate commit messages
- Could check for source citations
- Could verify file changes match rules

## Multi-Session Continuity

### Problem

Claude loses context between sessions

### Solution

1. State persisted in `.claude/PROJECT-STATE.md`
2. Rules persisted in `.claude/RULES.md`
3. Hooks reload context automatically
4. Claude picks up where it left off

### Example

```
Session 1: Complete Phase 1 (Health Services)
  → Update PROJECT-STATE.md with completion

Session 2: Claude reads PROJECT-STATE.md
  → "I see Phase 1 is complete. Ready for Phase 2 (Business Services)?"
```

## Error Recovery

### Scraping Fails

1. Check URL is accessible
2. Verify site structure hasn't changed
3. Try manual extraction
4. Document issue in PROJECT-STATE.md

### Content Verification Fails

1. Re-check official source
2. Verify source citation is correct
3. Fix issues
4. Re-verify locally

### Commit Fails

1. Check git status
2. Verify changes are staged
3. Ensure commit message follows format
4. Retry

---

**Remember:** Context files are the source of truth. Update them as project evolves.

**Last Updated:** 2026-01-08
