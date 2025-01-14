import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    // Name of the habit
    name: {
      type: String,
      required: true, // Ensures a name is provided
      trim: true, // Removes leading/trailing spaces
    },

    // Frequency of the habit (e.g., daily, weekly)
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly"], // Restricting possible values
      required: true,
    },

    // Status of the habit (e.g., active, completed)
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },

    // Reference to the user who owns the habit
    // user: {s
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User", // Refers to the User model
    //   required: false,
    // },

    // Optional reference to a goal if the habit relates to a specific goal
    // goal: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Goal", // Refers to the Goal model
    // },

    // Indicates if the habit is completed
    completed: {
      type: Boolean,
      default: false,
    },

    // Due date for the habit
    due: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Habit", habitSchema);
