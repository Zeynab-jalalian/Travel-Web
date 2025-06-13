let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbar.classList.add("navbar-cng");
    } else {
        navbar.classList.remove("navbar-cng");
    }
});

