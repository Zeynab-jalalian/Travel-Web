let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbar.classList.add("navbar-cng");
    } else {
        navbar.classList.remove("navbar-cng");
    }
});

const navbarCollapse=document.getElementById("navbar-collapse");
const navbarShowbtn=document.getElementById("navbar-show-btn");
const navbarClosebtn=document.getElementById("navbar-close-btn");

navbarShowbtn.addEventListener("click",()=>{
    navbarCollapse.classList.add("navbar-collapse-rmw");
})
navbarClosebtn.addEventListener("click",()=>{
    navbarCollapse.classList.remove("navbar-collapse-rmw");
})
