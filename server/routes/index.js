const { Router } = require("express");
const { saveOrder, getOrder, addPizzaToOrder } = require("../controllers");

const router = Router();

router.put("/order/:id", addPizzaToOrder);
router.post("/order", saveOrder);
router.get("/order", getOrder);

module.exports = router;
