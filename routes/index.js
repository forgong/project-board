const express = require('express');
const router = express.Router();
const login = require('../lib/login');
const list = require('../lib/list');
const db = require('../lib/db');
const path = require('path');

router.get('/', async function (req, res) {
    console.log('join id :  ' + req.session.loginId);
    var loginUI = login.loginUI(req,res);
    var categoryList = list.categoryList(await db.categorySelect());
    var postList = list.postList(await db.postSelect())
        res.render('index', {
            loginUI,
            categoryList,
            postList
        });
})

router.get('/signup', function (req, res){
    res.render('signup');
})

router.post('/signup_process', async function (req, res){
    let ctr = req.body;
    var result = await db.userInsert(ctr.id, ctr.password);
    if(result == false){
        res.json({"msg" : "failed"});
    }else {
        res.json({"msg" : "success"});
        console.log(ctr.id + ' sign up !!!');
    }
})

router.get('/login', function (req, res){
    res.render('login');
})

router.post('/login_process', async function (req, res){
    let ctr= req.body;
    var result = await db.userSelect_id(ctr.id)
    if(result[0] == null || ctr.password !== result[0].password){
        res.json({"msg" : "failed"});
    }
    else if (ctr.password == result[0].password) {
        req.session.loginId = ctr.id;
        res.json({"msg" : "success"});
        console.log(ctr.id + ' login !!!');
    }
})

router.get('/logout_process', function (req, res){
    req.session.destroy(function(err){
        res.redirect('/');
    })
})

router.get('/postCreate:pageId', async function (req, res){
    if(req.session.loginId != undefined){
        var pageNo = path.parse(req.params.pageId).base;
        var categorySelect = list.categorySelect(await db.categorySelect(), pageNo);
        res.render('postCreate', {
            categorySelect
        });
    }
    else {
        res.redirect('/login')
    }
})

router.post('/postCreate_process', async function (req, res){
    let ctr = req.body;
    var result = await db.postInsert(ctr.category_no, ctr.post_title, ctr.post_body, req.session.loginId)
        if(result == false){
            res.json({"msg" : "failed"});
        }
        else {
            res.json({"msg" : "success"});
            console.log(req.session.loginId + ' postCreate !!!');
        }
})

router.get('/page:pageId', async function(req, res){
    var loginUI = login.loginUI(req,res);
    var category_no = path.parse(req.params.pageId).base;
    var result = await db.categorySelect();
    var categoryList = list.categoryList(await db.categorySelect());
    var categoryTitle = result[category_no-1].category;
    var postList = list.postList(await db.postSelect_category_no(category_no))
    res.render('category', {
        loginUI,
        categoryList,
        categoryTitle,
        postList,
        category_no
    });    
})

module.exports = router;