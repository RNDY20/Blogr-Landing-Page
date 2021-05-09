export class Nav {
    constructor(toggle) {
        const navLinks = document.querySelector(".js-nav-links");
        const open = document.querySelector(".js-open");
        const close = document.querySelector(".js-close");
        const dropDownLinks = [...document.querySelectorAll(".js-dropdown")];
        toggle.addEventListener("click", () => {
            this.toggleNav(navLinks)
            this.toggleClose(navLinks, open, close)
            this.toggleDropdown(dropDownLinks)
        });
    }

    toggleNav = (navLinks) => {
        navLinks.classList.toggle("active")
    }

    toggleClose = (navLinks, open, close) => {
        if (navLinks.classList.contains("active")) {
            open.style.visibility = "hidden"
            close.style.visibility = "visible"
        } else {
            open.style.visibility = "visible"
            close.style.visibility = "hidden"
        }
    }

    toggleDropdown = (dropDownLinks) => {
        dropDownLinks.map(link => {
            link.addEventListener("click", () => {
                let active = link.classList.contains("show")
                this.collapse(dropDownLinks)
                link.classList.toggle("show", !active)
            })
        })
    }
    collapse = (dropDownLinks) => {
        dropDownLinks.map(link => {
            link.classList.remove("show")
        })
    }
}