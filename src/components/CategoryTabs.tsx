
import React from 'react';

interface CategoryTabsProps {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-4xl mx-auto">
      <button
        className="category-tab category-tab-purple"
        data-active={activeCategory === 'wl'}
        onClick={() => setActiveCategory(activeCategory === 'wl' ? null : 'wl')}
      >
        <span>🎟</span> WL Spots
      </button>
      
      <button
        className="category-tab category-tab-yellow"
        data-active={activeCategory === 'boosters'}
        onClick={() => setActiveCategory(activeCategory === 'boosters' ? null : 'boosters')}
      >
        <span>⚡</span> Boosters
      </button>
      
      <button
        className="category-tab category-tab-pink"
        data-active={activeCategory === 'mystery'}
        onClick={() => setActiveCategory(activeCategory === 'mystery' ? null : 'mystery')}
      >
        <span>🎁</span> Mystery Boxes
      </button>
      
      <button
        className="category-tab category-tab-emerald"
        data-active={activeCategory === 'drip'}
        onClick={() => setActiveCategory(activeCategory === 'drip' ? null : 'drip')}
      >
        <span>🎨</span> Drip
      </button>
    </div>
  );
};

export default CategoryTabs;
