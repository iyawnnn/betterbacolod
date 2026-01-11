import Section from '../components/ui/Section';
import { useParams } from 'react-router-dom';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import {
  governmentActivitCategories,
  getCategorySubcategories,
  type Subcategory,
} from '../data/yamlLoader';
import * as LucideIcons from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import ListItem from '../components/ui/ListItem';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const Government: React.FC = () => {
  const { category } = useParams();
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(false);

  const getCategory = () => {
    return governmentActivitCategories.categories.find(
      c => c.slug === category
    );
  };

  const categoryData = getCategory();
  const Icon = categoryData
    ? (LucideIcons[
        categoryData.icon as keyof typeof LucideIcons
      ] as React.ComponentType<{ className?: string }>)
    : null;

  useEffect(() => {
    if (category && categoryData) {
      setLoading(true);
      getCategorySubcategories(category)
        .then(setSubcategories)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [category, categoryData]);

  // Landing page - show all categories as cards
  if (!category) {
    return (
      <>
        <SEO
          title="Government"
          description={`Learn about the ${import.meta.env.VITE_GOVERNMENT_NAME} government - officials, departments, and barangays.`}
          keywords="government, city officials, departments, barangays"
        />
        <Section>
          <Heading level={2}>Bacolod City Government</Heading>
          <Text className="text-gray-600 mb-6">
            Learn about your city officials, government departments, and
            barangays.
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {governmentActivitCategories.categories.map(cat => {
              const CatIcon = LucideIcons[
                cat.icon as keyof typeof LucideIcons
              ] as React.ComponentType<{ className?: string }>;
              return (
                <Card
                  key={cat.slug}
                  hoverable
                  className="border-t-4 border-primary-500"
                >
                  <Link to={`/government/${cat.slug}`}>
                    <CardContent className="flex flex-col h-full p-6">
                      <div className="flex gap-2">
                        <div className="bg-primary-100 text-primary-600 p-3 rounded-md mb-4 self-start">
                          {CatIcon && <CatIcon className="h-6 w-6" />}
                        </div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 self-center">
                          {cat.category}
                        </h3>
                      </div>
                      <Text className="text-gray-800">{cat.description}</Text>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </Section>
      </>
    );
  }

  // Category not found
  if (!categoryData) {
    return (
      <Section className="p-3 mb-12">
        <Breadcrumbs className="mb-8" />
        <div className="flex flex-col items-center justify-center h-full p-6">
          <Heading level={2}>Category not found</Heading>
          <Text className="text-gray-600 mb-6">
            The category you are looking for does not exist.
          </Text>
        </div>
      </Section>
    );
  }

  // Category detail page
  return (
    <>
      <SEO
        title={categoryData.category}
        description={categoryData.description}
        keywords={`${categoryData.category}, government, Bacolod City`}
      />
      <Section className="p-3 mb-12">
        <Breadcrumbs className="mb-8" />
        {Icon && <Icon className="h-8 w-8 mb-4 text-primary-600 rounded-md" />}
        <Heading>{categoryData.category}</Heading>
        <Text className="text-gray-600 mb-6">{categoryData.description}</Text>

        {loading ? (
          <div className="flex justify-center items-center p-8">
            <Text>Loading...</Text>
          </div>
        ) : (
          <div className="space-y-4">
            {subcategories.map(subcategory => (
              <ListItem
                key={subcategory.slug}
                title={subcategory.name}
                category={categoryData.category}
                description={subcategory.description || ''}
                href={`/${subcategory.slug}`}
              />
            ))}
          </div>
        )}
      </Section>
    </>
  );
};

export default Government;
