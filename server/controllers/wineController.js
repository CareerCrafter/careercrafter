const db = require('../models/wineModels');
const wineController = {};

wineController.getWines = async (req, res, next) => {
    console.log('req body for getWines', req.body);
    try {
        if (!req.body) {
            const result = await db.query(
                `SELECT *
                FROM wines`
            );
            res.locals.allWines = result.rows;
            next();
        } else {
            const result = await db.query(
                `SELECT *
                FROM wines
                ORDER BY  ${req.body.sort} ${req.body.order}`
            );
            res.locals.allWines = result.rows;
            next();
        }
    } catch (error) {
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
    const { name, alcohol_percent, region, score, notes, date } = req.body;
    const queryObj = {
        text: 'INSERT INTO wines(name, alcohol_percent, region, score, notes, date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
        values: [name, alcohol_percent, region, score, notes, date]
    };
    db.query(queryObj).then(data => {
        res.locals.newWine = data.rows[0];
        next();
    }).catch(err => {
        res.status(500);
        next(err);
    })
};

wineController.updateWine = async (req, res, next) => {
    console.log('UPDATING wine controler hit');
    const result = await db.query(
        `UPDATE wines
        SET name = '${req.body.name}', region = '${req.body.region}'
        WHERE wine_id = ${req.body.wine_id}
        RETURNING *`
    );
    console.log('RESULT', result);
    res.locals.updatedWines = result.rows;
    next();
}

wineController.deleteWine = async (req, res, next) => {
    console.log('DELETING wine hit');
    const result = await db.query(
        `DELETE FROM wines
        WHERE wine_id = ${req.body.wine_id}
        RETURNING *`
    );
    console.log('RESULT', result);
    res.locals.deletedWine = result.rows;
    next();
}

module.exports = wineController;
