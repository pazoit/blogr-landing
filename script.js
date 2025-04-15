
const humberger = document.querySelector(".open")
const close = document.querySelector(".close")

const navs = document.querySelector(".navbar")


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