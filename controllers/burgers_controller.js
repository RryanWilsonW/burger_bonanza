// Requires our dependencies.
const express = require('express');
const burger = require('../models/burger.js');

// Creates and exports the router for the file.
const router = express.Router();

// Will grab index.html file, and render it to the user.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
});

// Inserts new column into out burgers table.
router.post('/burgers/insertOne', (req, res) => {
    burger.insertOne(['burger_name', 'devoured'], 
    [req.body.burger_name, false], (result) => {
        res.redirect('/');
    });
});

// Updates one based off of its corresponding id.
router.put('/burgers/:id', (req, res) => {
    let condition = `id = ${req.params.id}`;

    burger.updateOne({ 
        devoured: req.body.devoured }, condition, (result) => {
            if(result.affectedRows === 0) {
                return res.status(400).end();
            } else {
                res.status(200).end();
            }
    });
});

module.exports = router;


