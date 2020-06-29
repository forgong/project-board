const db = require('../lib/db');
const list = require('../lib/list');


exports.category = function(){
    db.query(`select * from categorytable`, function (err,resultCategory){
    var categoryList = list.categoryList(resultCategory);
    return categoryList;
    })
}

exports.abc = function(){

}
