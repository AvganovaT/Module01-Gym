// Scroll 

const links = document.querySelectorAll(".arrow");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}


// Modal

function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal__bg").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal__bg").style.display = "none";
}