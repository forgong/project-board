$("#post").on("click", function (){
    let category_no = $('#category_no option:selected').val();
    let post_title = $('#post_title').val();
    let post_body = $('#post_body').val();
    $.ajax({
        url : "/postCreate_process",
        dataType : 'json',
        data : {
            'category_no' : category_no,
            'post_title' : post_title,
            'post_body' : post_body
        },
        type : "post",
        error : function (jqXHR, textStatus, errorThrown) {
            console.log("jqXHR : " + jqXHR)
            console.log("textStatus : " + textStatus)
            console.log("errorThrown : " + errorThrown)
            console.log("ajax 호출 실패")
        },
        success : function (result) {
            if(result.msg == "success"){
                alert('글쓰기 완료');
                window.location.href = '/'
            } else {
                alert('다시 확인해주세요');
            }
        }
    })
})