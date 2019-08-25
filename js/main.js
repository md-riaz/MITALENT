/* Shortcode */
var query = document.querySelector.bind(document);
/* 
variables
*/
let navBtn = query(".nav");
let closeBtn = query(".close__btn")
let navlinks = query(".nav__links");

/*
events
*/
navBtn.addEventListener("click", () => navlinks.classList.add("active"));
closeBtn.addEventListener("click", () => navlinks.classList.remove("active"));