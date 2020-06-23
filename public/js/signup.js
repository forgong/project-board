$("#create").on("click", function (){
    let userId = $('#id').val();
    let userPassword = $('#password').val();
    $.ajax({
        url : "/signup_process",
        dataType : 'json',
        data : {
            'id' : userId,
            'password' : userPassword,
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
                alert('생성완료');
                window.location.href = '/login'
            } else {
                alert('제대로 입력하세요');
            }
        }
    })
})