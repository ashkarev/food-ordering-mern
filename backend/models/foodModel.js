import mongoose from "mongoose";

const { Schema } = mongoose;

const foodSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  // Add other fields as needed
});

const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default Food;
