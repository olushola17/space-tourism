// explore button hover
const exploreBtn = document.querySelector(".home-right");
const exploreContainer = document.querySelector(".home-right-container");

exploreBtn.addEventListener("mouseover", () => {
    exploreContainer.style.backgroundColor = "rgba(100, 100, 100, 40%)"
    exploreContainer.style.transition = "background-color 0.5s ease";
});

exploreBtn.addEventListener("mouseout", () => {
    exploreContainer.style.backgroundColor = ""
});