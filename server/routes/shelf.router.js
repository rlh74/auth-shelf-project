const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    console.log('req.user:', rejectUnauthenticated, req.user);
    pool.query('SELECT * FROM "item";')
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for items:', error);
            res.sendStatus(500);
        });
    
    });


/**
 * Add an item for the logged in user to the shelf
 */
//
//
//


//
//

router.post('/', (req, res) => {
    console.log('in post with:', req.body);
    const queryText = `INSERT INTO item (description, image_url, user_id)
    VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.body.description, req.body.image_url, req.body.user_id])
    .then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error adding item', error);
        res.sendStatus(500);
    })
});


/**
 * Delete an item if it's something the logged in user added
 */

 // DELETE FROM item WHERE id=5
router.delete('/:id', (req, res) => {
    console.log('in delete with:', req.params.id);
    const queryText = `DELETE FROM item WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
    .then(response => {
        res.sendStatus(200);
    }).catch(error =>{
        console.log('error deleting item', error);
        res.sendStatus(500);
    })

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;