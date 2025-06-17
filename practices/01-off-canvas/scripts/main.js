const body = document.querySelector("body");
console.log(body);

const menuButton = body.querySelector("main button");
console.log(menuButton);

// menuButton.addEventListener("click", () => {
//   body.classList.toggle("offsite-is-open");
// });

function toggleClass() {
  body.classList.toggle("offsite-is-open");
}

menuButton.addEventListener("click", toggleClass);
