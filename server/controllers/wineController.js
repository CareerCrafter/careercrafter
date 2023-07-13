const db = require("../models/wineModels");
const wineController = {};

wineController.getWines = async (req, res, next) => {
  console.log("req body for getWines", req.body);
  
  try {
    if (!req.body.sort) {
      const result = await db.query(
        `SELECT *
                FROM wines`
      );
      res.locals.allWines = result.rows;
      
      next();
    } else {
      console.log("else");

      const result = await db.query(
        `SELECT *
                FROM wines
                ORDER BY  ${req.body.sort} ${req.body.order}`
      );
      res.locals.allWines = result.rows;
      console.log("res.locals.allWines");

      next();
    }
  } catch (error) {
    next({
      log: "Error in wineController.getWines",
      status: 500,
      message: {
        err: `Error in wineController.getWines: ${error}`,
      },
    });
  }
};
wineController.addWine = (req, res, next) => {
  console.log("ADDING wine controler hit");
  const { name, alcohol_percent, region, score, notes, date, user_id } = req.body;
  const queryObj = {
    text: "INSERT INTO wines(name, alcohol_percent, region, score, notes, date, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    values: [name, alcohol_percent, region, score, notes, date, user_id],
  };
  db.query(queryObj)
    .then((data) => {
      res.locals.newWine = data.rows[0];
      next();
    })
    .catch((err) => {
      res.status(500);
      next(err);
    });
};

wineController.queryWine = async (req, res, next) => {


  try {

      // Destructure data
      let { wineType, displayCount, average, review, location, avgSortA, avgSortD } = req.body;

      // URL used to query for list of wines
      const queryURL = `https://api.sampleapis.com/wines/${wineType}`;


      // Fetching list and processing
      const response = await fetch(queryURL);
      let wineList = await response.json();


      // Convert passed in display count to number
      // if null, it will default to zero and trigger the default return value of 50 wine items
      displayCount = Number(displayCount)


      // checks if average value param has been passed in
      // if so, filter for all rating scores equal to or above input score
      if(average){
          wineList = wineList.filter( wineObj => wineObj.rating.average >= average); 
      }

      
      // checks if review value param has been passed in
      // if so, filter for all rating scores equal to or above input score
      if(review){
          wineList = wineList.filter( wineObj => parseFloat(wineObj.rating.reviews) >= review)

      }

      // Filter by location
      if(location){
          location = location.toUpperCase();
          wineList = wineList.filter( wineObj => wineObj.location.split('\n')[0].toUpperCase() == location);
      }
      // if no location is passed, default to displaying france
      if(!location) {
          wineList = wineList.filter( wineObj => wineObj.location.split('\n')[0].toUpperCase() == "FRANCE");
      }


      // check if accending sort boolean doesnt not exist or if decending sort is true, if so sort by decending (auto decending sort)
      // Descending average sort
      if(!avgSortA || avgSortD) {
          function bubbleSortByRating(array) {
              const n = array.length;
              for (let i = 0; i < n - 1; i++) {
                  for (let j = 0; j < n - i - 1; j++) {
                      if (parseFloat(array[j].rating.average) < parseFloat(array[j + 1].rating.average)) {
                          [array[j], array[j + 1]] = [array[j + 1], array[j]];
                      }
                  }
              }
          }
          bubbleSortByRating(wineList)
      }

      // Accending avarage sort
      if(avgSortA){
          function bubbleSortByRating(array) {
              const n = array.length;
              for (let i = 0; i < n - 1; i++) {
                  for (let j = 0; j < n - i - 1; j++) {
                      if (parseFloat(array[j].rating.average) > parseFloat(array[j + 1].rating.average)) {
                          [array[j], array[j + 1]] = [array[j + 1], array[j]];
                      }
                  }
              }
          }
          bubbleSortByRating(wineList)
      }

      
      // remove all undefined objects in array
      wineList = wineList.filter( wineObj => wineObj !== undefined)


      // if display count has not been passed through default to returning 20
      if(displayCount === 0){  
          res.locals.wineSearch = wineList.slice(0, 50);

          return next()
      }

      // else, return specififed user input for displayCount
      else{
          res.locals.wineSearch = wineList.slice(0,displayCount)
          
           return next()
      }
       
  } catch (error) {
      console.log(error)
      next(error)
  }


};

wineController.updateWine = async (req, res, next) => {
  console.log("UPDATING wine controler hit");
  const result = await db.query(
    `UPDATE wines
        SET name = '${req.body.name}', region = '${req.body.region}'
        WHERE wine_id = ${req.body.wine_id}
        RETURNING *`
  );
  console.log("RESULT", result);
  res.locals.updatedWines = result.rows;
  next();
};

wineController.deleteWine = async (req, res, next) => {
  console.log("DELETING wine hit");
  const result = await db.query(
    `DELETE FROM wines
        WHERE wine_id = ${req.body.wine_id}
        RETURNING *`
  );
  console.log("RESULT", result);
  res.locals.deletedWine = result.rows;
  next();
};

module.exports = wineController;
