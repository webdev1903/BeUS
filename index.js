const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");

const productController = require("./controllers/product.controller");

const app = express();
const PORT = 2345;

app.use(express.json());
app.use(cors());

app.use("/", productController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening on port " + PORT);
  } catch (error) {
    console.log(error);
  }
});
