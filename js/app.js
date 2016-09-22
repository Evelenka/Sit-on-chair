document.addEventListener("DOMContentLoaded", function () {

    var next = document.querySelector(".fa-chevron-right");
    var prev = document.querySelector(".fa-chevron-left");

    var allChairs = document.querySelector(".slider_wrapper>ul").children;

    var currentChair = 0;
    allChairs[currentChair].classList.add("visible");


    next.addEventListener("click", function () {
        allChairs[currentChair].classList.remove("visible");
        currentChair++;

        if (currentChair >= allChairs.length) {
            currentChair = 0;

        }
        allChairs[currentChair].classList.add("visible");

    });

    prev.addEventListener("click", function () {
        allChairs[currentChair].classList.remove("visible");
        currentChair--;
        if (currentChair < 0) {
            currentChair = allChairs.length - 1;
        }
        allChairs[currentChair].classList.add("visible");
    });
    
});