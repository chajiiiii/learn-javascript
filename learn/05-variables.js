console.log("변수");

let originalApples = 4;
let boughtApples = 27;

let totalApples = originalApples + boughtApples;
console.log(totalApples);

// ---------------------------------
// var 변수 vs let 변수

// block scope
{
  var myName;
  console.log(1, myName);

  myName = "cillian";
  console.log(2, myName);
}

myName = "murphy";
console.log(3, myName);

{
  let myName2;
  console.log(1, myName2);

  myName2 = "cillian";
  console.log(2, myName2);
}

myName2 = "murphy";
console.log(3, myName2);

// ---------------------------------
// 실습

// 1. `const` 키워드를 사용해 값이 변하지 않는 상수를 선언해봅니다.
//     1. "하루는 24시간"
//     2. "물의 어는 점은 섭씨 0도"
//     3. "삼각형 내각의 합은 180도"
//     4. "지구의 중력 가속도는 9.8 m/s²"

const hours = "하루는 24시간";
const freezeDegree = "물의 어는 점은 섭씨 0도";
const triangleDegree = "삼각형 내각의 합은 180도";
const earthSpeed = "지구의 중력 가속도는 9.8 m/s²";

// 2. 다음 내용을 코드로 작성해 결과 값을 콘솔 패널에 출력해보세요.
// 1. `let` 키워드를 사용해 `sum` 변수를 선언하고 값을 `0`으로 설정합니다.
let sum = 0;

// 2. `num1`, `num2` 변수를 선언하고, 각각`300`, `50`으로 값을 설정합니다.
// [1]
let num1 = 300;
let num2 = 50;

// [2]
// let num1, num2
// num1 = 300
// num2 = 50

// [3]
// let num1 = 300, num2 = 50

// [4]
// let num1 = 300,
//     num2 = 50,
//     num3 = -90

// 3. `num1`, `num2`의 합을 `sum` 변수에 할당합니다.
sum = num1 + num2;

// 3. 사람 이름, 나이, 오늘의 기온, 장바구니 상품 갯수, 집 주소, 현재 시간,
//   로그인 상태, 피자 가격, 학생 수 등에 걸맞는 변수 이름을 정하고 적절한 값을 설정합니다.

const name = "cillian";
let age = 50;
let celsius = 26;
let items = 3;
let address = "London";
let time = 1421;
let loggedIn = true;
let price = 32000;
let students = 30;
