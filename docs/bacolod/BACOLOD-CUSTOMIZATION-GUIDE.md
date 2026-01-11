# Bacolod City Customization Guide

This guide outlines the step-by-step process to customize this starter kit for Bacolod City.

## About This Project

This is a **people-first, task-first** government website inspired by [bettergov.ph](https://www.bettergov.ph/), customized for specific LGUs. Instead of organizing around government departments, it focuses on what citizens need to do: **Apply**, **Get**, **Access**, **Join**, **Report**.

**Key Principles:**

- 🎯 **Task-oriented**: Services named with action verbs (not department names)
- 📱 **Mobile-first**: Works on all devices, low-bandwidth ready
- ♿ **Accessible**: WCAG 2.1 compliant, screen-reader friendly
- 📝 **Easy to maintain**: YAML + Markdown (non-technical editors can update)
- 🌐 **Multilingual**: English, Filipino, and local languages

## Current Status

This project is currently configured for **Lapu-Lapu City**. We need to replace all Lapu-Lapu specific content with Bacolod City information.

## Data Sources

- **Primary Source**: https://bacolodcity.gov.ph/
- **Services & Programs**: Extract from official website
- **Contact Information**: City offices, departments, contact details
- **Officials**: Mayor, Vice Mayor, City Council members

## Step-by-Step Customization Process

### Phase 1: Government Information Setup

**Files to Update:**

- [ ] `src/data/government.yaml` - Basic city information
- [ ] `.env.local` - Environment variables (create from `env.example`)

**Information Needed:**

- City name: Bacolod City
- Region: Region VI (Western Visayas)
- Province: Negros Occidental
- Mayor name and details
- Vice Mayor name
- City population
- City area (km²)
- Established date
- Contact information (main office)
- Social media accounts

### Phase 2: Content Structure Analysis

**Current Service Categories:**

1. Agriculture & Fisheries
2. Business Services
3. Disaster Preparedness
4. Education
5. Environment
6. Garbage & Waste Disposal
7. Health Services
8. Housing & Land Use
9. Infrastructure & Public Works
10. Social Welfare

**Action Items:**

- [ ] Review Bacolod City website for service categories
- [ ] Map existing categories to Bacolod services
- [ ] Identify new categories needed
- [ ] Identify categories to remove/merge

### Phase 3: Service Content Migration

**For Each Service Category:**

1. **Review Current Content**
   - Location: `content/services/[category-name]/`
   - Check `index.yaml` for service list
   - Review `.md` files for content structure

2. **Gather Bacolod Data**
   - Service name and description
   - Office/department responsible
   - Requirements and documents needed
   - Process steps
   - Fees (if any)
   - Contact information
   - Operating hours

3. **Content Template** (from CONTENT-GUIDE.md):

   ```markdown
   # [Service Name] — Bacolod City

   Brief description of the service.

   ---

   ## What You Need to Know

   | Information         | Details                |
   | ------------------- | ---------------------- |
   | **Where**           | [Office/Location Name] |
   | **When**            | [Schedule/Hours]       |
   | **Requirements**    | [What to bring]        |
   | **Cost**            | [Fees - if any]        |
   | **Processing Time** | [How long it takes]    |

   ---

   ## How to Apply

   ### Step 1: [Action]

   - [Specific instruction]

   ### Step 2: [Action]

   - [Specific instruction]

   ---

   ## Contact Information

   - **Office**: [Office Name]
   - **Address**: [Full Address]
   - **Phone**: [Phone Number]
   - **Email**: [Email Address]
   - **Hours**: [Operating Hours]
   ```

### Phase 4: Replace Lapu-Lapu References

**Search and Replace:**

- [ ] "Lapu-Lapu City" → "Bacolod City"
- [ ] "Lapu-Lapu" → "Bacolod"
- [ ] City-specific locations (hospitals, offices, etc.)
- [ ] Phone numbers and contact details
- [ ] Official names and titles

**Files to Check:**

- All `.md` files in `content/services/`
- `src/data/government.yaml`
- `src/data/services.yaml`
- Any hardcoded references in components

### Phase 5: Branding & Assets

**Visual Identity:**

- [ ] Replace logo: `public/logo.svg`
- [ ] Update favicon: `public/favicon.ico`
- [ ] Update colors in `tailwind.config.js` (if needed)
- [ ] Create Open Graph image: `public/og-image.jpg`

**Color Scheme Options:**

- Use Bacolod City's official colors
- Or keep the current professional blue/gray theme

### Phase 6: Testing & Validation

**Content Checklist:**

- [ ] All service pages have accurate information
- [ ] Contact information is verified
- [ ] Links are working
- [ ] No Lapu-Lapu references remain
- [ ] Images have proper alt text
- [ ] Mobile responsiveness works

**Functional Testing:**

- [ ] Navigation works correctly
- [ ] Search functionality (if implemented)
- [ ] Language switching (if multilingual)
- [ ] All pages load without errors

## Data Collection Template

Use this template to organize information from bacolodcity.gov.ph:

### City Information

```yaml
name: 'Bacolod City'
type: 'City'
region: 'Region VI (Western Visayas)'
province: 'Negros Occidental'
mayor: '[Name]'
vice_mayor: '[Name]'
established: '[Year]'
population: '[Number]'
area: '[km²]'
```

### Service Template

```yaml
category: '[Category Name]'
services:
  - name: '[Service Name]'
    slug: '[service-name-slug]'
    description: '[Brief description]'
    office: '[Responsible Office]'
    location: '[Address]'
    contact: '[Phone/Email]'
    hours: '[Operating Hours]'
    requirements:
      - '[Requirement 1]'
      - '[Requirement 2]'
    steps:
      - '[Step 1]'
      - '[Step 2]'
    fees: '[Fee amount or "Free"]'
```

## Next Steps

1. **Gather Data**: Scrape/collect information from bacolodcity.gov.ph
2. **Organize**: Use the templates above to structure the data
3. **Update Files**: Replace content systematically
4. **Test**: Verify all changes work correctly
5. **Deploy**: Push to production

## Resources

- **Content Guide**: See `CONTENT-GUIDE.md` for writing guidelines
- **Content Management**: See `CONTENT-MANAGEMENT.md` for editing instructions
- **Deployment**: See `DEPLOYMENT-GUIDE.md` for publishing steps

## Notes

- Keep content citizen-focused and easy to understand
- Use simple language, avoid jargon
- Include complete contact information
- Verify all information before publishing
- Update regularly to keep information current
