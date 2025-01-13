import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // Links the budget entry to a specific user
      ref: "User", // Refers to the User model
      required: false,
    },
    amount: {
      type: Number, // Amount of the transaction
      required: true,
    },
    category: {
      type: String, // Category, e.g., "Food", "Rent", "Salary", etc.
      enum: ["Food", "Rent", "Salary", "Utilities", "Others"], // Optional predefined categories
      required: true,
    },
    entryDate: {
      type: Date, // Date of the transaction
      required: true,
    },
    description: {
      type: String, // Additional details about the transaction
      default: "", // Optional field
    },
    status: {
      type: String, // Indicates whether it's "Income" or "Expense"
      enum: ["Income", "Expense", "Saving"], // Restrict values to only "Income" or "Expense"
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

export default mongoose.model("Budget", budgetSchema);
