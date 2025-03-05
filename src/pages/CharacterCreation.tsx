// import React, { useState } from "react";
// import { useCharacterStore } from "../store/characterStore";
// import { useNavigate } from "react-router-dom";

// const CharacterCreation = () => {
//   const { createCharacter } = useCharacterStore();
//   const navigate = useNavigate();

//   const [characterName, setCharacterName] = useState("");
//   const [characterClass, setCharacterClass] = useState("Vampire");
//   const [stats, setStats] = useState({ strength: 5, agility: 5, intelligence: 5 });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     createCharacter({ name: characterName, class: characterClass, stats });
//     navigate("/dashboard"); // Redirect to dashboard after creation
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h2 className="text-2xl font-bold mb-4">Create Your Character</h2>
//       <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md">
//         <label className="block mb-2">Character Name:</label>
//         <input
//           type="text"
//           value={characterName}
//           onChange={(e) => setCharacterName(e.target.value)}
//           className="p-2 rounded w-full bg-gray-700"
//           required
//         />
//         <label className="block mt-4 mb-2">Class:</label>
//         <select
//           value={characterClass}
//           onChange={(e) => setCharacterClass(e.target.value)}
//           className="p-2 rounded w-full bg-gray-700"
//         >
//           <option value="Vampire">Vampire</option>
//           <option value="Werewolf">Werewolf</option>
//           <option value="Hunter">Hunter</option>
//         </select>
//         <button type="submit" className="bg-red-600 p-2 rounded mt-4 w-full">
//           Create Character
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CharacterCreation;

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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCharacterState({ ...character, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCharacter(character); // Save to Zustand
    console.log("Character Saved:", character);
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Create Your Character</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={character.name}
            onChange={handleChange}
            className="block w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </label>
        <label className="block mb-2">
          Race:
          <select
            name="race"
            value={character.race}
            onChange={handleChange}
            className="block w-full p-2 rounded bg-gray-700 text-white"
          >
            <option value="Vampire">Vampire</option>
            <option value="Werewolf">Werewolf</option>
            <option value="Hunter">Hunter</option>
          </select>
        </label>
        <label className="block mb-2">
          Strength:
          <input
            type="number"
            name="strength"
            value={character.strength}
            onChange={handleChange}
            className="block w-full p-2 rounded bg-gray-700 text-white"
            min="1"
            max="10"
          />
        </label>
        <label className="block mb-2">
          Agility:
          <input
            type="number"
            name="agility"
            value={character.agility}
            onChange={handleChange}
            className="block w-full p-2 rounded bg-gray-700 text-white"
            min="1"
            max="10"
          />
        </label>
        <label className="block mb-2">
          Intelligence:
          <input
            type="number"
            name="intelligence"
            value={character.intelligence}
            onChange={handleChange}
            className="block w-full p-2 rounded bg-gray-700 text-white"
            min="1"
            max="10"
          />
        </label>
        <button type="submit" className="bg-red-600 p-2 rounded mt-4 w-full">
          Create Character
        </button>
      </form>
    </div>
  );
};

export default CharacterCreation;
