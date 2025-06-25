// --------------------------------------------------------------------------
// DOM 탐색 (Trasversing)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 아래로 탐색
// querySelector(), querySelectorAll()
// children, firstElementChild, lastElementChild

// --------------------------------------
// querySelector(), querySelectorAll()

const starWars = document.querySelector("#star-wars");

console.log(starWars);

const characters = starWars.querySelectorAll(".character");
console.log(characters);

// --------------------------------------
// children

() => {
  // children 은 HTMLCollection을 반환함
  const children = starWars.children;
  console.log(children);

  // 그래서 forEach()를 쓰려면 Array.from()을 사용하여 배열로 만들어주기
  console.log(Array.from(characters), Array.isArray(Array.from(children)));
  console.log(Array.from(children), Array.isArray(Array.from(children)));
};

// --------------------------------------
// firstElementChild, lastElementChild

console.log("첫번째 자식", starWars.firstElementChild);
console.log("막내 자식", starWars.lastElementChild);

// --------------------------------------------------------------------------
// 위로 탐색
// parentElement, closest()

() => {
  const das = document.querySelector("em");

  // --------------------------------------
  // parentElement
  // 부모로 한 단계씩 up

  // das의 부모
  console.log(das.parentElement);
  // das의 부모의 부모
  console.log(das.parentElement.parentElement);
  // das의 부모의 부모의 부모
  console.log(das.parentElement.parentElement.parentElement);

  // --------------------------------------
  // closest()
  // 선택자와 일치하는 가장 가까운 부모 찾기 (단, 나도 포함)
  console.log(das.closest("span"));
  console.log(das.closest("span.me"));
};

// --------------------------------------------------------------------------
// 옆으로 탐색
// previousElementSibling
// nextElementSibling
// prarentElement, children & index 조합

const faqList = document.querySelector(".faq-list");
const firstChild = faqList.firstElementChild;

// --------------------------------------
// previousElementSibling

console.log(firstChild.previousElementSibling);

// --------------------------------------
// nextElementSibling

console.log(firstChild.nextElementSibling);

// --------------------------------------
// prarentElement, children & index 조합

const lastChild = faqList.lastElementChild;
console.log(
  lastChild.previousElementSibling.previousElementSibling.dataset.index
);

const firstLink = faqList.querySelector("a[href^='/faq/']");

const parent = firstLink.closest("ul.faq-list");
console.log(parent);
console.log(parent.children.item(3).textContent);
