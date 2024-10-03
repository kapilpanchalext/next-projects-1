const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use("/", express.static(path.resolve("./dist")));

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve("./dist/hello-world.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

// app.get("/image-file-1", function (req, res) {
//   const pathToHtmlFile = path.resolve("./dist/image-file-1.html");
//   const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
//   res.send(contentFromHtmlFile);
// });

app.listen(9001, function () {
  console.log("Application running on http://localhost:9001/");
});