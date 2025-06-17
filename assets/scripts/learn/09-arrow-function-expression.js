// 화살표 함수 표현식 (Arrow Function Expression)
let readABook = () => {
  console.log("read a book");
};

readABook();

let sayName = (name) => {
  console.log("My name is " + name);
};

sayName("Lee");

// ------------------------------
// 다양한 화살표 함수 구문
// ------------------------------
// 1. 매개변수의 갯수에 따른 구문 - 0개, 1개, 2개 이상

// 매개변수 0개. 괄호 대신 (_, x, $)를 쓸 수 있음

let readABook2 = ($) => {
  console.log("read a book");
};

// 매개변수 1개.
// 매개변수가 1개면 소괄호 없이 매개변수 이름만 넣어도 됨

let sayName2 = (name) => {
  console.log("My name is " + name);
};

// 매개변수 2개 이상.
// 소괄호 생략을 허용하지 않음.

let sayName3 = (firstName, lastName) => {
  console.log("My name is " + firstName + lastName);
};

// ------------------------------
// 2. 암묵적 반환
// 함수에 한 줄의 코드만 작성

// 함수 선언
const ROOT_FONT_SIZE = 16;

function pxToRem(px) {
  return px / ROOT_FONT_SIZE + "rem";
}

console.log(pxToRem(28));

// 화살표 함수 표현식. return 생략 하였지만 암묵적으로 return함

const pxToRem2 = (px) => px / ROOT_FONT_SIZE + "rem";

console.log(pxToRem2(28));

// ------------------------------
// 객체가 있는 함수를 화살표 함수로 변경하기

function getStyles() {
  let cssStyles = {
    display: "grid",
    "row-gap": 24,
  };
  return cssStyles;
}

console.log(getStyles());

// 방법 1

let getStyles2 = () => {
  return {
    display: "grid",
    "row-gap": 24,
  };
};

console.log(getStyles2());

// 방법 2
let getStyles3 = () => ({ display: "grid", "row-gap": 24 });

// ------------------------------
// 실습

// 1. 매개변수 없이, 값 10을 반환하는 ten 함수를 화살표 함수 표현식으로 작성해보세요.

const ten = () => 10;

// 2. 하나의 매개변수를 받는 logger 함수를 화살표 함수 표현식으로 작성해보세요. (괄호 사용 또는 사용 안함)

const logger = (message) => message;

logger("Hi");

// 3. pxToRem 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요.

const pxToRem3 = (px) => {
  return px * 0.625 + "rem";
};

const pxToRem4 = (px) => px * 0.625 + "rem";

// 4. percentage 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요.

const getPercentage = (part, total) => {
  return (part / total) * 100 + "%";
};

const getPercentage2 = (part, total) => (part / total) * 100 + "%";
