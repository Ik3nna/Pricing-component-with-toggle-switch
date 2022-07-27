const display = document.querySelector(".container");

const switchBtn = document.querySelector("#switch");

switchBtn.addEventListener("click", function () {
    display.classList.toggle("display");
});