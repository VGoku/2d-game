import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';

interface HuntingArea {
  name: string;
  level: number;
  description: string;
  rewards: {
    experience: number;
    gold: number;
    bloodChance: number;
  };
}

const huntingAreas: HuntingArea[] = [
  {
    name: "Dark Forest",
    level: 1,
    description: "A shadowy forest where weak prey lurks in the darkness.",
    rewards: {
      experience: 10,
      gold: 5,
      bloodChance: 0.7
    }
  },
  {
    name: "Abandoned Cemetery",
    level: 3,
    description: "Ancient burial grounds where stronger beings roam.",
    rewards: {
      experience: 25,
      gold: 15,
      bloodChance: 0.8
    }
  },
  {
    name: "Cursed Village",
    level: 5,
    description: "A village shrouded in eternal darkness, home to powerful creatures.",
    rewards: {
      experience: 50,
      gold: 30,
      bloodChance: 0.9
    }
  }
];

const Hunt = () => {
  const { character, updateCharacter } = useAuthStore();
  const [selectedArea, setSelectedArea] = useState<HuntingArea | null>(null);
  const [huntResult, setHuntResult] = useState<string>('');
  const [isHunting, setIsHunting] = useState(false);

  const startHunt = async (area: HuntingArea) => {
    if (!character || character.level < area.level) {
      setHuntResult('You are not powerful enough for this hunting ground.');
      return;
    }

    setIsHunting(true);
    setHuntResult('Hunting in progress...');

    // Simulate hunting process
    await new Promise(resolve => setTimeout(resolve, 2000));

    const success = Math.random() > 0.3;
    if (success) {
      const bloodFound = Math.random() < area.rewards.bloodChance;
      const newExperience = (character.experience || 0) + area.rewards.experience;
      const newGold = (character.gold || 0) + area.rewards.gold;
      const newBlood = bloodFound ? (character.blood || 0) + 1 : (character.blood || 0);

      await updateCharacter({
        ...character,
        experience: newExperience,
        gold: newGold,
        blood: newBlood
      });

      setHuntResult(
        `Hunt successful! You gained:
        ${area.rewards.experience} experience
        ${area.rewards.gold} gold
        ${bloodFound ? '1 blood' : 'No blood found'}`
      );
    } else {
      setHuntResult('The hunt was unsuccessful. Try again.');
    }

    setIsHunting(false);
  };

  return (
    <div className="hunt-container">
      <h2>Hunting Grounds</h2>
      <p className="hunt-intro">
        Choose your hunting ground carefully. More dangerous areas offer better rewards
        but require greater power to survive.
      </p>

      <div className="hunting-areas">
        {huntingAreas.map((area) => (
          <div key={area.name} className="hunting-area">
            <h3>{area.name}</h3>
            <p>{area.description}</p>
            <div className="area-requirements">
              <span>Required Level: {area.level}</span>
            </div>
            <div className="area-rewards">
              <p>Rewards:</p>
              <ul>
                <li>Experience: {area.rewards.experience}</li>
                <li>Gold: {area.rewards.gold}</li>
                <li>Blood Chance: {area.rewards.bloodChance * 100}%</li>
              </ul>
            </div>
            <button
              className="gothic-button"
              onClick={() => startHunt(area)}
              disabled={isHunting || !character || character.level < area.level}
            >
              {isHunting ? 'Hunting...' : 'Hunt Here'}
            </button>
          </div>
        ))}
      </div>

      {huntResult && (
        <div className={`hunt-result ${huntResult.includes('successful') ? 'success' : 'failure'}`}>
          {huntResult}
        </div>
      )}
    </div>
  );
};

export default Hunt; 