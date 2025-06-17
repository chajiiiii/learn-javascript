const openButton = document.querySelector("main .button");
const closeButton = document.querySelector(".modal-close-button");

const body = document.body;
const modal = document.querySelector(".modal-overlay");

function openModal() {
  body.classList.add("modal-is-open");
}

openButton.addEventListener("click", openModal);

function closeModal() {
  body.classList.remove("modal-is-open");
}

closeButton.addEventListener("click", closeModal);
