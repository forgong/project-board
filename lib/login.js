exports.loginUI = function(req,res){
    var loginUI = `<a href="/login">login</a>`;
    if(req.session.loginId){
        loginUI = `<a href="/logout_process">logout</a>`;
    }
    return loginUI;
}
