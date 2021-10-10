var express = require("express");
var router = express.Router();
const { addItem, getItemById, getItems } = require("../controller/item");
/* GET home page. */
router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", addItem);

module.exports = router;
