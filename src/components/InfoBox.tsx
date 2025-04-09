
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
          <span className="font-medium">What Are Points?</span> Points are earned by completing daily raid missions, engaging in the Sudo community, and recruiting new Raiders. These points fuel your journey through the vault.
        </p>
        <p>
          <span className="font-medium">How Do They Work?</span> You can stack points endlessly before the $SUDO token launches, or spend them now to grab WLs, rare items, and chaos boosters inside this marketplace.
        </p>
        <p>
          <span className="font-medium">Be Strategic.</span> Some will burn early for WL glory. Others will hoard and convert to $SUDO. The choice is yours — but either way, it's all degen-coded.
        </p>
        <p className="text-sm italic mt-4">
          Raid daily. Stack ruthlessly. Spend wisely. The vault doesn't sleep.
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
