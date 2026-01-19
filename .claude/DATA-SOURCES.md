# Official Bacolod Data Sources

> **ENFORCE: Only use sources from this list**

## Primary Government Portal

### Main Site

- **Bacolod City Official:** https://bacolodcity.gov.ph

### Online Services & Portals

- **Online Services Portal:** https://onlineservices.bacolodcity.gov.ph/
- **Citizen's Charter:** https://bacolodcity.gov.ph/citizens-charter-2/
- **Download Forms:** https://bacolodcity.gov.ph/downloable-forms/
- **Permits & Services:** https://bacolodcity.gov.ph/?page_id=422
- **Hotlines:** https://bacolodcity.gov.ph/hotlines/
- **Contact Us:** https://bacolodcity.gov.ph/contact-us/

## Department Portals & Pages

### Health

- **City Health Office:** https://bacolodcity.gov.ph/sanitary-and-non-sanitary-permit-requirements/
- **Comprehensive Health Program:** https://bacolodcity.gov.ph/bacolod-city-comprehensive-health-program/
- **Health Services:** https://bacolodcity.gov.ph/health-services/

### Business & Economy

- **Business Permits & Licensing (BPLO):** https://bacolodcity.gov.ph/business-permits-and-licensing-division/
- **Business Incentives:** https://bacolodcity.gov.ph/apply-for-business-incentives/
- **Ease of Doing Business:** https://bacolodcity.gov.ph/cost-of-doing-business/
- **Economic Development:** https://bacolodcity.gov.ph/department-of-local-economic-development-and-investment-promotions/

### Employment

- **PESO Bacolod:** https://bacolodcity.gov.ph/trabaho-sa-peso-bacolod/

### Environment

- **BENRO (Environment & Natural Resources):** https://bacolodcity.gov.ph/bacolod-environment-and-natural-resources/
- **Waste Management:** https://bacolodcity.gov.ph/solid-waste-management/

### Public Safety

- **Bureau of Fire Protection:** https://bacolodcity.gov.ph/bureau-of-fire-protection/
- **Disaster Risk Reduction:** https://bacolodcity.gov.ph/disaster-risk-reduction-management/
- **Traffic Management:** https://bacolodcity.gov.ph/bacolod-traffic-and-transport-management/

### Building & Infrastructure

- **Office of Building Officials (OBO):** https://bacolodcity.gov.ph/office-of-the-building-officials-obo/
- **Engineering Office:** https://bacolodcity.gov.ph/city-engineering-office/

### Agriculture

- **City Agriculture:** https://bacolodcity.gov.ph/city-department-of-agriculture/

### Government Info

- **Departments List:** https://bacolodcity.gov.ph/departments/
- **Mayor's Office:** https://bacolodcity.gov.ph/our-mayor/
- **Vice Mayor:** https://bacolodcity.gov.ph/vice-mayor/
- **City Councilors:** https://bacolodcity.gov.ph/city-councilors/

## Official Facebook Pages

> **MUST be verified or linked from .gov.ph site**

### Verified Pages

- **PESO Bacolod LGU:** https://www.facebook.com/PesoBacolodLGU
- **Bacolod Comprehensive Health Program:** https://www.facebook.com/bacchp2022/

### To Verify (check from official site)

- Bacolod City Government (main)
- Serbisyo Patrol Bacolod
- BTTMD Bacolod (Traffic)
- Bacolod City PIO (Public Information)
- BENRO Bacolod
- Bacolod City Health Office

## Education Portals

- **DepEd Bacolod City Division:** https://www.depedbacolod.net/

## Tourism & Culture

- **Tourism Page:** https://bacolodcity.gov.ph/?page_id=1588
- **Quick Facts:** https://bacolodcity.gov.ph/quick-facts/
- **Awards & Recognition:** https://bacolodcity.gov.ph/awards-and-recognitions/

## Contact Information

- **Main Hotline:** (034) 434-9122
- **All Hotlines:** https://bacolodcity.gov.ph/hotlines/

## External Government Portals

### National Government

- **PhilGeps (Procurement):** https://www.philgeps.gov.ph/
- **PSA Bacolod:** https://psa.gov.ph/bacolod
- **DTI Bacolod:** Check DTI website for Bacolod office

### Regional

- **Western Visayas sites** (if relevant to Bacolod services)

## Scraping Priority

### Tier 1 (Must Have)

- bacolodcity.gov.ph main site
- onlineservices.bacolodcity.gov.ph
- Department pages on .gov.ph
- Verified FB pages

### Tier 2 (Important)

- DepEd Bacolod
- Hotlines and contact pages
- Form downloads

### Tier 3 (Nice to Have)

- Tourism info
- Awards and recognition
- Historical data

## Link Extraction Rules

### Portal Links

✅ **Extract:**

- \*.gov.ph domains
- \*.gov domains
- Online service platforms
- Form submission portals
- Application tracking systems
- Payment gateways (.gov.ph only)

❌ **Skip:**

- Generic social media (except official FB)
- Third-party news sites
- Private company sites (unless official partner)
- Spam/ad links

### Facebook Links

✅ **Extract if:**

- Linked from official .gov.ph site
- Has verified badge
- Mentioned in official announcements
- Government department/office page

❌ **Skip:**

- Personal profiles
- Unofficial fan pages
- News media pages
- Private groups

### Verification Process

1. Check if linked from bacolodcity.gov.ph
2. Verify page name matches department
3. Check for official verification badge
4. Cross-reference with contact info on .gov.ph
5. Note in scraped data: "Verified via [method]"

## Source Citation Format

```markdown
---

**Source:** [Page Title](https://bacolodcity.gov.ph/page/) — Jan 8, 2026
**FB:** [Department Page](https://facebook.com/OfficialPage) (Verified)
**Portal:** [Service Portal](https://portal.gov.ph)
```

## Update Schedule

- Check official site weekly for updates
- Monitor FB pages for announcements
- Update scraped data when changes detected
- Note date of last verification

---

**Last Updated:** 2026-01-08
**Verified:** All links checked and accessible
