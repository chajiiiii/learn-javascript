// CSS 리니어 그래디언트에 애니메이션 설정
// linear-gradient() + transition
(() => {
  [
    { name: "--banner-link-begin", initialValue: "#ff905c" },
    { name: "--banner-link-end", initialValue: "#ed027c" },
  ].forEach((propertyDefinition) => {
    CSS.registerProperty({
      name: propertyDefinition.name,
      inherits: false,
      syntax: "<color>",
      initialValue: propertyDefinition.initialValue,
    });
  });
})();

(() => {
  /* global gsap */

  function animate() {
    const tl = gsap.timeline({
      repeat: 1,
      defaults: { duration: 0.7, ease: "ease" },
    });

    const h2 = document.querySelector(".banner__title");
    const firstEl = h2.firstElementChild;
    const secondEl = h2.lastElementChild;

    tl.from(firstEl, { x: 100 });
    tl.from(secondEl, { x: 150 });

    // tl.to("#earth", { x: 5, scale: 0.8 });
    // tl.to("#controller", { x: 5, scale: 0.8 });
    // tl.to("#basketball", { x: 5, scale: 0.8 });
    // tl.to("#book_1_", { x: 5, scale: 0.8 });
    // tl.to("#pencil", { x: 5, scale: 0.8 }, "<");
    // tl.to("#ball", { x: 5, scale: 0.8 }, 0);
    // tl.to("#paint", { x: 5, scale: 0.8 });

    gsap.to("#earth", {
      scale: 0.8,
      duration: 1,
      yoyo: true,
      ease: "ease",
      repeat: -1,
    });

    gsap.to("#controller", {
      scale: 0.8,
      duration: 1,
      yoyo: true,
      ease: "ease",
      repeat: -1,
      delay: 0.2,
    });

    gsap.to("#book_1_", {
      scale: 0.8,
      duration: 1,
      yoyo: true,
      ease: "ease",
      repeat: -1,
      delay: 0.3,
    });

    gsap.to("#pencil", {
      scale: 0.9,
      duration: 1,
      yoyo: true,
      ease: "ease",
      repeat: -1,
      delay: 0.3,
    });

    gsap.to("#ball", {
      scale: 0.9,
      duration: 0.7,
      yoyo: true,
      ease: "ease",
      repeat: -1,
      delay: 0.3,
    });

    gsap.to("#paint", {
      scale: 0.9,
      duration: 1,
      yoyo: true,
      ease: "ease",
      repeat: -1,
      delay: 0.5,
    });
  }

  setTimeout(animate, 300);
})();
