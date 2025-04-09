
export type MarketplaceItem = {
  id: string;
  name: string;
  description: string;
  cost: number;
  category: 'wl' | 'boosters' | 'mystery' | 'drip';
  image?: string;
};

export const marketplaceData: MarketplaceItem[] = [
  // WL Spots
  {
    id: 'wl-1',
    name: 'Glitch Protocol WL',
    description: 'Guaranteed whitelist for the upcoming Glitch Protocol NFT collection.',
    cost: 2500,
    category: 'wl',
  },
  {
    id: 'wl-2',
    name: 'DeFi Degens WL',
    description: 'Priority access to DeFi Degens private investment round.',
    cost: 3000,
    category: 'wl',
  },
  {
    id: 'wl-3',
    name: 'Pixel Pirates WL',
    description: 'Early bird whitelist for the Pixel Pirates gaming metaverse.',
    cost: 1800,
    category: 'wl',
  },
  {
    id: 'wl-4',
    name: 'Sudo Society WL',
    description: 'Exclusive whitelist access to Sudo Society, the premier crypto club.',
    cost: 5000,
    category: 'wl',
  },
  
  // Boosters
  {
    id: 'boost-1',
    name: '2x Point Multiplier',
    description: 'Double your $SUDO point earnings for the next 48 hours.',
    cost: 2000,
    category: 'boosters',
  },
  {
    id: 'boost-2',
    name: 'Gas Optimizer',
    description: 'Receive 20% cashback on gas fees for your next 10 transactions.',
    cost: 1500,
    category: 'boosters',
  },
  {
    id: 'boost-3',
    name: 'Diamond Hands Boost',
    description: 'Hold to earn: +5% extra $SUDO when holding assets for >1 week.',
    cost: 3500,
    category: 'boosters',
  },
  {
    id: 'boost-4',
    name: 'Whale Alert Pass',
    description: 'Get notified 5 minutes before any whale movement in selected pools.',
    cost: 4000,
    category: 'boosters',
  },
  
  // Mystery Boxes
  {
    id: 'mystery-1',
    name: 'Common Mystery Box',
    description: 'Contains random rewards. Mostly common, small chance of rare items.',
    cost: 1000,
    category: 'mystery',
  },
  {
    id: 'mystery-2',
    name: 'Rare Mystery Box',
    description: 'Higher chance of valuable rewards and exclusive items.',
    cost: 2500,
    category: 'mystery',
  },
  {
    id: 'mystery-3',
    name: 'Epic Chaos Box',
    description: 'High-risk, high-reward. Could contain nothing or something amazing.',
    cost: 3500,
    category: 'mystery',
  },
  {
    id: 'mystery-4',
    name: 'Legendary Treasure',
    description: 'Guaranteed to contain at least one legendary item or substantial reward.',
    cost: 7500,
    category: 'mystery',
  },
  
  // Drip
  {
    id: 'drip-1',
    name: 'Sudo Raider Hoodie',
    description: 'Limited edition physical merch. Show off your raider status IRL.',
    cost: 4500,
    category: 'drip',
  },
  {
    id: 'drip-2',
    name: 'Hacker Avatar NFT',
    description: 'Rare collectible avatar for use across Sudo Protocol platforms.',
    cost: 2000,
    category: 'drip',
  },
  {
    id: 'drip-3',
    name: 'Custom Discord Role',
    description: 'Flex your status with a custom role in the official Discord.',
    cost: 1500,
    category: 'drip',
  },
  {
    id: 'drip-4',
    name: 'Legendary Raid Badge',
    description: 'Ultra-rare on-chain badge marking you as an elite Sudo Raider.',
    cost: 6000,
    category: 'drip',
  },
];

export const getCategoryItems = (category: string): MarketplaceItem[] => {
  switch (category) {
    case 'wl':
      return marketplaceData.filter(item => item.category === 'wl');
    case 'boosters':
      return marketplaceData.filter(item => item.category === 'boosters');
    case 'mystery':
      return marketplaceData.filter(item => item.category === 'mystery');
    case 'drip':
      return marketplaceData.filter(item => item.category === 'drip');
    default:
      return [];
  }
};

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'wl':
      return 'purple';
    case 'boosters':
      return 'yellow';
    case 'mystery':
      return 'pink';
    case 'drip':
      return 'emerald';
    default:
      return 'purple';
  }
};
