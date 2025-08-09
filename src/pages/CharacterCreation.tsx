import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCharacterStore } from "../store/characterStore";

const CharacterCreation = () => {
  const navigate = useNavigate();
  const setCharacter = useCharacterStore((state) => state.setCharacter);

  const [character, setCharacterState] = useState({
    name: "",
    race: "Vampire",
    strength: 5,
    agility: 5,
    intelligence: 5,
    bloodline: "", // New field for vampire lineage
  });

  const [error, setError] = useState("");
  const maxPoints = 20;
  const currentPoints = character.strength + character.agility + character.intelligence;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (["strength", "agility", "intelligence"].includes(name)) {
      const newValue = parseInt(value);
      const otherStats = currentPoints - character[name as keyof typeof character];
      
      if (otherStats + newValue > maxPoints) {
        setError(`Cannot exceed ${maxPoints} total points for attributes`);
        return;
      }
      
      if (newValue < 1) {
        setError("Attributes cannot be less than 1");
        return;
      }
      
      setError("");
    }
    
    setCharacterState({ ...character, [name]: name === "name" ? value : ["strength", "agility", "intelligence"].includes(name) ? parseInt(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!character.name.trim()) {
      setError("Please enter a character name");
      return;
    }
    if (currentPoints > maxPoints) {
      setError(`Total attributes cannot exceed ${maxPoints} points`);
      return;
    }
    setCharacter(character);
    console.log("Character Saved:", character);
    navigate("/dashboard");
  };

  const getBloodlines = () => {
    switch (character.race) {
      case "Vampire":
        return ["Nosferatu", "Ventrue", "Tremere", "Toreador"];
      case "Werewolf":
        return ["Black Spiral", "Glass Walker", "Shadow Lord", "Silver Fang"];
      case "Hunter":
        return ["Templar", "Inquisitor", "Slayer", "Shadow Hunter"];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gothic-gradient py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-crimson mb-8 text-center font-serif">
          Forge Your Dark Destiny
        </h2>
        
        <form onSubmit={handleSubmit} className="bg-vampire-black/80 p-8 rounded-lg shadow-gothic backdrop-blur-sm">
          {error && (
            <div className="mb-6 p-3 bg-blood/20 border border-blood text-crimson rounded">
              {error}
            </div>
          )}
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-serif">Name</label>
              <input
                type="text"
                name="name"
                value={character.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gothic-purple/50 border border-gray-700 text-white 
                         focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-serif">Race</label>
                <select
                  name="race"
                  value={character.race}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gothic-purple/50 border border-gray-700 text-white 
                           focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                >
                  <option value="Vampire">Vampire</option>
                  <option value="Werewolf">Werewolf</option>
                  <option value="Hunter">Hunter</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-serif">Bloodline</label>
                <select
                  name="bloodline"
                  value={character.bloodline}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gothic-purple/50 border border-gray-700 text-white 
                           focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                >
                  <option value="">Select Bloodline</option>
                  {getBloodlines().map((bloodline) => (
                    <option key={bloodline} value={bloodline}>
                      {bloodline}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Remaining points: {maxPoints - currentPoints}
              </p>
              
              <div>
                <label className="block text-gray-300 mb-2 font-serif">
                  Strength: {character.strength}
                </label>
                <input
                  type="range"
                  name="strength"
                  value={character.strength}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="w-full accent-crimson"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-serif">
                  Agility: {character.agility}
                </label>
                <input
                  type="range"
                  name="agility"
                  value={character.agility}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="w-full accent-crimson"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-serif">
                  Intelligence: {character.intelligence}
                </label>
                <input
                  type="range"
                  name="intelligence"
                  value={character.intelligence}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="w-full accent-crimson"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blood hover:bg-crimson text-white font-bold py-3 px-4 rounded
                       transform transition-all duration-200 hover:scale-105 focus:outline-none
                       focus:ring-2 focus:ring-crimson focus:ring-opacity-50 shadow-gothic"
            >
              Create Character
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CharacterCreation;
