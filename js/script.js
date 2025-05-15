

function info() {    
    const para = document.createElement("p");
    para.innerHTML = "更多資訊在這裡";
    document.querySelector("main").appendChild(para);
}

var date = new Date();
document.getElementById("today").innerHTML = date.toLocaleDateString(); // 美化日期格式