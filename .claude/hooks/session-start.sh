#!/bin/bash

# Claude CLI Session Start Hook
# Auto-loads minimal context for betterlocalgov-bacolod project

CONTEXT_DIR=".claude"

cat <<EOF
📋 **Bacolod Project Context Loaded**

**Project:** BetterLocalGov Bacolod customization
**Branch:** bacolod-customization → main
**Work Area:** content/services/

**Core Files:**
- Context: ${CONTEXT_DIR}/CONTEXT.md
- Active Phase: ${CONTEXT_DIR}/ACTIVE-PHASE.md
- Data Sources: ${CONTEXT_DIR}/DATA-SOURCES.md
- Scraping Schema: ${CONTEXT_DIR}/SCRAPING-SCHEMA.md

**Quick Commands:**
\`\`\`bash
npm run dev                    # Start dev server
node .claude/scripts/scraper.js --url "URL"   # Scrape a page
\`\`\`

**Read these files for full context:**
- .claude/CONTEXT.md (project overview)
- .claude/ACTIVE-PHASE.md (current work)
- .claude/RULES.md (development standards)

**Remember:**
1. ALWAYS cite sources from DATA-SOURCES.md
2. Follow SCRAPING-SCHEMA.md for data extraction
3. Update ACTIVE-PHASE.md after completing tasks
4. One phase at a time

---
EOF
