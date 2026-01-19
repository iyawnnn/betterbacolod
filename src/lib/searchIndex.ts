import { create, load, type Orama } from '@orama/orama';

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
    while (isInitializing) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    return searchDB;
  }

  isInitializing = true;

  try {
    // Load pre-built index from JSON
    const response = await fetch('/search-index.json');
    const indexData = await response.json();

    // Create empty DB with schema
    searchDB = await create({ schema });

    // Restore from saved index
    await load(searchDB, indexData);

    console.log('✅ Search index loaded');
    return searchDB;
  } catch (err) {
    console.error('Failed to load search index:', err);
    // Fallback: create empty DB
    searchDB = await create({ schema });
    return searchDB;
  } finally {
    isInitializing = false;
  }
}

export function getSearchDB() {
  return searchDB;
}
