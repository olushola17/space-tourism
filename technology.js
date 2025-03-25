const techBtn = document.querySelectorAll(".tech-buttons");
const techDetails = {
    vehicle: document.querySelector("#tech-vehicle"),
    spaceport: document.querySelector("#tech-spaceport"),
    capsule: document.querySelector("#tech-capsule")
};
const techImg = {
    vehicleImg: document.querySelector('[data-img="vehicle"]'),
    spaceportImg: document.querySelector('[data-img="spaceport"]'),
    capsuleImg: document.querySelector('[data-img="capsule"]')
};

techBtn.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonLink = button.dataset.btn;
        if (buttonLink === "tech-vehicle-btn") {
            techDetails.vehicle.style.display = "flex"
            techDetails.spaceport.style.display = "none"
            techDetails.capsule.style.display = "none"
            techImg.vehicleImg.style.display = "flex"
            techImg.spaceportImg.style.display = "none"
            techImg.capsuleImg.style.display = "none"
        } else if (buttonLink === "tech-spaceport-btn") {
            techDetails.vehicle.style.display = "none"
            techDetails.spaceport.style.display = "flex"
            techDetails.capsule.style.display = "none"
            techImg.vehicleImg.style.display = "none"
            techImg.spaceportImg.style.display = "flex"
            techImg.capsuleImg.style.display = "none"
        } else if (buttonLink === "tech-capsule-btn") {
            techDetails.vehicle.style.display = "none"
            techDetails.spaceport.style.display = "none"
            techDetails.capsule.style.display = "flex"
            techImg.vehicleImg.style.display = "none"
            techImg.spaceportImg.style.display = "none"
            techImg.capsuleImg.style.display = "flex"
        }
    });
});

techBtn[0].classList.add("active");

techBtn.forEach((button) => {
    button.addEventListener("click", () => {
        techBtn.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});


// button.style.backgroundColor = "#fff"
// button.style.color = "#0B0D17"