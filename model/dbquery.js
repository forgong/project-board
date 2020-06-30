const db = require('../lib/db');
const list = require('../lib/list');


exports.abc = function(){
    db.query(`select * from user`, function (err,result){
        var id = result[0].id
        return id;
    })
}

exports.abc = function(){

}