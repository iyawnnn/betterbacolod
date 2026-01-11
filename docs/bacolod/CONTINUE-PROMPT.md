# Claude Code CLI - Continue Prompt

## Copy-Paste This Into Claude Code CLI:

```
I'm working on the betterlocalgov-bacolod project. We're customizing a local government services website for Bacolod City, Philippines.

CONTEXT:
- Review docs/bacolod/CUSTOMIZATION-STATUS.md for complete status (58% done, 28/48 files)
- Review .claude/ACTIVE-PHASE.md for current phase tracker
- We just completed Phase 7 (Public Safety) with commits b44aa45, 40e1af1
- All routing issues fixed - 12 service categories working properly

CURRENT STATUS:
✅ Completed Phases 1-7 (28 Bacolod-specific files):
  - Health Services, Business, Education, Waste Management
  - Transportation, Social Welfare, Public Safety

⏳ NEXT PRIORITY: Phase 8 (Legal & Civil) - 4 files needed:
  1. Civil registration (birth/marriage/death certificates)
  2. Legal assistance (PAO, IBP legal aid)
  3. Notarial services
  4. Cedula/Community Tax Certificate

❌ Missing categories (16 files - optional, after Phase 8):
  - Housing & Land Use (3 files) - HIGH priority
  - Environment (2 files) - HIGH priority
  - Infrastructure & Public Works (4 files) - HIGH priority
  - Agriculture & Fisheries (4 files) - MEDIUM priority
  - Disaster Preparedness (3 files) - Overlap with Phase 7

YOUR TASK:
[Choose one of these options:]

OPTION A: Complete Phase 8 (Legal & Civil Services)
- Create 4 comprehensive service files following the Phase 6 & 7 quality standard
- Research Bacolod City agencies: Local Civil Registrar, PAO Bacolod, City Treasurer
- Include specific contact info, procedures, requirements, fees
- Follow workflow in docs/bacolod/PHASE-8-LEGAL-CIVIL.md (if exists)
- Fact-check against bacolodcity.gov.ph and official sources
- Update .claude/ACTIVE-PHASE.md when complete

OPTION B: Polish existing content
- Update 6 index.yaml files to remove generic "your LGU" text
- Replace with Bacolod-specific descriptions
- Affected: housing-land-use, infrastructure-public-works, health-services, education, agriculture-fisheries, business

OPTION C: Fill high-priority missing categories
- Housing & Land Use (3 files) - building permits, zoning, socialized housing
- Environment (2 files) - BENRO clean-up drives, reporting violations
- Infrastructure (4 files) - road repairs, BACIWA water supply, public facilities

IMPORTANT GUIDELINES:
1. Follow the established pattern from Phases 6 & 7 (see existing files in content/services/)
2. Use ONLY verified Bacolod City data from bacolodcity.gov.ph
3. Include specific contact info: phone numbers (034) area code, emails, office locations
4. Reference Philippine laws where applicable (RA numbers)
5. Create detailed, helpful content (200+ lines per file)
6. Add proper sources at the bottom of each file
7. Update index.yaml if creating new files
8. Commit frequently with descriptive messages
9. Use the Co-Authored-By line in commits

HOOKS & WORKFLOW:
- This project has pre-commit hooks (lint-staged) that auto-format code
- Hooks will run automatically on git commit
- Follow the phase-based workflow documented in ACTIVE-PHASE.md
- Update documentation as you complete work

DATA SOURCES TO USE:
- bacolodcity.gov.ph (contact pages, department info)
- bacolodcity.gov.ph/hotlines
- Official Gazette (for Republic Acts)
- Department websites (DepEd, DSWD, etc.)

What option would you like me to work on? Or provide different instructions.
```

---

## How to Use This Prompt:

### Step 1: Open Claude Code CLI

```bash
cd /Users/matt/Random/betterlocalgov-bacolod
claude
```

### Step 2: Paste the Prompt Above

- Copy the entire block between the triple backticks
- Paste into Claude Code CLI
- Add your specific choice at the end (Option A, B, or C)

### Step 3: Example Usage

```bash
# In Claude Code CLI:
claude> [paste the prompt above]
claude> Please work on OPTION A - Complete Phase 8 (Legal & Civil Services)
```

---

## About Hooks in Claude Code

### Git Hooks (Already Configured)

