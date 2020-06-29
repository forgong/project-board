module.exports = {
    categoryList : function(resultCategory){
        var list = '<ul>'
        for(var i = 0; i < resultCategory.length; i++){
            list += `<li>${resultCategory[i].category}</li>`
        }
        list += '</ul>'
        return list;
    },
    categorySelect : function(resultCategory){
        var tag = `<select id="category_no"><option value="" selected>-- 게시판선택 --</option>`;
        for(var i = 0; i < resultCategory.length; i++){
            tag += `<option value="${resultCategory[i].no}">${resultCategory[i].category}</option>`
        }
        tag += '</select>'
        return tag;
    }

}