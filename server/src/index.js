const express = require("express");
const cors = require("cors");
const multer = require("multer");
const parse = require("@sole/kindle-clippings-parser").parse;
const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const parseFileClippings = (fileContent) => {
  const books = parse(fileContent);

  return books;
};

app.post("/upload", upload.single("highlights_file"), (req, res) => {
  if (req.file.buffer) {
    const data = req.file.buffer.toString("utf-8");

    const books = parseFileClippings(data);

    // books.forEach((book) => console.log(book));

    res.json(books);
  } else {
    res.status(400).send("Nie przesłano pliku");
  }
});

app.listen(PORT);
