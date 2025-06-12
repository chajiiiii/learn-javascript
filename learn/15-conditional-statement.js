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
