const destinationLinks = document.querySelectorAll(".destination-links");
const destinations = {
    moon: document.querySelector("#destination-moon-bg"),
    mars: document.querySelector("#destination-mars-bg"),
    europa: document.querySelector("#destination-europa-bg"),
    titan: document.querySelector("#destination-titan-bg")
};

destinationLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
        e.preventDefault();
        destinationLinks.forEach((link) => {
            link.style.borderBottom = "2px solid rgba(100, 100, 100, 0%)";
        });
        const target = links.dataset.target     
        if (target === "moon") {
            destinations.moon.style.display = "flex";
            destinations.mars.style.display = "none";
            destinations.europa.style.display = "none";
            destinations.titan.style.display = "none";
        } else if (target === "mars") {
            destinations.moon.style.display = "none";
            destinations.mars.style.display = "flex";
            destinations.europa.style.display = "none";
            destinations.titan.style.display = "none";
        } else if (target === "europa") {
            destinations.moon.style.display = "none";
            destinations.mars.style.display = "none";
            destinations.europa.style.display = "flex";
            destinations.titan.style.display = "none";
        } else if (target === "titan") {
            destinations.moon.style.display = "none";
            destinations.mars.style.display = "none";
            destinations.europa.style.display = "none";
            destinations.titan.style.display = "flex";
        }

        links.style.borderBottom = "2px solid #fff";
    });
});