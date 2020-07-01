const mysql = require('mysql2/promise');
const dboptions = require('./dboptions');
const db = mysql.createPool(dboptions);

exports.userInsert = async function(id, password){
    try {
        const connection = await db.getConnection(async conn => conn) 
        try{
            var [rows] = await connection.query('insert into userTable (id, password, posts, comments, user_create_time, user_revision_time) value (?, ?, 0, 0, now(), now())', [id, password]);
            connection.release();
			return rows;
        } catch(err){
            console.log('Query err');
            connection.release();
            return false;
        }
    } catch(err){
        console.log('DB Error');
        return false;
    }
},
exports.userSelect_id = async function(id){
    try {
        const connection = await db.getConnection(async conn => conn) 
        try{
            var [rows] = await connection.query('select * from userTable where id=?', [id]);
            connection.release();
			return rows;
        } catch(err){
            console.log('Query err');
            connection.release();
            return false;
        }
    } catch(err){
        console.log('DB Error');
        return false;
    }
},
exports.categorySelect = async function(){
    try {
        const connection = await db.getConnection(async conn => conn) 
        try{
            var [rows] = await connection.query('select * from categoryTable');
            connection.release();
            return rows;
        } catch(err){
            console.log('Query err');
            connection.release();
            return false;
        }
    } catch(err){
        console.log('DB Error');
        return false;
    }
},
exports.postInsert = async function(category_no, post_title, post_body, session){
    try {
        const connection = await db.getConnection(async conn => conn) 
        try{
            var [rows] = await connection.query('insert into posttable (category_no, post_title, body, comments, id, views, recommends, Declarations, post_create_time, post_revision_time) value (?,?,?,0,?,0,0,0,now(),now())', [category_no, post_title, post_body, session]);
            connection.release();
			return rows;
        } catch(err){
            console.log('Query err');
            connection.release();
            return false;
        }
    } catch(err){
        console.log('DB Error');
        return false;
    }
},
exports.postSelect = async function(){
    try {
        const connection = await db.getConnection(async conn => conn) 
        try{
            var [rows] = await connection.query('select * from postTable');
            connection.release();
            return rows;
        } catch(err){
            console.log('Query err');
            connection.release();
            return false;
        }
    } catch(err){
        console.log('DB Error');
        return false;
    }
},
exports.postSelect_category_no = async function(category_no){
    try {
        const connection = await db.getConnection(async conn => conn) 
        try{
            var [rows] = await connection.query('select * from postTable where category_no=?', [category_no]);
            connection.release();
            return rows;
        } catch(err){
            console.log('Query err');
            connection.release();
            return false;
        }
    } catch(err){
        console.log('DB Error');
        return false;
    }
}