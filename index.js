const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/tests", db.getTests);
app.post("/tests", db.createTest);

app.get("/", (req, res) => {
  res.json({ info: "Running server on Railway" });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
