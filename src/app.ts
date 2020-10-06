import express = require("express");

const app: express.Application = express();

app.get("/", function (req, res) {
  res.send("Hello world from Typescript via Node.js and Express.js!!");
});

app.listen(3000, function () {
  console.log("App running on port 3000!");
});
