
exports.categoryList = function(resultCategory){
    var list = '<ul>'
    list += `<li><a href="/">전체글보기</a></li>`
    for(var i = 0; i < resultCategory.length; i++){
        list += `<li><a href="/page${resultCategory[i].no}">${resultCategory[i].category}<a></li>`
    }
    list += '</ul>'
    return list;
},
exports.categorySelect = function(resultCategory, pageNo){
    var tag = `<select id="category_no"><option value="">-- 게시판선택 --</option>`;
    for(var i = 0; i < resultCategory.length; i++){
        var selected = '';
        if(pageNo == resultCategory[i].no){
            selected = 'selected'
        }
        tag += `<option value="${resultCategory[i].no}"${selected}>${resultCategory[i].category}</option>`
    }
    tag += '</select>'
    return tag;
},
exports.postList = function(resultPost){
    var list = `
            <table>
                <tr>
                    <th>no</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>추천수</th>
                    <th>작성일</th>
                </tr>    
            `
    for(var i = 0; i < resultPost.length; i++){
        list += `
            <tr>
                <td>${resultPost[i].no}</td>
                <td><a href="/post/${resultPost[i].no}">${resultPost[i].post_title}</a> ${resultPost[i].comments}</td>
                <td>${resultPost[i].id}</td>
                <td>${resultPost[i].views}</td>
                <td>${resultPost[i].recommends}</td>
                <td>${resultPost[i].post_create_time}</td>
            </tr>
            `
    }
    list += '</table>'
    return list;
}
