// ----------------------------
// 조건문 if ... else

// falsey 값
// false, undefined, null, 0, "", NaN

let 조건 = 10;
let 값 = 9;

if (조건 == 값) {
  console.log("참 값");
} else {
  console.log("거짓 값");
}

let 신호등 = "노란색";

if (신호등 === "빨간색") {
  console.log("do not cross");
} else if (신호등 === "노란색") {
  console.log("better not cross");
} else {
  console.log("you can cross");
}

// ----------------------------
// 비교 연산자

x = 10;
y = 5;

// JavaScript는 상황에 따라 타입을 자동 변환

if (x == y) {
  console.log("this is truthy");
}
if (x === y) {
  console.log("this is truthy");
}
if (x != y) {
  console.log("this is truthy");
}
if (x !== y) {
  console.log("this is truthy");
}
if (x < y) {
  console.log("this is truthy");
}
if (x <= y) {
  console.log("this is truthy");
}
if (x > y) {
  console.log("this is truthy");
}
if (x >= y) {
  console.log("this is truthy");
}

// 개발자 작성
console.log(Boolean(24 == "24"));
// JavaScript 엔진 처리 (타입 자동 변환, 느슨한 비교)
console.log(Boolean("24" == "24"));

// 개발자 작성
console.log(Boolean(24 === "24"));
// JavaScript 엔진 처리 (타입 변경 안함, 엄격한 비교)
console.log(Boolean(24 === "24"));

// ----------------------------
// 비교 연산자

// 1. 명호는 24살, 아현이는 27살, 재웅이는 41살입니다.
let m = 24;
let a = 27;
let j = 41;

//     1. 성현이의 나이를 설정합니다.
let s = 32;

//     2. 성현이가 명호보다 어린지 확인하여 적절한 로그가 출력되도록 구성합니다.
if (s < m) {
  console.log("성현이가 명호보다 어림");
} else {
  console.log("성현이가 명호보다 늙음");
}

//     3. 성현이가 아현이보다 나이가 많은 지 확인한 후, 그렇다면 로그를 출력하도록 작성합니다.
if (s > a) {
  console.log("성현이가 아현이보다 나이가 많다");
} else {
  console.log("성현이가 아현이보다 나이가 적다");
}

//     4. 성현이가 재웅이보다 나이가 많은 지 확인하기 위한 코드 또한 작성해보세요.
if (s > j) {
  console.log("성현이가 재웅이보다 나이가 많다");
} else {
  console.log("성현이가 재웅이보다 나이가 적다");
}

// 2. 다음 중, 거짓(falsey)으로 평가되는 것을 골라보세요.
//     1. `null`
//     2. `true`
//     3. `-1`
//     4. `undefined`
//     5. `0`
//     6. `""`
//     7. `{}`
//     8. `false`
//     9. `" "`
//     10. `{ isHavingFun: true }`

// null, 0, "", false, undefined
