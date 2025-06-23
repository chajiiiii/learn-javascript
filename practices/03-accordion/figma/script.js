const accordions = document.querySelectorAll(".accordion");
console.log(accordions);

for (const accordion of accordions) {
  const button = accordion.querySelector("button");

  button.addEventListener("click", () => {
    accordion.classList.toggle("is-open");
  });
}
