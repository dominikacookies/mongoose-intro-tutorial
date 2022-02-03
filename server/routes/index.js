const { Router } = require("express");
const {
  saveOrder,
  getOrder,
  addPizzaToOrder,
  getOrderWithPizzaCount,
} = require("../controllers");

const router = Router();

router.put("/order/:id", addPizzaToOrder);
router.get("/order/quantity", getOrderWithPizzaCount);
router.post("/order", saveOrder);
router.get("/order", getOrder);

module.exports = router;
