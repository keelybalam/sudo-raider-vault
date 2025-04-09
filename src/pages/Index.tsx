
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import InfoBox from '@/components/InfoBox';
import PointsDisplay from '@/components/PointsDisplay';
import CategoryTabs from '@/components/CategoryTabs';
import MarketplaceGrid from '@/components/MarketplaceGrid';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { marketplaceData } from '@/data/marketplace';

const Index: React.FC = () => {
  const [points, setPoints] = useState(10000);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [claimedItems, setClaimedItems] = useState<string[]>([]);
  const [showingClaimed, setShowingClaimed] = useState(false);
  
  const handleClaim = (itemId: string, cost: number) => {
    setPoints(prev => prev - cost);
    setClaimedItems(prev => [...prev, itemId]);
  };
  
  const toggleClaimedItems = () => {
    setShowingClaimed(prev => !prev);
    setActiveCategory(null);
  };
  
  const claimedItemsData = marketplaceData.filter(item => claimedItems.includes(item.id));
  
  return (
    <div className="min-h-screen bg-marketplace-gradient text-white py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <Hero />
        
        <InfoBox visible={activeCategory === null && !showingClaimed} />
        
        <PointsDisplay points={points} />
        
        <div className="flex justify-between items-center mb-6">
          <CategoryTabs 
            activeCategory={showingClaimed ? null : activeCategory} 
            setActiveCategory={(category) => {
              setActiveCategory(category);
              setShowingClaimed(false);
            }} 
          />
          
          <Button 
            variant={showingClaimed ? "default" : "outline"}
            onClick={toggleClaimedItems}
            className="ml-4"
          >
            {showingClaimed ? 'Back to Shop' : `My Items (${claimedItems.length})`}
          </Button>
        </div>
        
        {showingClaimed ? (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-6">My Claimed Items</h2>
            {claimedItemsData.length === 0 ? (
              <div className="text-center py-12 bg-black/20 rounded-xl">
                <p className="text-xl">You haven't claimed any items yet.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setShowingClaimed(false)}
                >
                  Browse Marketplace
                </Button>
              </div>
            ) : (
              <MarketplaceGrid 
                category="claimed" 
                claimedItems={claimedItems} 
                userPoints={points} 
                onClaim={handleClaim} 
                items={claimedItemsData}
              />
            )}
          </div>
        ) : (
          <MarketplaceGrid 
            category={activeCategory} 
            claimedItems={claimedItems} 
            userPoints={points} 
            onClaim={handleClaim} 
          />
        )}
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;
