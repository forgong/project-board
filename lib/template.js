module.exports ={
    authStatusUI : function(req,res){
        var authStatusUI = `<a href="/login">login</a>`;
        if(req.session.loginId){
            authStatusUI = `<a href="/logout_process">logout</a>`;
        }
        return authStatusUI;
    },
    categoryList : function(resultCategory){
        var list = '<ul>'
        for(var i = 0; i < resultCategory.length; i++){
            list += `<li>${resultCategory[i].category}</li>`
        }
        list += '</ul>'
        console.log(list);
        return list;
    }
}