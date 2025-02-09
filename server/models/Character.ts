import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  stats: {
    strength: { type: Number, default: 5 },
    agility: { type: Number, default: 5 },
    intelligence: { type: Number, default: 5 },
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Link to the user
});

export const Character = mongoose.model("Character", CharacterSchema);
