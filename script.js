// let menu=document.querySelector(".menu-icon");
// let nav=document.querySelector(".menu-collapse");



// menu.addEventListener("click", function () {
//     menu.classList.toggle("icon-close");
//     nav.classList.toggle('open');
// });


const humberger = document.querySelector(".menu-icon")
const close = document.querySelector(".close-icon")

const navs = document.querySelector(".menu-collapse")


humberger.addEventListener("click", function () {
    close.style = "display: flex"
    humberger.style = "display: none"
    navs.style = "display: flex"
})
close.addEventListener("click", function () {
    humberger.style = "display: flex"
    close.style = "display: none"
    navs.style = "display: none"
    navs.removeAttribute('style')
}) 