const db = require('../models/wineModels');
const wineController = {};

wineController.getWines = async (req, res, next) => {
    try{
        const result = await db.query(
            `SELECT *
            FROM wines`
            );
            res.locals.allWines = result.rows;
            next();
    }catch (error){
        next({
            log: 'Error in wineController.getWines',
            status: 500,
            message: {
                err: `Error in wineController.getWines: ${error}`
            },
        });
    }
};
wineController.addWine = (req, res, next) => {
    console.log('ADDING wine controler hit');
    const {name, alcohol_percent, region, score, notes, date} = req.body;
    const queryObj = {
        text : 'INSERT INTO wines(name, alcohol_percent, region, score, notes, date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
        values : [name, alcohol_percent, region, score, notes, date]
    };
    db.query(queryObj).then(data => {
        res.locals.newWine = data.rows[0];
        next();
    }).catch(err =>{
        res.status(500);
        next(err);
    })
};

wineController.queryWine = async (req, res, next) => {


    try {

        let { wineType, displayCount, average, review, location, avgSortA, avgSortD, locSortA, locSortD } = req.body;

        const queryURL = `https://api.sampleapis.com/wines/${wineType}`
    
        const response = await fetch(queryURL);
        let wineList = await response.json();
   
        displayCount = Number(displayCount)
        location = location.toUpperCase();

        // checks if average value param has been passed in
        // if so, filter for all rating scores equal to or above input score
        if(average){
            wineList = wineList.filter( wineObj => wineObj.rating.average > average); 
        }

        
        // checks if review value param has been passed in
        // if so, filter for all rating scores equal to or above input score
        if(review){

            wineList = wineList.map( wineObj => {
                const rArr = wineObj.rating.reviews.split(' ');
                if(rArr[0] > review){
                    return wineObj
                }
                return
            })
        }

        // Filter by location
        if(location){
            wineList = wineList.filter( wineObj => wineObj.location.split('\n')[0].toUpperCase() == location);
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
            
            res.locals.wineSearch = wineList.slice(0, 20);
            return next()
        }

        // else, return specififed user input for displayCount
        else{
            res.locals.wineSearch = wineList.slice(0,displayCount)
            console.log(res.locals.wineSearch)
            
             return next()
        }
         
    } catch (error) {
        console.log(error)
        next(error)
    }


}

module.exports = wineController;
