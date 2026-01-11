# Bacolodization Checklist 🎯

## ✅ Completed

- [x] Create Bacolod customization guide
- [x] Collect initial data from bacolodcity.gov.ph homepage
- [x] Create `.env.local` with Bacolod info
- [x] Add `.kiro/` to gitignore
- [x] Replace "Lapu-Lapu" with "Bacolod" in all content (basic replacement only)
- [x] Git branch created: `bacolod-customization`
- [x] Organize docs into `docs/bacolod/` folder

## 🚧 In Progress

- [ ] Scrape detailed service information from Bacolod website
- [ ] Update content with actual Bacolod services and details

## 📋 To Do

### Phase 1: Data Collection (Not Started - CRITICAL)

- [ ] Scrape Citizen's Charter for service details
- [ ] Scrape health services from City Health Office page
- [ ] Scrape business services (BOSS, permits)
- [ ] Scrape PESO Bacolod employment services
- [ ] Scrape education/scholarship programs
- [ ] Scrape waste management (BENRO) info
- [ ] Get contact info for all departments
- [ ] Get office locations and hours
- [ ] Get hotlines and emergency contacts

### Phase 2: Content Updates (Not Started)

- [ ] Update health services with Bacolod specifics
- [ ] Update business services with Bacolod specifics
- [ ] Update education services with Bacolod specifics
- [ ] Update waste management with Bacolod specifics
- [ ] Update all office names and locations
- [ ] Update all phone numbers and emails
- [ ] Update all addresses
- [ ] Remove/update Lapu-Lapu specific links (DepEd, etc.)
- [ ] Add Bacolod-specific links and resources

### Phase 3: Branding (Not Started)

- [ ] Replace logo: `public/logo.svg`
- [ ] Update favicon: `public/favicon.ico`
- [ ] Update colors in `tailwind.config.js` (optional)
- [ ] Create Open Graph image: `public/og-image.jpg`

### Phase 4: Configuration (Not Started)

- [ ] Review `src/data/services.yaml` categories
- [ ] Update navigation if needed
- [ ] Update footer information

### Phase 5: Testing (Not Started)

- [ ] Test all pages load correctly
- [ ] Test navigation works
- [ ] Test mobile responsiveness
- [ ] Verify no broken links
- [ ] Check for remaining Lapu-Lapu references

### Phase 6: Deployment (Not Started)

- [ ] Push to GitHub: `git push origin bacolod-customization`
- [ ] Create pull request (optional)
- [ ] Merge to main
- [ ] Deploy to Vercel/hosting

## 📊 Progress

**Overall: ~5% Complete**

- Setup & Config: ✅ 80% (env setup, basic replacement done)
- Data Collection: ⏳ 5% (only homepage scraped)
- Content Updates: ⏳ 0% (just basic name replacement)
- Branding: ⏳ 0%
- Testing: ⏳ 0%
- Deployment: ⏳ 0%

## 🎯 Next Steps (Priority Order)

1. **Scrape Bacolod website** - Get all service details
   - Citizen's Charter
   - Health services
   - Business services (BOSS)
   - PESO employment
   - Education/scholarships
2. **Update content files** - Replace with actual Bacolod info
   - Service descriptions
   - Requirements
   - Contact info
   - Office locations

3. **Test and verify** - Make sure everything works

4. **Deploy** - Push to production

## 📁 Project Structure

```
docs/bacolod/
├── README.md                           # This folder's guide
├── BACOLODIZATION-CHECKLIST.md        # 📋 THE BIBLE - Our todo list
├── BACOLOD-CUSTOMIZATION-GUIDE.md     # How to customize
└── BACOLOD-DATA-COLLECTION.md         # Bacolod data
```

## 🤖 For Kiro CLI

**Always reference `docs/bacolod/` for:**

- Current progress (BACOLODIZATION-CHECKLIST.md)
- Customization steps (BACOLOD-CUSTOMIZATION-GUIDE.md)
- Bacolod data (BACOLOD-DATA-COLLECTION.md)

**Don't hallucinate - check the docs first!**

---

Last updated: January 8, 2026
