import mongoose from "mongoose";

const ResetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["reflection", "motivation", "planning", "progress"],
      required: true,
      trim: true,
    },
    reflectionPrompt: {
      type: String,
      required: false,
      trim: true,
    },
    reflectionMonth: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reset", ResetSchema);
