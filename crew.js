const carouselBtn = document.querySelectorAll(".carousel");
const crewDetails = {
    commander: document.querySelector("#crew-commander"),
    specialist: document.querySelector("#crew-specialist"),
    pilot: document.querySelector("#crew-pilot"),
    engineer: document.querySelector("#crew-engineer")
};
const crewImg = {
    douglas: document.querySelector('[data-img="douglas"]'),
    mark: document.querySelector('[data-img="mark"]'),
    victor: document.querySelector('[data-img="victor"]'),
    ansari: document.querySelector('[data-img="ansari"]')
};

carouselBtn.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonLink = button.dataset.link
        if (buttonLink === "commander") {
            crewDetails.commander.style.display = "flex";
            crewDetails.specialist.style.display = "none";
            crewDetails.pilot.style.display = "none";
            crewDetails.engineer.style.display = "none";
            crewImg.douglas.style.display = "flex";
            crewImg.mark.style.display = "none";
            crewImg.victor.style.display = "none";
            crewImg.ansari.style.display = "none";
        } else if (buttonLink === "specialist") {
            crewDetails.commander.style.display = "none";
            crewDetails.specialist.style.display = "flex";
            crewDetails.pilot.style.display = "none";
            crewDetails.engineer.style.display = "none";
            crewImg.douglas.style.display = "none";
            crewImg.mark.style.display = "flex";
            crewImg.victor.style.display = "none";
            crewImg.ansari.style.display = "none";
        } else if (buttonLink === "pilot") {
            crewDetails.commander.style.display = "none";
            crewDetails.specialist.style.display = "none";
            crewDetails.pilot.style.display = "flex";
            crewDetails.engineer.style.display = "none";
            crewImg.douglas.style.display = "none";
            crewImg.mark.style.display = "none";
            crewImg.victor.style.display = "flex";
            crewImg.ansari.style.display = "none";
        } else if (buttonLink === "engineer") {
            crewDetails.commander.style.display = "none";
            crewDetails.specialist.style.display = "none";
            crewDetails.pilot.style.display = "none";
            crewDetails.engineer.style.display = "flex";
            crewImg.douglas.style.display = "none";
            crewImg.mark.style.display = "none";
            crewImg.victor.style.display = "none";
            crewImg.ansari.style.display = "flex";
        }
    });
});

carouselBtn[0].classList.add("active");

carouselBtn.forEach((button) => {
    button.addEventListener("click", () => {
        carouselBtn.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});
