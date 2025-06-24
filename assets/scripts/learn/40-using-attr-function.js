/* global attr, setAttr, getAttr */

// --------------------------------------------------------------------------
// 📌 attr 유틸리티 함수 작성 및 활용
// --------------------------------------------------------------------------
(() => {
  const h1 = document.querySelector("h1");

  attr(h1, "blah", "blahblah");
  attr(h1, "data-category");

  // 속성 추가(쓰기)
  // - id="heading"
  // h1.setAttribute("id", "heading");
  setAttr(h1, "id", "HAHH");

  // - class="headline headline__level--1"
  h1.setAttribute("class", "headline headline__level--1");

  // - title="자바스크립트"
  h1.setAttribute("title", "자바스크립트");

  // - data-role="headline"
  h1.setAttribute("data-role", "headline");

  // - data-level="1"
  h1.setAttribute("data-level", "1");
})();

// h1 요소에 mouseenter 리스너 추가
(() => {
  const h1 = document.querySelector("h1");

  h1.addEventListener("mouseenter", () => {
    // 속성 읽기
    // - id
    // console.log(h1.getAttribute("id"));
    getAttr(h1, "id");

    // - class
    console.log(h1.getAttribute("class"));

    // - title
    console.log(h1.getAttribute("title"));

    // - data-role
    console.log(h1.getAttribute("data-role"));

    // - data-level
    console.log(h1.getAttribute("data-level"));
  });
})();
