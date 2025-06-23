{
  const accordionContainer = document.querySelector(".accordion__container");
  const accordions = accordionContainer.querySelectorAll(".accordion");

  // const firstAccordion = accordions.item(0);
  // const firstAccordionButton = firstAccordion.querySelector("button");
  // console.log(firstAccordionButton);

  // firstAccordionButton.addEventListener("click", () => {
  //   firstAccordion.classList.toggle("is-open");
  // });

  for (const accordion of accordions) {
    const accordionButton = accordion.querySelector("button");

    accordionButton.addEventListener("click", () => {
      accordion.classList.toggle("is-open");
    });
  }
}
