import foodModel from "../models/foodModel.js";
import fs from 'fs';
import path from 'path';

// Add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    const image_filename = req.file.filename;
    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename
    });

    await food.save();
    res.status(201).json({ success: true, message: "Food Added Successfully" });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Get all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("Error listing foods:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(400).json({ success: false, message: "Food ID is required" });
    }

    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    const imagePath = path.join('uploads', food.image);
    
    // Delete image file
    fs.unlink(imagePath, (err) => {
      if (err) console.error("Error deleting image:", err);
    });

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed Successfully" });
  } catch (error) {
    console.error("Error removing food:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { addFood, listFood, removeFood };