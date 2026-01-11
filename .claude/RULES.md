# Development Rules

> **Reference only - don't repeat in context**

## 1. Source Attribution (CRITICAL)

**EVERY content file MUST have a source citation:**

```markdown
---

**Source:** [Page Title](https://bacolodcity.gov.ph/page-url/) — Date
```

### Verified Sources Only

✅ **USE ONLY sources from:** `.claude/DATA-SOURCES.md`

❌ **DO NOT USE:**

- Unverified sources
- Third-party sites (without verification)
- Generic content
- AI-generated content

## 2. Content Standards

### Keep It Real

- Use ACTUAL data from official sources
- If specific info unavailable, keep it general
- Don't make up phone numbers, addresses, or requirements
- When in doubt, scrape first, write second

### File Organization

- One service = One file
- Use lowercase-with-dashes for filenames
- Keep structure consistent with existing files
- Update related files together (e.g., English + Tagalog)

### Markdown Format

```markdown
# Service Title

[Service description]

## Requirements

- Requirement 1
- Requirement 2

## Process

1. Step one
2. Step two

## Contact Information

- **Office:** Department Name
- **Location:** Address
- **Phone:** (034) XXX-XXXX

---

**Source:** [Page](URL) — Date
```

## 3. Git Workflow

### Before Committing

1. ✅ Content verified against official source
2. ✅ Source citation added
3. ✅ Tested on localhost:5173
4. ✅ No broken links or formatting issues

### Commit Message Format

```
feat: Update [category] with Bacolod info

- What changed
- What was added/updated
- Source: bacolodcity.gov.ph/page
```

### Branch Strategy

- Work on: `bacolod-customization`
- PR to: `main`
- Keep commits focused and atomic

## 4. Development Workflow

### The Process

1. **Scrape** → Get data from official sources
2. **Document** → Save to `docs/bacolod/BACOLOD-DATA-COLLECTION.md`
3. **Update** → Modify content files in `content/services/`
4. **Verify** → Check on localhost:5173
5. **Cite** → Add source at bottom
6. **Commit** → Only when verified

### Phase-Based Approach

- Complete one phase before moving to next
- Update checklist: `docs/bacolod/BACOLODIZATION-CHECKLIST.md`
- Focus on quality over speed

## 5. Scraping Guidelines

### What to Extract

- ✅ Service names and descriptions
- ✅ Requirements and documents needed
- ✅ Step-by-step processes
- ✅ Contact information (phone, email)
- ✅ Office locations and hours
- ✅ Fees (if applicable)
- ✅ Official Facebook links (verify authenticity)
- ✅ Portal/online service links

### FB Link Verification

- Must be linked from official .gov.ph site, OR
- Must have verified badge, OR
- Must be cross-referenced with official announcements

### Portal Link Collection

- Government portals (\*.gov.ph)
- Online service platforms
- Form download pages
- Department-specific sites

## 6. Code Quality

### TypeScript Standards

- No `any` types unless absolutely necessary
- Proper type definitions for all props
- Use existing types and interfaces

### React Best Practices

- Functional components with hooks
- Keep components focused and single-purpose
- Avoid unnecessary re-renders

### Styling

- Use Tailwind utility classes
- Follow existing design system
- Maintain responsive design

## 7. Testing

### Manual Testing Checklist

- [ ] Service pages load correctly
- [ ] Links work (internal and external)
- [ ] Contact information displays properly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Source citations present

## 8. Claude Context Management

### When Working on Features

1. Read `.claude/CONTEXT.md` first
2. Check `.claude/PROJECT-STATE.md` for current phase
3. Follow `.claude/WORKFLOW.md` for process
4. Update state when phase completes

### Reducing Context Usage

- Claude hooks auto-load essential context
- No need to repeatedly read docs/
- State is tracked in `.claude/PROJECT-STATE.md`
- Refer to rules by file reference, don't repeat

---

**Remember:** Quality > Speed. Source everything. Test everything.

**Last Updated:** 2026-01-08
