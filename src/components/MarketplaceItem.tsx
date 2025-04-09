
import React from 'react';
import { MarketplaceItem as ItemType } from '../data/marketplace';
import { getCategoryColor } from '../data/marketplace';
import { useToast } from '@/components/ui/use-toast';

interface MarketplaceItemProps {
  item: ItemType;
  onClaim: (itemId: string, cost: number) => void;
  isClaimed: boolean;
  userPoints: number;
}

const MarketplaceItem: React.FC<MarketplaceItemProps> = ({ 
  item, 
  onClaim, 
  isClaimed,
  userPoints 
}) => {
  const { toast } = useToast();
  const categoryColor = getCategoryColor(item.category);
  
  const handleClaim = () => {
    if (isClaimed) {
      toast({
        title: "Already claimed",
        description: "You've already claimed this item.",
        variant: "destructive",
      });
      return;
    }
    
    if (userPoints < item.cost) {
      toast({
        title: "Not enough points",
        description: `You need ${item.cost.toLocaleString()} points to claim this item.`,
        variant: "destructive",
      });
      return;
    }
    
    onClaim(item.id, item.cost);
    toast({
      title: "Item claimed!",
      description: `You've successfully claimed ${item.name}`,
    });
  };
  
  return (
    <div className={`marketplace-item ${isClaimed ? 'opacity-75' : ''}`}>
      <h3 className="text-lg font-bold mb-2">{item.name}</h3>
      <p className="text-sm text-muted-foreground mb-4 min-h-[60px]">{item.description}</p>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">Cost:</span>
        <span className="font-bold">{item.cost.toLocaleString()} pts</span>
      </div>
      
      <button
        className={`claim-button claim-button-${categoryColor} ${isClaimed ? 'opacity-75 cursor-not-allowed' : ''}`}
        onClick={handleClaim}
        disabled={isClaimed}
      >
        {isClaimed ? '✅ Claimed' : 'Claim Now'}
      </button>
    </div>
  );
};

export default MarketplaceItem;
