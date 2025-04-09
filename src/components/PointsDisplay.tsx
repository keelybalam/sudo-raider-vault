
import React from 'react';

interface PointsDisplayProps {
  points: number;
}

const PointsDisplay: React.FC<PointsDisplayProps> = ({ points }) => {
  return (
    <div className="mb-8 text-center">
      <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
        Points Available
      </div>
      <div className="inline-block px-6 py-3 rounded-lg bg-emerald/10 border border-emerald/30">
        <span className="text-3xl font-bold text-emerald animate-pulse-glow">
          {points.toLocaleString()} pts
        </span>
      </div>
    </div>
  );
};

export default PointsDisplay;
