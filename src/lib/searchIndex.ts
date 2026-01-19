import { create, insert, type Orama } from '@orama/orama';
import { serviceCategories } from '../data/yamlLoader';

let searchDB: Orama<typeof schema> | null = null;
let isInitializing = false;

const schema = {
  title: 'string',
  description: 'string',
  content: 'string',
  url: 'string',
  category: 'string',
  type: 'string',
} as const;

export async function initializeSearch() {
  // Return existing DB if already initialized
  if (searchDB) return searchDB;

  // Prevent concurrent initialization
  if (isInitializing) {
    // Wait for initialization to complete
    while (isInitializing) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    return searchDB;
  }

  isInitializing = true;

  try {
    searchDB = await create({ schema });

    // Index service categories (only parent, not subcategories to avoid duplicates)
    for (const cat of serviceCategories.categories) {
      await insert(searchDB, {
        title: cat.category,
        description: cat.description,
        content: `${cat.category} ${cat.description}`,
        url: `/services/${cat.slug}`,
        category: cat.category,
        type: 'service',
      });
    }

    // Index main pages
    const pages = [
      {
        title: 'City Officials',
        description: 'Mayor, Vice Mayor, Congressman, City Councilors',
        content:
          'mayor vice mayor councilor officials government greg gasataya claudio puentevella albee benitez',
        url: '/government',
        category: 'Government',
      },
      {
        title: 'City Departments',
        description:
          '35 departments including City Health, Engineering, Treasury',
        content:
          'department office city hall treasury health engineering bplo peso civil registry',
        url: '/government',
        category: 'Government',
      },
      {
        title: 'Barangays',
        description: '61 barangays with captain contact information',
        content:
          'barangay captain brgy village alijis banago bata mandalagan singcang taculing tangub villamonte',
        url: '/government',
        category: 'Government',
      },
      {
        title: 'Transparency',
        description: 'Flood control projects, budget, procurement data',
        content:
          'flood drainage dpwh infrastructure project budget gaa appropriation spending procurement bid philgeps',
        url: '/transparency',
        category: 'Transparency',
      },
    ];

    for (const page of pages) {
      await insert(searchDB, {
        ...page,
        type: 'page',
      });
    }

    return searchDB;
  } finally {
    isInitializing = false;
  }
}

export function getSearchDB() {
  return searchDB;
}
