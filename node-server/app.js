const express = require("express");
const cors = require("cors");
const findImageClass = require("./src/routes/post/findImageClass");

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: false }));

app.post("/find-image-class", findImageClass);

app.listen(5000, () => {
  console.log("Server listning on 5000");
});
