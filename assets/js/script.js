
/* Function Modal */

let card = document.querySelectorAll(".card2")
let modal = document.querySelector(".modal")


card.forEach(element => {
   element.addEventListener("click", function(){
        console.log("ok")
        modal.style.display = "flex"
        modal.addEventListener("click", function(){
            modal.style.display = "none"
        })
    })
});


/* Function Toggle Menu Burger */

function toggleMenu() {
    const navbar = document.querySelector(".navbar")
    const burger = document.getElementById("containMenuBurger")
    burger.addEventListener("click", () => {
        navbar.classList.toggle("show_nav")
        burger.classList.toggle("show_nav")
        document.addEventListener("scroll", function() {    
            var intElemScrollDown = document.body.scrollTop || document.documentElement.scrollTop;
            console.log(intElemScrollDown)
            if (intElemScrollDown > 250) {
                document.querySelector(".show_nav .navbar_links" ).style.top = "10%"
            } else {
                document.querySelector(".show_nav .navbar_links").style.top = "30%" 
            }
        })
    })
}

toggleMenu()


/* MOVER SCROLL */

const first = document.querySelector(".navbar_link_first")
const second = document.querySelector(".navbar_link_second")
const third = document.querySelector(".navbar_link_third")
const fourth = document.querySelector(".navbar_link_fourth")
const fifth = document.querySelector(".navbar_link_fifth")
const navbar = document.querySelector(".navbar")
const burger = document.getElementById("containMenuBurger")


first.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("slogan").scrollIntoView({behavior: 'smooth',  block: "end"})
})

second.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("containMenuCard").scrollIntoView({behavior: 'smooth',block: "start"})
})

third.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("Nous_trouver").scrollIntoView({behavior: 'smooth', block: "start"})
})


fourth.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("Nous_contacter").scrollIntoView({behavior: 'smooth', block: "start"})
})

fifth.addEventListener("click", function(){
    navbar.classList.toggle("show_nav")
    burger.classList.toggle("show_nav")
    document.getElementById("Notre_histoire").scrollIntoView({behavior: 'smooth' , block: "start"})
})


/* HEADER EFFECT */

document.addEventListener("scroll", function() {    
var intElemScrollDown = document.body.scrollTop || document.documentElement.scrollTop;
console.log(intElemScrollDown)
if (intElemScrollDown > 250) {
    console.log("ok")
    document.getElementById("header").style.height = "10%" 
    document.getElementById("logo").style.width = "30%"   
    document.getElementById("header").style.justifyContent = "space-around"
  
    } else {
        document.getElementById("header").style.height = "30%"  
        document.getElementById("logo").style.width = "70%"   
        document.getElementById("header").style.justifyContent = "none"
    }
})

