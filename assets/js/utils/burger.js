class BurgerMenu {
    constructor(menuToggleId, menuId) {
        this.menuToggle = document.getElementById(menuToggleId);
        this.menu = document.getElementById(menuId);
        this.init();
    }

    init() {
        this.menuToggle.addEventListener("click", () => {
            this.menu.classList.toggle("active");
        });
    }
}

const burgerMenu = new BurgerMenu("menu-toggle", "menu");
