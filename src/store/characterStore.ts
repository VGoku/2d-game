// import { create } from "zustand";

// interface Character {
//   name: string;
//   class: string;
//   stats: { strength: number; agility: number; intelligence: number };
// }

// interface CharacterStore {
//   character: Character | null;
//   createCharacter: (char: Character) => void;
// }

// export const useCharacterStore = create<CharacterStore>((set) => ({
//   character: null,
//   createCharacter: (char) => set({ character: char }),
// }));


import { create } from "zustand";

interface Character {
  name: string;
  race: string;
  strength: number;
  agility: number;
  intelligence: number;
}

interface CharacterStore {
  character: Character | null;
  setCharacter: (character: Character) => void;
  resetCharacter: () => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  character: null,
  setCharacter: (character) => set({ character }),
  resetCharacter: () => set({ character: null }),
}));
