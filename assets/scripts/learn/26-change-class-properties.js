// -----------------------------------------
// Element.classList -> DOM Token List {add, remove, contains, item, replace, toggle}

const exorcists = document.getElementById("exorcist-characters");

const choi = exorcists.querySelector(".master-choi");
console.dir(choi);

// -----------------------------------------
// replace
choi.classList.replace("master-choi", "administrator-choi");
console.log(choi.classList.value);

// -----------------------------------------
// item

let firstClassName = choi.classList.item(0);
console.log("first class: " + firstClassName);

// -----------------------------------------
// add, remove

// 요즘 방법
{
  choi.classList.add("active");
  console.log(choi.classList.value);

  choi.classList.remove("active");
  console.log(choi.classList.value);
}

// 오래된 방법
{
  console.log(choi.className);

  choi.className = choi.className + " active";
  // choi.className += " active";

  console.log(choi.className);
}

{
  // villain-ghost 항목 요소를 찾아서 클래스 이름을 여럿 추가한 뒤,
  // 다시 클래스 이름을 여럿 제거해봅니다.

  const villain = exorcists.querySelector(".villain-ghost");

  villain.classList.add("c1");
  console.log(villain.classList.value);

  villain.classList.remove("c1");
  console.log(villain.classList.value);
}

// -----------------------------------------
// contains

// class 추가/제거 if else 문

let activeClassName = "character-is-active";

if (!choi.classList.contains(activeClassName)) {
  choi.classList.add(activeClassName);
} else {
  choi.classList.remove(activeClassName);
}

console.log(choi.classList.value);

// -----------------------------------------
// toggle. toggle로 추가/제거

choi.classList.toggle("activeClassName");
console.log(choi.classList.value);

// -----------------------------------------
// 실습

let addTag = document.querySelector(".add");
addTag.classList.add("text-primary");
console.log(addTag.classList.value);

let removeTag = document.querySelector(".remove");
console.log(removeTag.classList.length);
removeTag.classList.remove("remove");
console.log(removeTag.classList.length);

let contains1Tag = document.querySelector(".contains1");
const result = contains1Tag.classList.contains("text-primary");
console.log(result);

let contains2Tag = document.querySelector(".contains2");
const result2 = contains2Tag.classList.contains("text-primary");
console.log(result2);

let toggleTag = document.querySelector(".toggle");
toggleTag.classList.toggle("text-primary");
console.log(toggleTag.classList.value);
