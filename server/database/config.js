// NOTES: This file contains all of the config variables to make our mongoose connection
// NOTES: the vars in this file are written in all capital letters as they represent constants
const DB_NAME = process.env.DB_NAME || "pizza_orders";

const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

module.exports = {
  DB_URL,
  MONGOOSE_OPTIONS,
};
