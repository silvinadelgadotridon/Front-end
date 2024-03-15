"use strict";

let nav = document.querySelector(".navegacion");
let itemsNav = document.querySelectorAll("li.item-nav");

document.querySelector(".btn-menuresponsive").addEventListener("click", toggleMenu);

function toggleMenu() {
    nav.classList.toggle("show");
    for (let i = 0; i < itemsNav.length; i++) {
        itemsNav[i].addEventListener("click", function () {
            nav.classList.remove("show");
        });
    }
}

