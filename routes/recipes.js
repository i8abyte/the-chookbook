var express = require('express');
var router = express.Router();
var db = require('../db');

router.use((req, res, next) => {
    let recipes = db.recipes;
    if (!recipes) return next('route');
    req.recipes = recipes;
    next();
});

/* GET recipes listing. */
router.get('/', (req, res, next) => {
    res.render('recipes', { title: 'Recipes', recipes: req.recipes });
});

module.exports = router;