
import React from 'react';

interface InfoBoxProps {
  visible: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({ visible }) => {
  if (!visible) return null;
  
  return (
    <div className="bg-white text-black rounded-xl p-6 mb-8 shadow-lg max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-2">How $SUDO Points Work</h3>
      <div className="space-y-3 text-left">
        <p>
          <span className="font-medium">Earn:</span> Accumulate $SUDO points through community engagement, trading, and participation in Sudo Protocol events.
        </p>
        <p>
          <span className="font-medium">Spend:</span> Points are a non-transferable currency that can be redeemed for exclusive benefits and rewards in this marketplace.
        </p>
        <p>
          <span className="font-medium">Value:</span> Once points are spent, they're burned forever - choose wisely what you claim!
        </p>
        <p className="text-sm italic mt-4">
          Note: All marketplace transactions are final. Claimed items cannot be returned or exchanged.
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
