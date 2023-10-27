const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookController = require("./controllers/BookController");

dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.json());

PORT = process.env.PORT || 3000;
DATABASE = process.env.DATABASE;

mongoose.connect(DATABASE).then(() => {
  console.log("connected to Database");
});

app.get("/", bookController.getbook);
app.post("/", bookController.createbook);
app.patch("/:id", bookController.updatebook);
app.delete("/:id", bookController.deletebook);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
