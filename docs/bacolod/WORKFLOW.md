# Bacolod Project Workflow 🔄

## 📋 Simple Approach

**Focus: Get the site working with Bacolod content**

---

## 🔗 Official Sources (ALWAYS USE THESE)

### Primary Source

- **Bacolod City Government**: [bacolodcity.gov.ph](https://bacolodcity.gov.ph)

### Department Pages

- **Citizen's Charter**: [bacolodcity.gov.ph/citizens-charter-2/](https://bacolodcity.gov.ph/citizens-charter-2/)
- **BPLO**: [bacolodcity.gov.ph/business-permits-and-licensing-division/](https://bacolodcity.gov.ph/business-permits-and-licensing-division/)
- **City Health Office**: [bacolodcity.gov.ph/sanitary-and-non-sanitary-permit-requirements/](https://bacolodcity.gov.ph/sanitary-and-non-sanitary-permit-requirements/)
- **BENRO (Environment)**: [bacolodcity.gov.ph/bacolod-environment-and-natural-resources/](https://bacolodcity.gov.ph/bacolod-environment-and-natural-resources/)
- **Online Services**: [onlineservices.bacolodcity.gov.ph](https://onlineservices.bacolodcity.gov.ph/)

### Facebook Pages (for announcements)

- **PESO Bacolod City** - scholarship & job announcements
- **Bacolod City Government** - official news
- **Serbisyo Patrol** - service updates

### Hotlines

- **Main**: (034) 434-9122
- **Hotlines Page**: [bacolodcity.gov.ph/hotlines/](https://bacolodcity.gov.ph/hotlines/)

---

## 🎯 Content Workflow

### 1. Scrape

- Get info from bacolodcity.gov.ph
- Check news articles for recent updates
- Save to `docs/bacolod/BACOLOD-DATA-COLLECTION.md`

### 2. Update

- Change content files in `content/services/`
- Keep info general if specific details unavailable
- **ALWAYS add source at bottom of file**

### 3. Verify

- Cross-check with official site
- Test on localhost:5173

### 4. Commit

- Only when content is verified and working

---

## 📝 Source Attribution (REQUIRED)

**Every content file MUST have source at the bottom:**

```markdown
---

**Source:** [Article Title](https://bacolodcity.gov.ph/specific-article/) — Date
```

Examples:

- News article: `[Bacolod LGU Releases...](https://bacolodcity.gov.ph/bacolod-lgu-...) — December 24, 2025`
- Department page: `[Citizen's Charter](https://bacolodcity.gov.ph/citizens-charter-2/)`
- General: `[bacolodcity.gov.ph](https://bacolodcity.gov.ph)`

---

## 🔄 Git Workflow

```bash
# After updating content
git add content/services/
git commit -m "feat: Update [category] with Bacolod info

- What changed
- Source: bacolodcity.gov.ph/specific-page"
```

---

## 📊 Progress

- ✅ Phase 1: Health Services (4 files)
- ✅ Phase 2: Business Services (4 files)
- ✅ Phase 3: Education Services (4 files)
- ⬜ Phase 4: Waste Management (4 files)

---

**Keep it simple. Always cite sources. Focus on the site.**

Last updated: January 8, 2026
