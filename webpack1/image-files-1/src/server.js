const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use("/static", express.static(path.resolve("./dist")));

// app.get("/hello-world", function (req, res) {
//   const pathToHtmlFile = path.resolve("./dist/hello-world.html");
//   const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
//   res.send(contentFromHtmlFile);
// });

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve("./dist/image-file-1.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(9002, function () {
  console.log("Application running on http://localhost:9002/");
});