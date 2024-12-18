class Modal {
    constructor(modalSelector, openBtnSelector, closeBtnSelector, formSelector) {
        this.modal = document.querySelector(modalSelector);
        this.openBtn = document.querySelector(openBtnSelector);
        this.closeBtn = document.querySelector(closeBtnSelector);
        this.form = document.querySelector(formSelector);

        this.openBtn.addEventListener("click", () => this.openModal());
        this.closeBtn.addEventListener("click", () => this.closeModal());
        window.addEventListener("click", (event) => this.handleOutsideClick(event));
        this.form.addEventListener("submit", (event) => this.handleFormSubmit(event));
    }

    openModal() {
        this.modal.style.display = "block";
    }

    closeModal() {
        this.modal.style.display = "none";
    }

    handleOutsideClick(event) {
        if (event.target === this.modal) {
            this.closeModal();
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const email = document.getElementById("emailInput").value;
        if (email) {
            alert(`Спасибо за обратную связь!`);
            this.closeModal();
            localStorage.setItem("userEmail", email);
        } else {
            alert("Пожалуйста, введите ваш email.");
        }
    }
}

const modal = new Modal("#modal", "#openModalBtn", ".modal__close", "#subscribeForm");