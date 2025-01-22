import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // Links the budget entry to a specific user
      ref: "User", // Refers to the User model
      required: false,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["Completed", "Pending", "In-progress"],
    },
    due: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Goal", goalSchema);
