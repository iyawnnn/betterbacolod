import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import { governmentActivitCategories } from '../data/yamlLoader';
import * as LucideIcons from 'lucide-react';
import SEO from '../components/SEO';
import { Card, CardContent } from '../components/ui/Card';
import { useState } from 'react';
import OfficialsSection from '../components/government/OfficialsSection';
import DepartmentsSection from '../components/government/DepartmentsSection';
import BarangaysSection from '../components/government/BarangaysSection';

const Government: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const renderContent = () => {
    if (activeSection === 'officials') {
      return <OfficialsSection />;
    }
    if (activeSection === 'departments') {
      return <DepartmentsSection />;
    }
    if (activeSection === 'barangays') {
      return <BarangaysSection />;
    }
    return null;
  };

  return (
    <>
      <SEO
        title="Government"
        description="Learn about Bacolod City government - officials, departments, and barangays."
        keywords="government, city officials, departments, barangays, Bacolod City"
      />
      <Section className="min-h-[60vh]">
        <div className="text-center mb-10">
          <Heading level={2}>Bacolod City Government</Heading>
          <Text className="text-gray-600 max-w-2xl mx-auto">
            Learn about your city officials, government departments, and
            barangays.
          </Text>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {governmentActivitCategories.categories.map(cat => {
            const CatIcon = LucideIcons[
              cat.icon as keyof typeof LucideIcons
            ] as React.ComponentType<{ className?: string }>;
            const isActive = activeSection === cat.slug;
            return (
              <Card
                key={cat.slug}
                hoverable
                className={`border-t-4 cursor-pointer transition-all ${isActive ? 'border-primary-600 ring-2 ring-primary-200' : 'border-primary-500'}`}
                onClick={() => setActiveSection(isActive ? null : cat.slug)}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <div className="flex gap-2">
                    <div
                      className={`p-3 rounded-md mb-4 self-start ${isActive ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'}`}
                    >
                      {CatIcon && <CatIcon className="h-6 w-6" />}
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 self-center">
                      {cat.category}
                    </h3>
                  </div>
                  <Text className="text-gray-800">{cat.description}</Text>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Content Section */}
        {activeSection && (
          <div className="mt-8">
            <Card>
              <CardContent className="p-6">{renderContent()}</CardContent>
            </Card>
          </div>
        )}
      </Section>
    </>
  );
};

export default Government;
