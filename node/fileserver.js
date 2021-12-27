const express = require("express");
const fileUpload = require("express-fileupload");
const { nanoid } = require("nanoid");

const app = express();
app.use(fileUpload());
app.use(express.static("public"));

app.post("/upload", (req, res) => {
  const imageUrls = [];

  // <input name="files" type="file" multiple />
  const files = req.files.files;
  for (const file of files) {
    const path = "./public/images/" + nanoid() + ".png";
    file.mv(path);

    const imageUrl =
      req.protocol + "://" + req.get("host") + path.replace("./public", "");
    imageUrls.push(imageUrl);
  }

  let result = "";

  for (const [i, v] of imageUrls.entries()) {
    result += `Image ${i + 1} was uploaded <a href="${v}">here</a></br>`;
  }

  res.send(result);
});

app.listen(3000);
