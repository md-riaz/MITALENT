let navBtn = document.querySelector(".nav");
let closeBtn = document.querySelector(".close__btn")
let navlinks = document.querySelector(".nav__links");

navBtn.addEventListener("click", () => {
    navlinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navlinks.classList.remove("active");
});