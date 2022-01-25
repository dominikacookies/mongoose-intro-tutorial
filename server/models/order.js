const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const orderSchema = {
  // NOTES: how to reference another model
  user: { type: Schema.Types.ObjectId, ref: "User" },
  // NOTES: how to set a default value
  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  pizza: [
    {
      // NOTES: how to specify enum options
      base: { type: String, enum: ["thin", "thick"], required: true },
      toppings: [
        {
          type: String,
          enum: ["pepperoni", "cheese", "peppers", "ham"],
          required: true,
        },
      ],
      // NOTES: how to specify a minimum/maximum Number value as well as a custom error message if the requirement is not met
      quantity: {
        type: Number,
        min: [1, "You must order at least one pizza."],
        max: 100,
      },
    },
  ],
  notes: { type: String, maxLength: 200 },
};

const Order = model("Order", new Schema(orderSchema));

module.exports = Order;
