
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import InfoBox from '@/components/InfoBox';
import PointsDisplay from '@/components/PointsDisplay';
import CategoryTabs from '@/components/CategoryTabs';
import MarketplaceGrid from '@/components/MarketplaceGrid';
import { Toaster } from '@/components/ui/toaster';

const Index: React.FC = () => {
  const [points, setPoints] = useState(10000);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [claimedItems, setClaimedItems] = useState<string[]>([]);
  
  const handleClaim = (itemId: string, cost: number) => {
    setPoints(prev => prev - cost);
    setClaimedItems(prev => [...prev, itemId]);
  };
  
  return (
    <div className="min-h-screen bg-marketplace-gradient text-white py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <Hero />
        
        <InfoBox visible={activeCategory === null} />
        
        <PointsDisplay points={points} />
        
        <CategoryTabs 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <MarketplaceGrid 
          category={activeCategory} 
          claimedItems={claimedItems} 
          userPoints={points} 
          onClaim={handleClaim} 
        />
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;
