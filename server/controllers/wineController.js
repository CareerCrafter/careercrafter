const db = require('../models/wineModels');
const wineController = {};

wineController.getWines = async (req, res, next) => {
    try{
        const result = await db.query(
            `SELECT *
            FROM wines`
            );
            res.locals.wines = result.rows;
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

module.exports = wineController;
