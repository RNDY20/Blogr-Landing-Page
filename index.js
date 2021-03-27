const nav = () => {
    const burger = document.querySelector(".burger");
    const mainNav = document.querySelector("#nav");
    burger.addEventListener("click", () => {
        mainNav.classList.toggle("active")
    });
}


nav()