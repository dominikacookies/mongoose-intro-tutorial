const mongoose = require("mongoose");
const { convertToLowercase, validateEmail } = require("../utils");

const { Schema, model } = mongoose;

const userSchema = {
  // NOTES: this is how to add custom validation
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
};

const schema = new Schema(userSchema);
// NOTES: how to use the pre hook to automatically manipulate data prior to saving to db
schema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const User = model("User", schema);

module.exports = User;
