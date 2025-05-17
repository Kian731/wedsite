
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("moreBtn");
    const main = document.querySelector("main");

    btn.addEventListener("click", function () {
        const para = document.createElement("p");
        para.textContent = "預約甜點試吃請洽門市";
        para.classList.add("info-text");
        main.appendChild(para);
    });

    // 日期顯示
    const today = new Date().toLocaleDateString();
    document.getElementById("today").textContent = today;
});