Your project has **lint-staged** hooks configured in `package.json`:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,css,md}": [
    "prettier --write"
  ]
}
```

**What This Does:**

- Automatically runs on `git commit`
- Formats TypeScript/JavaScript files with ESLint + Prettier
- Formats JSON, CSS, and Markdown files with Prettier
- You'll see output like:
  ```
  [STARTED] Running tasks for staged files...
  [COMPLETED] prettier --write
  ```

### Claude Code Hooks (User Prompt Submit)

The system reminders show `UserPromptSubmit hook success` - these are Claude Code's internal hooks that run:

**When They Run:**

- `UserPromptSubmit` - Before processing your message
- `SessionStart` - When starting a new conversation
- `SessionStart:compact` - When continuing from compacted session

**What They Do:**

- Load project context
- Check git status
- Provide recent session history
- Can be customized in `.claude/config` (if you want custom hooks)

---

## Shorter Quick-Start Prompts

### For Phase 8:

```
Continue betterlocalgov-bacolod customization. Read docs/bacolod/CUSTOMIZATION-STATUS.md and .claude/ACTIVE-PHASE.md for context. Complete Phase 8 (Legal & Civil) - create 4 Bacolod-specific service files: civil registration, legal assistance, notarial services, cedula. Follow Phase 6/7 quality standard. Research bacolodcity.gov.ph for agency contacts. Fact-check all data.
```

### For Missing Categories:

```
Continue betterlocalgov-bacolod. Read docs/bacolod/CUSTOMIZATION-STATUS.md. Fill missing high-priority categories: Housing & Land Use (3 files), Environment (2 files), Infrastructure (4 files). Use bacolodcity.gov.ph data. Follow existing file patterns from Phases 6-7.
```

### For Polish:

```
betterlocalgov-bacolod: Update 6 index.yaml files to remove generic "your LGU" text. Replace with Bacolod-specific descriptions. Files: housing-land-use, infrastructure-public-works, health-services, education, agriculture-fisheries, business. Keep descriptions concise (1-2 sentences).
```

---

## Custom Hook Setup (Optional)

If you want to create **custom Claude Code hooks**, create:

### File: `.claude/hooks/user-prompt-submit.sh`

```bash
#!/bin/bash
# Custom hook that runs before Claude processes your message

# Example: Show git status
echo "📊 Git Status:"
git status --short

# Example: Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
  echo "⚠️  You have uncommitted changes"
fi

# Example: Show last commit
echo "📝 Last Commit:"
git log -1 --oneline
```

### Make it executable:

```bash
chmod +x .claude/hooks/user-prompt-submit.sh
```

### Configure in `.claude/config.yaml`:

```yaml
hooks:
  user-prompt-submit: .claude/hooks/user-prompt-submit.sh
  session-start: .claude/hooks/session-start.sh
```

---

## Tips for Working Across Sessions

### 1. Always Reference Documentation

```
Read docs/bacolod/CUSTOMIZATION-STATUS.md first
```

### 2. Git Status in Prompt

```
Check git status and recent commits before starting
```

### 3. Phase Tracking

```
Update .claude/ACTIVE-PHASE.md after completing work
```

### 4. Commit Early & Often

```
Commit after each file or logical unit of work
```

---

## What Gets Preserved Across Sessions

✅ **Automatically Available:**

- Git commit history
- All documentation files
- Code and content files
- Hook configurations

❌ **Not Preserved (Need to Include in Prompt):**

- Conversation context
- Decisions made in previous session
- Current progress within a phase
- What you were planning to do next

**Solution:** That's why the documentation (CUSTOMIZATION-STATUS.md, ACTIVE-PHASE.md) is crucial!

---

## Example Full Workflow

```bash
# Terminal
cd /Users/matt/Random/betterlocalgov-bacolod
claude

# Claude Code CLI
claude> Continue betterlocalgov-bacolod customization. Read docs/bacolod/CUSTOMIZATION-STATUS.md and .claude/ACTIVE-PHASE.md for full context. I want you to complete Phase 8 (Legal & Civil Services). Create 4 comprehensive Bacolod-specific service files following the Phase 6 & 7 quality standard. Research bacolodcity.gov.ph for agency contacts. Include specific phone numbers, emails, procedures, requirements, and fees. Fact-check everything against official sources. Update ACTIVE-PHASE.md when done.

# Claude will then:
# 1. Read the documentation
# 2. Research Bacolod agencies
# 3. Create the 4 service files
# 4. Update documentation
# 5. Commit changes (triggers lint-staged hooks automatically)
# 6. Push to GitHub
```

---

Hope this helps! The key is that **documentation files are your bridge between sessions** - that's why we created detailed CUSTOMIZATION-STATUS.md and ACTIVE-PHASE.md.

Would you like me to create any specific hook scripts for your workflow?
