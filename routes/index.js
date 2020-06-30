const express = require('express');
const router = express.Router();
const login = require('../lib/login');
const list = require('../lib/list');
const db = require('../lib/db');
const path = require('path');
const dd = require('../model/dbquery');


router.get('/', function (req, res) {
    console.log('join id :  ' + req.session.loginId);
    var loginUI = login.loginUI(req,res);
    db.query(`select * from categoryTable`, function (err,resultCategory){
        var categoryList = list.categoryList(resultCategory);
        db.query(`select * from postTable`, function(err, resultpost){
            var postList = list.postList(resultpost)
            res.render('index', {
                loginUI,
                categoryList,
                postList
            });
        })
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

router.get('/postCreate', function (req, res){
    if(req.session.loginId != undefined){
        db.query(`select * from categoryTable`, function(err, resultCategory){
            var categorySelect = list.categorySelect(resultCategory);
            res.render('postCreate', {
                categorySelect
            });
        })
    }
    else {
        res.redirect('/login')
    }
})

router.post('/postCreate_process', function (req, res){
    let ctr = req.body;
    db.query(`insert into posttable (category_no, post_title, body, comments, id, views, recommends, Declarations, post_create_time, post_revision_time) value (?,?,?,0,?,0,0,0,now(),now())`, [ctr.category_no, ctr.post_title, ctr.post_body, req.session.loginId], function(err,result){
        if(err){
            res.json({"msg" : "error"});
        }
        else {
            res.json({"msg" : "success"});
            console.log(req.session.loginId + ' postCreate !!!');
        }
    })
})

router.get('/page:pageId', function(req, res){
    var loginUI = login.loginUI(req,res);
    var category_no = path.parse(req.params.pageId).base;
    db.query(`select * from categoryTable`, function (err,resultCategory){
        var categoryList = list.categoryList(resultCategory);
        var categoryTitle = resultCategory[category_no-1].category;
        db.query(`select * from postTable where category_no=?`, [category_no], function (err, resultpost){
            var postList = list.postList(resultpost)
            res.render('category', {
                loginUI,
                categoryList,
                categoryTitle,
                postList,
            });
        })
    })
})

module.exports = router;