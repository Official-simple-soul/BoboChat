const ul = document.querySelector("ul")
const menu = document.querySelector(".fa-bars")
const chatBtn = document.querySelector(".chat-button")
const modal = document.querySelector(".modal-content")
const back = document.querySelector(".back")

//toggle menu
menu.addEventListener("click", function() {
    ul.classList.toggle("show")
    menu.classList.toggle('fa-xmark')
})

// toggle chat
chatBtn.addEventListener("click", function() {
    modal.classList.toggle("hidden")
    chatBtn.classList.toggle("hidden")
}
)

// close chat
back.addEventListener("click", function() {
    modal.classList.toggle("hidden")
    chatBtn.classList.toggle("hidden")
}
)

