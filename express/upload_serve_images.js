const express = require("express");
const fileUpload = require("express-fileupload");
const { nanoid } = require("nanoid");

const app = express();
app.use(fileUpload());
app.use(express.static("public"));

app.post("/upload", (req, res) => {
  const path = "./public/images/" + nanoid() + ".png";

  const file = Object.entries(req.files)[0][1];
  file.mv(path);

  const imageUrl =
    req.protocol + "://" + req.get("host") + path.replace("./public", "");
  res.send(`Image was uploaded <a href="${imageUrl}">here</a>`);
});

app.listen(3000);
