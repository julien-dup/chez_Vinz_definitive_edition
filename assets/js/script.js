console.log("hello world")


/* Function Modal */

let card = document.querySelectorAll(".card2")
let modal = document.querySelector(".modal")

console.log(card)
console.log(modal)

card.forEach(element => {
   element.addEventListener("click", function(){
        console.log("ok")
        modal.style.display = "flex"
        modal.addEventListener("click", function(){
            modal.style.display = "none"
        })
    })
});


/* Function Toggle Menu */

function toggleMenu() {
    const navbar = document.querySelector(".navbar")
    const burger = document.getElementById("containMenuBurger")
    burger.addEventListener("click", () => {
        navbar.classList.toggle("show_nav")
        console.log("affichage")
        burger.classList.toggle("show_nav")
    })
}

toggleMenu()
let positionY = window.scrollY
console.log(positionY)