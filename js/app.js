const ul = document.querySelector("ul")
const menu = document.querySelector(".fa-bars")

//toggle menu
menu.addEventListener("click", function() {
    ul.classList.toggle("show")
    menu.classList.toggle('fa-xmark')
})

