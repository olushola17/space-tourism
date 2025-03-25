// hamburger-menu
const hamburger = document.querySelector(".hamburger-menu-container");
const sideMenu = document.querySelector(".header-right");
const hamburgerState = document.querySelector(".hamburger-menu");

let menuOpen = false;

hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        sideMenu.classList.add("active"); // Slide in
        sideMenu.style.display = "flex"
        hamburgerState.src = "assets/shared/icon-close.svg"; // Show close icon
    } else {
        sideMenu.classList.remove("active"); // Slide out
        hamburgerState.src = "assets/shared/icon-hamburger.svg"; // Back to hamburger
        sideMenu.style.display = "none";
    }
});

const links = document.querySelectorAll(".links")
const headerLinks = document.querySelectorAll(".header-links")

const navContainer = {
    navHome: document.querySelector("#header-home"),
    navDestination: document.querySelector("#header-destination"),
    navCrew: document.querySelector("#header-crew"),
    navTech: document.querySelector("#header-tech")
}

links.forEach((link) => {
    link.addEventListener("click", () => {
        const container = link.dataset.linkContainer
        if (container === "home") {
            navContainer.navHome.style.borderBottom = "2px solid #fff"
            navContainer.navDestination.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
            navContainer.navCrew.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
            navContainer.navTech.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
        } else if (container === "destination") {
            navContainer.navHome.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
            navContainer.navDestination.style.borderBottom = "2px solid #fff"
            navContainer.navCrew.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
            navContainer.navTech.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
        } else if (container === "crew") {
            navContainer.navHome.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
            navContainer.navDestination.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
            navContainer.navCrew.style.borderBottom = "2px solid #fff"
            navContainer.navTech.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
        } else if (container === "tech") {
            navContainer.navHome.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
            navContainer.navDestination.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
            navContainer.navCrew.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)"
            navContainer.navTech.style.borderBottom = "2px solid #fff"
        }
    })
})

Object.values(navContainer).forEach(nav => {
    nav.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)";
  });

const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "index.html" || currentPage === "") {
  navContainer.navHome.style.borderBottom = "2px solid #fff";
} else if (currentPage === "destination-moon.html") {
  navContainer.navDestination.style.borderBottom = "2px solid #fff";
} else if (currentPage === "crew-commander.html") {
  navContainer.navCrew.style.borderBottom = "2px solid #fff";
} else if (currentPage === "technology-vehicle.html") {
  navContainer.navTech.style.borderBottom = "2px solid #fff";
}