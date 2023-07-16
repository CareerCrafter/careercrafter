
require("dotenv").config();
// ----------------IMPORTS---------------------//
// import express from 'express';
// import path from 'path';
const path = require("path");
const express = require("express");
const apiRouter = require('./routes/api');
const cookieParser = require("cookie-parser");
const wineController = require("./controllers/wineController");
const signupRouter = require('./routes/signupRouter')
//import type { Request, Response, NextFunction } from 'express'; // typescript types
//----------------SET UP EXPRESS APP----------//
const port = 3000;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public', { extensions: ["css"] }))
// --------- SERVING STATIC FILES -----------//

app.get('*', (req, res, next) => {
  console.log(req.params);
  next();
})

app.get('/api/test', wineController.queryWine, (req, res) => {
  res.status(200).json(res.locals.wineSearch)
})
app.use('/api/wine', apiRouter);

app.get('/api/searchtest',

(req, res) => {
  let data = [
    {
        "winery": "Domaine de La Romanée-Conti",
        "wine": "Montrachet Grand Cru 2010",
        "rating": {
            "average": "4.9",
            "reviews": "37 ratings"
        },
        "location": "South Africa",
        "image":"https://www.dryfarmwines.com/cdn/shop/files/love-is-more-than-a-feeling_840x.png?v=1662594158",
        "id": 1
    },
    {
        "winery": "Domaine de La Romanée-Conti",
        "wine": "Casalin Barbera d’Alba 2020",
        "rating": {
            "average": "4.9",
            "reviews": "33 ratings"
        },
        "location": "France\n·\nMontrachet Grand Cru",
        "image": "https://www.dryfarmwines.com/cdn/shop/files/casalin-featured-bottle_840x.png?v=1662593693",
        "id": 2
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Montrachet Grand Cru 2014",
      "rating": {
          "average": "4.9",
          "reviews": "33 ratings"
      },
      "location": "France\n·\nMontrachet Grand Cru",
      "image": "https://www.dryfarmwines.com/cdn/shop/files/Passavant-featured_840x.png?v=1662594468",
      "id": 2
  },
  {
    "winery": "Domaine de La Romanée-Conti",
    "wine": "Domaine du Penlois Crémant de Bourgogne",
    "rating": {
        "average": "4.9",
        "reviews": "33 ratings"
    },
    "location": "France",
    "image": "https://www.dryfarmwines.com/cdn/shop/files/penlois-bubbles-feature_840x.png?v=1662594839",
    "id": 2
},
  
    
]
    res.status(200).json(data);
  }
)

//define route handlers
 

app.use('/api', apiRouter);


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


// ------------GLOBAL ERROR HANDLER ---------------//
app.use((err, req, res, next) => {
  console.log(req.query)
  const defaultErr = {
    log: 'Error caught in global handler',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
