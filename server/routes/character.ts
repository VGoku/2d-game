import express from "express";
import { Character } from "../models/Character"; // Assuming you have a database model
import { authMiddleware } from "../middleware/authMiddleware"; // Protect the route

const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { name, class: characterClass, stats } = req.body;
    const newCharacter = new Character({ name, class: characterClass, stats, user: req.user.id });

    await newCharacter.save();
    res.status(201).json({ message: "Character created successfully", character: newCharacter });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
