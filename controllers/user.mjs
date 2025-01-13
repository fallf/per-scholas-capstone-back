import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    user: String,
    text: {
      type: String,
      require: true,
    },
    completed: Boolean,
    due: Date,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Habit", habitSchema);
