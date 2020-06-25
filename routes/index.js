const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const template = require('../lib/template');

router.get('/', function (req, res) {
    console.log(req.session.loginId);
    var authStatusUI = template.authStatusUI(req,res);
    db.query(`select * from categorytable`, function(err,resultCategory){
        var categoryList = template.categoryList(resultCategory);
        res.render('index', {
            authStatusUI,
            categoryList
        });
    })
})

router.get('/signup', function (req, res){
    res.render('signup');
})

router.post('/signup_process', function (req, res){
    let ctr = req.body;
    db.query(`insert into userTable (id, password, posts, comments, user_create_time, user_revision_time) value (?, ?, 0, 0, now(), now())`, [ctr.id, ctr.password], function(err, result){
        if(err){
            throw err;
        }
        else {
            res.json({"msg" : "success"});
            console.log(ctr.id + ' sign up !!!');
        }
    })
})

router.get('/login', function (req, res){
    res.render('login');
})

router.post('/login_process', function (req, res){
    let ctr= req.body;
    db.query(`select * from userTable where id=?`, [ctr.id], function (err, result){
        if(err){
            throw err;
        }
        else if (result[0] == null || ctr.password !== result[0].password){
            res.json({"msg" : "failed"});
        }
        else if (ctr.password == result[0].password) {
            req.session.loginId = ctr.id;
            res.json({"msg" : "success"});
            console.log(ctr.id + ' login !!!');
        }
    })
})

router.get('/logout_process', function (req, res){
    req.session.destroy(function(err){
        res.redirect('/');
    })
})
module.exports = router;