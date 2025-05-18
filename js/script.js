document.addEventListener("DOMContentLoaded", function() {
    const submit = document.getElementById("submit");
    const nameInput = document.getElementsByName("name")[0];
    const emailInput = document.getElementsByName("email")[0];
    const commentInput = document.getElementsByName("comment")[0];

    // 顯示日期
    const today = new Date().toLocaleDateString();
    document.getElementById("today").textContent = today;

    submit.addEventListener("click", function(e) {
        e.preventDefault(); // 防止表單刷新

        if (nameInput.value === "") {
            alert("請輸入姓名");
            return;
        }
        if (emailInput.value === "") {
            alert("請輸入 Email");
            return;
        }
        if (commentInput.value === "") {
            alert("請輸入留言");
            return;
        }

        // 成功送出留言
        alert("留言已送出，感謝您的分享！");
        nameInput.value = "";
        emailInput.value = "";
        commentInput.value = "";
    });
});
