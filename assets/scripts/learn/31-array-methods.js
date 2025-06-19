// --------------------------------------------------------------------------
// Array's Methods
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// indexOf()

// 배열에 항목을 찾을 때 쓸 수 있음.
// 인덱스 값(위치)으로 반환

// 배열 안의 객체 타입(함수, 배열, 객체)은 indexOf()로 판별 불가능
// 배열 원소에 primitives만 있는 경우 -> .indexOf()
// 배열 원소에 객체 타입이 포함된 경우 -> .findIndex()

const JS_학습_주제 = [
  "변수",
  "함수",
  "조건문",
  "객체",
  "배열",
  "비교 연산자",
  "부정 연산자",
];

() => {
  let 함수_인덱스, 비교_연산자_인덱스;

  함수_인덱스 = JS_학습_주제.indexOf("함수"); // 값: 1
  console.log(함수_인덱스);
  함수_인덱스 = JS_학습_주제.indexOf("함 수"); // 값: -1
  console.log(함수_인덱스);

  비교_연산자_인덱스 = JS_학습_주제.indexOf("비교"); // 값: -1
  console.log(비교_연산자_인덱스);
  비교_연산자_인덱스 = JS_학습_주제.indexOf("비교연산자"); // 값: -1
  console.log(비교_연산자_인덱스);
  비교_연산자_인덱스 = JS_학습_주제.indexOf("비교 연산자"); // 값: 5
  console.log(비교_연산자_인덱스);
};

// --------------------------------------------------------------------------
// Boolean 값으로 확인하기. indexOf() vs includes()

// indexOf()

const fruitBasket = ["패션후르츠", "애플망고", "워터멜론", "오렌지"];
console.log(fruitBasket.indexOf("패션") > -1);
console.log(fruitBasket.indexOf("패션후르츠") > -1);

function hasItem(arr, item) {
  return console.log("hasItem?", arr.indexOf(item) > -1);
}

hasItem(fruitBasket, "패션");
hasItem(fruitBasket, "오렌지");

// ---------------------------
// includes()
// Boolean 값으로 바로 반환함 💯

console.log("includes() :", fruitBasket.includes("애플망고"));

// --------------------------------------------------------------------------
// findIndex()
// 인덱스 값 반환

// 배열 원소에 primitives만 있는 경우 -> .indexOf()
// 배열 원소에 객체 타입이 포함된 경우 -> .findIndex()

const nameList = [{ name: "Alex" }, { name: "Ben" }, { name: "Cameron" }];

// 배열 안의 객체 타입(함수, 배열, 객체)은 indexOf()로 판별 불가능
console.log(nameList.indexOf({ name: "Alex" })); // -1

console.log(nameList.findIndex((person) => person.name === "Ben"));
const ben = nameList.findIndex((person) => {
  return person.name === "Ben";
});
console.log(ben);

const nestedArray = [
  [1, 2, 3],
  ["one", "two", "three"],
];

// nestedArray.findIndex(화살표함수)
nestedArray.findIndex((item) => {
  // 비교해서 값이 일치하면 그 값의 인덱스 값 반환
  return item.at(0) === 1;
  // 위는, 아이템 array 중 0번 값이 1 인걸 찾는거. 찾으면 그 array(item)의 인덱스 반환
});

// --------------------------------------------------------------------------
// 배열에 항목 추가

console.log(nameList);

// 1. 시작 위치에 새 항목 추가 - unshift()
{
  const length = nameList.unshift({ 이름: "차지현" });

  // 이것은 length를 반환
  console.log(length, nameList);
}

{
  JS_학습_주제.unshift("디버깅", "린터", "배열 메서드");
  console.log(JS_학습_주제);
}

// 2. 마지막 위치에 새 항목 추가 - push()
{
  nameList.push({ name: "David" });
  console.log(nameList);
}

// --------------------------------------------------------------------------
// 배열에 항목 제거

const counts = [101, 201, 301, 501];
console.log(counts);
console.log({ counts });

// 1. 처음 위치 항목 제거(제거된 값 반환) - shift()
const removedFirstItem = counts.shift();
console.log({ counts }, { removedFirstItem });

// 여러 항목을 맨 앞에서 순차적으로 제거
console.log(nameList);
const cha = nameList.shift();
const alex = nameList.shift();

console.log(cha);
console.log(alex);
console.log(nameList);

// 2. 마지막 위치 항목 제거 - pop()
const david = nameList.pop();
console.log(david);
console.log(nameList);

// ---------------------------------------------------------------------------
// 실습

const numbers = [9, 10, 3, 4, 7, 8];
// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
// [1, 2, 3, 4, 5, 6]

// numbers.shift();
// numbers.shift();
numbers.splice(0, 2);
// numbers.unshift(1, 2);
numbers.splice(0, 0, 1, 2);
// numbers.pop();
// numbers.pop();
numbers.splice(numbers.length - 2, 2);
// numbers.push(5, 6);
numbers.splice(numbers.length, 0, 5, 6);
console.log(numbers);

// --------------------------------------------------------------------------
// 중간위치에 추가 또는 삭제
// splice(시작 인덱스, 삭제할 갯수, 추가할 항목)

// 중간에 포함된 항목 삭제
// const removedItems = numbers.splice(0, 2);
// console.log(removedItems, numbers);

// numbers.splice(2, 2);
// console.log(numbers);

// 중간에 새 항목 추가
// splice(시작 인덱스, 삭제할 갯수, 추가할 항목) -> 시작인덱스 전에 추가
// numbers.splice(3, 0, 100, 101, 102);
// console.log(numbers);

// 중간에 포함된 항목 삭제 후 새 항목 추가

// --------------------------------------------------------------------------
// 배열 복사
// slice() -> 값 전체 복사
// slice(시작 인덱스, 끝 인덱스) -> 시작인덱스부터 끝 인덱스 전꺼까지 부분 복사
// slice(시작 인덱스, 끝 인덱스, 새항목1, 새항목2 ...)

// --------------------------------------------------------------------------
// 실습
const people = ["세종대왕", "이순신", "김구", "유관순", "장영실", "신사임당"];

// 1. people 배열에서 '이순신' 항목의 인덱스를 확인합니다.
// console.log(people.indexOf("이순신"));

// 2. people 배열 시작 위치에 '정약용', '지석영'을 추가합니다.
//     1. `unshift()` 활용
// people.unshift("정약용", "지석영");
//     2. `splice()` 활용
// people.splice(0, 0, "정약용", "지석영");

// 3. people 배열 끝 위치에 '김유신', '을지문덕'을 추가합니다.
//     1. `push()` 활용
// people.push("김유신", "을지문덕");

//     2. `splice()` 활용
// people.splice(people.length, 0, "김유신", "을지문덕");

// 4. people 배열 시작 위치에서 '세종대왕', '이순신'을 제거합니다.
//     1. `shift()` 활용
// people.shift();

//     2. `splice()` 활용
// people.splice(2, 2);

// 5. people 배열 끝 위치에서 '장영실', '신사임당'을 제거합니다.
//     1. `pop()` 활용
//     2. `splice()` 활용
// people.splice(people.length - 4, 2);

// 6. people을 복제한 새로운 배열 생성
//    people에서 '이순신', '김구'로 구성된 새로운 집합을 생성

// console.log(people);
// const newPeople = people.slice(1, 3);
// console.log(newPeople);
