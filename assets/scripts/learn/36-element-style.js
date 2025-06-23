// --------------------------------------------------------------------------
// JavaScript로 CSS 스타일 설정
// --------------------------------------------------------------------------

// 요소의 style 속성을 사용해 CSS styling
// 동적으로 DOM 요소 스타일 변경

const headline = document.querySelector("h1");
console.log(headline);

// Web API
// CSSStyleDeclaration {} 읽기
console.log(headline.style);

// CSSStyleDeclaration {} 쓰기
// headline.style["font-size"] = 100 + "px";
// headline.style.fontSize = 100 + "px";

// --------------------------------------------------------------------------
// style

headline.addEventListener("mouseenter", () => {
  headline.style.fontSize = 100 + "px";
  headline.style.color = "green";
});

headline.addEventListener("mouseleave", () => {
  headline.style.fontSize = 42.4 + "px";
  headline.style.color = "black";
});

// --------------------------------------------------------------------------
// setProperty()

headline.addEventListener("mouseenter", () => {
  headline.style.setProperty("font-weight", "700");
});

// Custom CSS 적용 시. setProperty로만 가능.
// headline.style.setProperty("--font-size", "300px")

// --------------------------------------------------------------------------
// 실습

// 1. `.box` 요소의 글자색을 변경합니다.
const box = document.querySelector(".box");
box.style.setProperty("color", "hotpink");

// 2. `.box` 요소의 배경색을 변경합니다.
box.style.setProperty("background-color", "lightblue");

// 3. `.box` 요소의 너비를 벼경합니다.
box.style.setProperty("width", "50%");

// 4. `.box` 요소의 높이를 변경합니다.
box.style.setProperty("height", "300px");

// 5. 버튼을 사용자가 클릭하면 .box 요소의 —-theme-color CSS 커스텀 속성을 변경합니다.
const button = document.querySelector(".change-theme-button");

button.addEventListener("click", () => {
  box.classList.add("themed-box");
  box.style.setProperty("--theme-color", "red");
});
