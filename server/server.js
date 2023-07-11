require("dotenv").config();
/* eslint no-unused-vars: 0 */
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(express.static("public", { extensions: ["css"] }));
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("client"));
app.use(cookieParser());

app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error: error.message });
});

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
