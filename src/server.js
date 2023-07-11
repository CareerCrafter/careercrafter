require("dotenv").config();

// ----------------IMPORTS---------------------//
import express from 'express';
import path from 'path';

//import type { Request, Response, NextFunction } from 'express'; // typescript types

//----------------SET UP EXPRESS APP----------//

// 
const port = 8080;

const app = express();




/* eslint no-unused-vars: 0 */
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");




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
