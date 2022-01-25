const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const orderSchema = {
  user: { type: Schema.Types.ObjectId, ref: "User" },
  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  pizza: [
    {
      base: { type: String, enum: ["thin", "thick"], required: true },
      toppings: [
        {
          type: String,
          enum: ["pepperoni", "cheese", "peppers", "ham"],
          required: true,
        },
      ],
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
