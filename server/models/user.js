const mongoose = require("mongoose");
const { convertToLowercase, validateEmail } = require("../utils");

const { Schema, model } = mongoose;

const userSchema = {
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
};

const schema = new Schema(userSchema);
schema.pre("save", convertToLowercase);

const User = model("User", new Schema(userSchema));

module.exports = User;
