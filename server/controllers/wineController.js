const db = require("../models/wineModels");
const wineController = {};

// wineController.getWines = async (req, res, next) => {
//   console.log("req body for getWines", req.body);
  
//   try {
//     if (!req.body.sort) {
//       const result = await db.query(
//         `SELECT *
//                 FROM wines`
//       );
//       res.locals.allWines = result.rows;
      
//       next();
//     } else {
//       console.log("else");

//       const result = await db.query(
//         `SELECT *
//                 FROM wines
//                 ORDER BY  ${req.body.sort} ${req.body.order}`
//       );
//       res.locals.allWines = result.rows;
//       console.log("res.locals.allWines");

//       next();
//     }
//   } catch (error) {
//     next({
//       log: "Error in wineController.getWines",
//       status: 500,
//       message: {
//         err: `Error in wineController.getWines: ${error}`,
//       },
//     });
//   }
// };
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
  console.log(req.body);
  try {
    let { wineType, displayCount, average, review, location } = req.body;

    // avgA, avgD,

    const queryURL = `https://api.sampleapis.com/wines/${wineType}`;

    const response = await fetch(queryURL);

    let wineList = await response.json();

    displayCount = Number(displayCount);

    if (average) {
      wineList = wineList.filter((wineObj) => wineObj.rating.average > average);
    }
    // if(review){
    //     wineList = wineList.filter( wineObj => Number(wineObj.reviews.substring(0,2)) > Number(average));
    //     onsole.log('review')
    // }

    if (displayCount === 0) {
      console.log("hit");
      res.locals.wineSearch = wineList;
      console.log(wineList);
      return next();
    } else {
      res.locals.wineSearch = wineList.slice(0, displayCount);
      console.log(res.locals.wineSearch);

      return next();
    }
  } catch (error) {
    console.log(error);
    next(error);
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

wineController.getWinesForUser = async (req, res, next) => {
    console.log("req body for getWines", req.body);
    
    const sql = 
    `
    SELECT *
       FROM public.wines
       WHERE user_id = $1;`;
    
    try {
      
        const result = await db.query(sql, [req.body.user_id]);
        res.locals.wine = result.rows;
        
        next();
      
    } catch (error) {
      next({
        log: "Error in wineController.getWinesForUser",
        status: 500,
        message: {
          err: `Error in wineController.getWinesForUser: ${error}`,
        },
      });
    }
  };
module.exports = wineController;
