import React, { useState } from "react";
import { useCharacterStore } from "../store/characterStore";
import { useNavigate } from "react-router-dom";

const CharacterCreation = () => {
  const { createCharacter } = useCharacterStore();
  const navigate = useNavigate();

  const [characterName, setCharacterName] = useState("");
  const [characterClass, setCharacterClass] = useState("Vampire");
  const [stats, setStats] = useState({ strength: 5, agility: 5, intelligence: 5 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createCharacter({ name: characterName, class: characterClass, stats });
    navigate("/dashboard"); // Redirect to dashboard after creation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Create Your Character</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md">
        <label className="block mb-2">Character Name:</label>
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          className="p-2 rounded w-full bg-gray-700"
          required
        />
        <label className="block mt-4 mb-2">Class:</label>
        <select
          value={characterClass}
          onChange={(e) => setCharacterClass(e.target.value)}
          className="p-2 rounded w-full bg-gray-700"
        >
          <option value="Vampire">Vampire</option>
          <option value="Werewolf">Werewolf</option>
          <option value="Hunter">Hunter</option>
        </select>
        <button type="submit" className="bg-red-600 p-2 rounded mt-4 w-full">
          Create Character
        </button>
      </form>
    </div>
  );
};

export default CharacterCreation;
