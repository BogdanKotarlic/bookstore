const express = require("express");
const router = express.Router();

const { create, list, orderById, remove } = require("../controller/order");

router.post("/order/create", create);
router.get("/order/list", list);
router.delete("/order/:orderId", remove);

router.param('orderId', orderById);

module.exports = router;