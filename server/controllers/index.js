const Order = require("../models/order");
const User = require("../models/user");

const saveOrder = async (req, res) => {
  try {
    const { email } = req.body;

    // NOTES: first create the user so that you can obtain their id to save on the order model
    const user = await User.create({ email });

    const order = await Order.create({
      user: user._id,
      pizza: req.body.pizza,
      notes: req.body.notes,
    });

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOrder = async (req, res) => {
  try {
    // NOTES: The populate method populates information for the provided key name of the model being queried
    // In this case that is the user key on the Order model
    // Unlike Sequelize, this is not the name of the model that contains the additional info we'd like to retrieve
    const orders = await Order.find().populate("user");

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  saveOrder,
  getOrder,
};
