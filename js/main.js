/* Shortcode */
var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
/* 
variables
*/
let navBtn = query(".menubar");
let closeBtn = query(".close__btn")
let navlinks = query(".nav__links");
let btn_tabs = queryAll(".btn__tab");
/*
events
*/
navBtn.addEventListener("click", () => navlinks.classList.add("active"));
closeBtn.addEventListener("click", () => navlinks.classList.remove("active"));

btn_tabs.forEach(el => {
    el.addEventListener("click", () => {
        btn_tabs.forEach( tab => tab.classList.remove("active"));
        el.classList.add("active");
    });
});