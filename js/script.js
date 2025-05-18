document.addEventListener("DomContentLoaded",function(){
    const submit = document.getElementById("submit");
    const name = document.getElementsByName("name");
    const email = document.getElementsByName("email");
    const comment = document.getElementsByName("comment");

    submit.addEventListener("click",function(){

        if([name.value == ""]||[email.value == ""]||[comment.value == ""]){
            if(name.value == ""){alert("請輸入姓名");}
            if(email.value == ""){alert("請輸入Email");}
            if(comment.value == ""){alert("請輸入留言");}                       
        }else{
            name.value ="";
            email.value ="";
            comment.value = "";
            alert("留言已送出，感謝您的分享！");
        }
    });

    const today = new Date().toLocaleDateString();
    document.getElementById("today").textContent = today;
});
