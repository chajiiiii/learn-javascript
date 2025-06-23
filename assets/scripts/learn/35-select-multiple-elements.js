/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// querySelectorAll()
// --------------------------------------------------------------------------

const links = document.querySelectorAll("a");
console.log(links);

// NodeList 객체는 배열이 아님.
// 배열과 유사해 보이지만 배열이 아니어서 배열 method를 사용할 수 없음
console.log(Array.isArray(links));

// 아래 방법을 통해 배열로 만든 변수를 만들 수 있음. 노드리스트 -> 배열
const linksArray = Array.from(links);
console.log(linksArray);
console.log(links);

{
  // JavaScript 객체--------
  // - Object
  // - Array
  // - Function
  // - Map
  // - Set
  // ...
  // Web Browser (JavaScript 실행 환경)--------
  // - window 객체
  // - document 객체
  // - screen 객체
  // - location 객체
  // - history 객체
  // - NodeList 객체
  // - HTMLCollection 객체
  // Node.js 런타임 (JavaScript 실행 환경)--------
  // - Global
}

// --------------------------------------------------------------------------
// element.item(). 텍스트 접근

const lifeTips = document.querySelector(".life-tips");
console.log(lifeTips);

const liftTipsParagraphs = lifeTips.querySelectorAll("p");
console.log(liftTipsParagraphs);

const firstParagraph = liftTipsParagraphs.item(0);
console.log(firstParagraph);
const secondParagraph = liftTipsParagraphs.item(1);
console.log(secondParagraph);
const lastParagraph = liftTipsParagraphs.item(2);
console.log(lastParagraph);

// --------------------------------------------------------------------------
// Loop 하여 접근
// - while, do...while, for, for...of, forEach()

// while
// let i = 0,
//   l = liftTipsParagraphs.length;
// while (i < l) {
//   const paragraphElement = liftTipsParagraphs.item(i);
//   console.log(paragraphElement);
//   ++i;
// }

// for
// for (let i = 0, l = liftTipsParagraphs.length; i < l; ++i) {
//   const paragraphElement = liftTipsParagraphs.item(i);
//   console.log(paragraphElement);
// }

// for...of
// for (const paragraphElement of liftTipsParagraphs) {
//   console.log(paragraphElement);
// }

// forEach()
liftTipsParagraphs.forEach((paragraphElement) => {
  console.log(paragraphElement);
  paragraphElement.classList.add("color-primary");
});

const PRIMARY_KEY = "color-primary";

// --------------------------------------------------------------------------
// getElementsByTagName(), getElementsByClassName()
// HTMLCollection vs. NodeList

{
  console.group("DOM 업데이트 전");
  // HTMLCollection (Live)
  const paras = document.getElementsByTagName("p");
  console.log("HTMLCollection(라이브 콜렉션: 살아있는 집합) =", paras.length);

  const paraClasses = document.getElementsByClassName("para");
  console.log(
    "HTMLCollection(라이브 콜렉션: 살아있는 집합) =",
    paraClasses.length
  );

  // NodeList
  const paragraphs = document.querySelectorAll("p");
  console.log("NodeList(스태틱 콜렉션: 고정된 집합)", paragraphs.length);
  console.groupEnd();

  // Update DOM
  document.querySelector(".life-tips").innerHTML +=
    "<p>씻지 않은 채소는 그대로 보관하시는 것이 좋습니다.</p>";

  console.group("DOM 업데이트 후");
  console.log("HTMLCollection(라이브 콜렉션: 살아있는 집합) =", paras.length);
  console.log(
    "HTMLCollection(라이브 콜렉션: 살아있는 집합) =",
    paraClasses.length
  );
  console.log("NodeList(스태틱 콜렉션: 고정된 집합)", paragraphs.length);
  console.groupEnd();
}

// --------------------------------------------------------------------------
// 실습

// querySelectorAll() 메서드를 사용해 연습해보세요.

const starWars = document.querySelector("#star-wars");
console.log(starWars);
// 1. 좋은 사람(Good Guy)을 모두 선택하세요.
const goodGuys = starWars.querySelectorAll("[data-type='good-guy']");
console.log(goodGuys);

// 2. 좋은 사람(Good Guy) 모두에게 `excellent` 클래스 이름을 추가하세요.
goodGuys.forEach((guy) => {
  guy.classList.add("excellent");
});

// 3. 빌런(Villain)을 모두 선택하세요.
const badGuys = starWars.querySelectorAll("[data-type='villain']");
console.log(badGuys);

// 4. 빌런 모두에게 `naughty` 클래스 이름을 추가하세요.
// for (const guy of badGuys) {
//   guy.classList.add("naughty");
// }

for (let i = 0; i < badGuys.length; i++) {
  const badGuy = badGuys[i];
  badGuy.classList.add("naughty");
}

// 5. 모든 캐릭터(Character)를 선택하세요.
const allCharacters = starWars.querySelectorAll(".character");
console.log(allCharacters);

// 6. 모든 캐릭터에 `star-wars` 클래스 이름을 추가하세요.
allCharacters.forEach((c) => {
  c.classList.add("star-wars");
});
