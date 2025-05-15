document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("infoBtn");
    const main = document.querySelector("main");

    btn.addEventListener("click", function () {
        const para = document.createElement("p");
        para.textContent = "更多資訊在這裡";
        para.classList.add("info-text");
        main.appendChild(para);
    });

    // 日期顯示
    const today = new Date().toLocaleDateString();
    document.getElementById("today").textContent = today;
});