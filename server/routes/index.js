const { Router } = require("express");
const { saveOrder, getOrder } = require("../controllers");

const router = Router();

router.post("/order", saveOrder);
router.get("/order", getOrder);

module.exports = router;
