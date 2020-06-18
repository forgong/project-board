const express = require('express');
const router = express.Router();
const db = require('../lib/db');

router.get('/', function (req, res) {
    db.query(`select * from userTable`, function(err, user) {
        if(err) {
            throw err;
        }
        console.log(user);
        res.render('index');
    })
})

module.exports = router;