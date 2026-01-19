# Scraping Output Schema

> **What to extract and how to format it**

## Output Format

All scraped data saved to: `docs/bacolod/BACOLOD-DATA-COLLECTION.md`

### Entry Template

```markdown
## [Service/Page Name]

**URL:** https://bacolodcity.gov.ph/page
**Scraped:** YYYY-MM-DD
**Category:** [Health/Business/Education/etc.]

### Content

[Main content here - structured as found on page]

### Requirements

- Requirement 1
- Requirement 2

### Process/Steps

1. Step 1
2. Step 2

### Contact Information

- **Office:** Department Name
- **Location:** Address
- **Phone:** (034) XXX-XXXX
- **Email:** email@bacolodcity.gov.ph
- **Hours:** Mon-Fri 8AM-5PM

### Links Found

#### Portal Links

- [Portal Name](https://portal.url) - Description

#### Facebook Pages

- [Page Name](https://facebook.com/page) - Verification: [Linked from .gov.ph / Has badge / Unverified]

#### Download Links

- [Form Name](https://bacolodcity.gov.ph/form.pdf)

### Notes

- Any special notes
- Verification status
- Data quality issues

---
```

## Data Extraction Rules

### Text Content

**Extract:**

- Headings (h1-h6) → Preserve hierarchy
- Paragraphs → Clean and format
- Lists (ordered/unordered) → Maintain structure
- Tables → Convert to markdown tables
- Blockquotes → Preserve

**Clean:**

- Remove navigation elements
- Remove ads/sidebar content
- Remove footer boilerplate
- Keep only main content area

### Contact Information

**Pattern Match:**

- Phone: `(034) XXX-XXXX` or `034-XXX-XXXX`
- Email: `*@bacolodcity.gov.ph` or `*@*.gov.ph`
- Address: Look for "Location:", "Address:", street names
- Hours: "Monday-Friday", "8:00 AM", "AM-PM"

**Validate:**

- Phone format is correct
- Email domain is .gov.ph
- Address mentions Bacolod
- Hours are business hours

### Portal Links

**Extract if URL contains:**

- `.gov.ph`
- `.gov`
- `online` + `service`
- `portal`
- `application`
- `registration`
- `form`

**Capture:**

- Full URL
- Link text
- Context (what page links to it)
- Purpose (if clear from context)

### Facebook Links

**Extract pattern:**

```
facebook.com/[PageName]
fb.com/[PageName]
fb.me/[PageName]
```

**Verify:**

1. Is it linked from .gov.ph site? → Note: "Official link"
2. Does page name match department? → Note: "Name match"
3. Can you see verified badge? → Note: "Has badge"
4. Is it a personal profile? → Skip
5. Is it a group? → Skip unless official

**Record as:**

```markdown
- [Page Name](https://facebook.com/page)
  - Verification: Linked from bacolodcity.gov.ph/dept
  - Type: Department page
  - Confidence: High/Medium/Low
```

### Download/Form Links

**Extract if:**

- `.pdf` extension
- `.doc` or `.docx`
- Link text contains: "download", "form", "application"
- In "forms" or "downloads" section

**Capture:**

- File name
- Link text
- File type
- Associated service

## Scraping Script Interface

### Command Line Usage

```bash
# Single page
node .claude/scripts/scraper.js \
  --url "https://bacolodcity.gov.ph/page" \
  --output "docs/bacolod/BACOLOD-DATA-COLLECTION.md" \
  --append

# Multiple pages from checklist
node .claude/scripts/scraper.js \
  --checklist "docs/bacolod/SCRAPING-CHECKLIST.md" \
  --category "health" \
  --extract-fb \
  --extract-portals \
  --verify-links

# Full site crawl (careful!)
node .claude/scripts/scraper.js \
  --crawl "https://bacolodcity.gov.ph" \
  --max-depth 2 \
  --max-pages 50 \
  --extract-all
```

### Options

- `--url <url>` - Single page to scrape
- `--checklist <file>` - Scrape URLs from checklist
- `--category <name>` - Filter by category
- `--output <file>` - Output file (default: BACOLOD-DATA-COLLECTION.md)
- `--append` - Append to existing file
- `--extract-fb` - Extract Facebook links
- `--extract-portals` - Extract portal/gov links
- `--verify-links` - Check if links are accessible
- `--crawl <url>` - Crawl site from URL
- `--max-depth <n>` - Max crawl depth
- `--max-pages <n>` - Max pages to scrape

## Output Quality Checks

### Before Saving

- [ ] All required fields present
- [ ] URLs are valid and accessible
- [ ] Contact info follows format
- [ ] FB links have verification notes
- [ ] Portal links are categorized
- [ ] Content is clean (no HTML tags)
- [ ] Markdown formatting is correct
- [ ] Date is current
- [ ] Category is set

### Validation Rules

**Must Have:**

- URL
- Scraped date
- Category
- At least one section (Content/Requirements/Process)

**Should Have:**

- Contact information (if service-related)
- Links section (if links found)
- Clear structure

**Nice to Have:**

- Notes section
- Verification status
- Data quality assessment

## Error Handling

### If page not accessible:

```markdown
## [Service Name]

**URL:** https://bacolodcity.gov.ph/page
**Status:** ❌ Not Accessible
**Error:** [404 / Timeout / etc.]
**Checked:** YYYY-MM-DD

**Action Required:** Verify URL, check if page moved
```

### If content unclear:

```markdown
### Notes

⚠️ Content structure unclear - manual review needed
⚠️ Possible outdated information - verify with office
⚠️ Multiple interpretations - needs clarification
```

## Update Workflow

1. **Scrape** → Run script, generate output
2. **Review** → Check output quality
3. **Verify** → Validate links and contact info
4. **Enhance** → Add verification notes for FB links
5. **Save** → Append to BACOLOD-DATA-COLLECTION.md
6. **Use** → Reference when updating content files

---

**Last Updated:** 2026-01-08
