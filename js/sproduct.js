let mainImg = document.querySelector(".main-img");
let img = document.querySelectorAll(".img img");

img[0].onclick = function () {
    mainImg.src = img[0].src;
}
img[1].onclick = function () {
    mainImg.src = img[1].src;
}
img[2].onclick = function () {
    mainImg.src = img[2].src;
}
img[3].onclick = function () {
    mainImg.src = img[3].src;
}

let menuBars = document.querySelector(".menu-bars");
let menuLinks = document.querySelector(".menu-links");
let close = document.querySelector(".mark");

menuBars.onclick = function () {
    menuLinks.classList.add("open");
};

close.onclick = function () {
    menuLinks.classList.remove("open");
};