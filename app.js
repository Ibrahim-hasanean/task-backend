const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const itemsRouter = require("./routes/items");
require("dotenv").config();
require("./config/mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORt || 4000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/items", itemsRouter);

app.listen(port, () => {
  console.log("server start");
});
