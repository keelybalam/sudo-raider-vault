
import React from 'react';
import MarketplaceItem from './MarketplaceItem';
import { getCategoryItems, MarketplaceItem as ItemType } from '../data/marketplace';

interface MarketplaceGridProps {
  category: string | null;
  claimedItems: string[];
  userPoints: number;
  onClaim: (itemId: string, cost: number) => void;
  items?: ItemType[];
}

const MarketplaceGrid: React.FC<MarketplaceGridProps> = ({ 
  category, 
  claimedItems, 
  userPoints, 
  onClaim,
  items
}) => {
  if (!category && !items) return null;
  
  const displayItems = items || (category ? getCategoryItems(category) : []);
  
  if (displayItems.length === 0) {
    return <div className="text-center py-8">No items available in this category.</div>;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {displayItems.map((item: ItemType) => (
        <MarketplaceItem
          key={item.id}
          item={item}
          onClaim={onClaim}
          isClaimed={claimedItems.includes(item.id)}
          userPoints={userPoints}
        />
      ))}
    </div>
  );
};

export default MarketplaceGrid;
