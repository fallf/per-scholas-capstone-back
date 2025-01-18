import mongoose from "mongoose";

const ResetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // Links the budget entry to a specific user
      ref: "User", // Refers to the User model
      required: false,
    },
    title: {
      type: String,
      required: true,
      trim: true, // Removes unnecessary whitespace
    },
    category: {
      type: String,
      enum: ["reflection", "motivation", "planning", "progress"], // Predefined categories
      required: true,
      trim: true,
    },

    reflectionPrompt: {
      type: String, // A single string prompt
      required: false, // Optional field
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reset", ResetSchema);
