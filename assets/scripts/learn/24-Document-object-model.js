// ---------------------------------
// DOM (문서 객체 모델)
// - 문서 요소 선택(접근)하는 함수들 (Web APIs)

console.log(document.getElementsByTagName("h1"));

console.log(document.getElementById("useremail"));

const emailInput = document.getElementById("useremail");
console.log(emailInput);

const elemendById = document.querySelector("#useremail");
console.log(elemendById);

const firstElementByClass = document.querySelector(".item");
console.log(firstElementByClass);

const allElementByTag = document.getElementsByTagName("li");
console.log(allElementByTag);

const app = document.getElementById("app");
console.log(app);

const appFirstListItem = app.querySelector("li.item");
console.log(appFirstListItem);

// -----------------------------------------
// 실습

// 1. id 속성으로 DOM 요소를 선택하여 콘솔 패널에 출력해봅니다.
const list = document.getElementById("exorcist-characters");
console.log(list);

// 2. id 속성으로 선택한 DOM 요소에서 다음을 수행하세요.
//     1. 태그 또는 클래스 이름, 속성 이름/값 등을 사용해 "박요한"을 선택해보세요.
console.log(list.querySelector(".yo-han"));
console.log(list.querySelector('[data-type="hero"]'));

//     2. 태그 또는 클래스 이름, 속성 이름/값 등을 사용해 "최강림"을 선택해보세요.
console.log(list.querySelector(".master-choi"));
console.log(list.querySelector('[data-type="master"]'));

//     3. 태그 또는 클래스 이름, 속성 이름/값 등을 사용해 "악령"을 선택해보세요.
console.log(list.querySelector(".villain-ghost"));
console.log(list.querySelector('[data-type="villain"]'));
