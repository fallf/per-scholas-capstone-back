import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    // Name of the habit
    name: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },

    // Description of the habit (optional)
    description: {
      type: String,
      trim: true,
    },

    // Frequency of the habit (daily, weekly, monthly)
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly"],
      required: true,
    },

    // Status of the habit
    status: {
      type: String,
      enum: ["active", "completed", "inactive"],
      default: "active",
    },

    // Indicates whether the habit is completed
    completed: {
      type: Boolean,
      default: false,
    },

    // Due date for the habit
    due: {
      type: Date,
    },

    // Weekly progress tracking (e.g., for marking each day of the week)
    weeklyProgress: {
      type: Map,
      of: Boolean, // Each key-value pair represents a day and its completion status
      default: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
      },
    },

    // Timestamp for when the habit was created and updated
    timestamps: {
      type: Date,
      default: Date.now,
    },

    // Optional reference to the user who owns the habit
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Refers to the User model
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

export default mongoose.model("Habit", habitSchema);
