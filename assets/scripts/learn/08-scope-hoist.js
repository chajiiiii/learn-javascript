// Hoisting
// -----------------------------------------------------
// 스코프(Scope)
// - 코드 영역(범위)
// - 전역(전체 영역: global scope)
// - 지역(일부 영역: local scope)
//
// 호이스트(Hoist)
// - 무엇을 끌어올리나?
// - [ 함수 선언 ]을 [ 코드 작성 영역의 가장 상단 ]으로 끌어올린다.
// - [ var 변수 선언 ]을 [ 코드 작성 영역의 가장 상단 ]으로 끌어올린다.

// ---------------------------
// 함수

// JS는 코드 전체를 쓱 스캔 후 함수를 메모리에 기억하고
// 이를 통해 함수가 function 함수 선언보다 먼저 호출 되었을 때 작동이 된다.

함수();

function 함수() {
  console.log("함수가 실행되었어요!");
}

// ---------------------------
// var 변수

console.log(내이름1);

var 내이름1 = "리사";

// 위 코드의 결과는 undefined로 나옴
// 아래처럼 작동하기 때문
// 변수 이름만 가져오고 값은 가져오지 않음.

var 내이름2;

console.log(내이름2);

내이름2 = "리사";

// ---------------------------
// let, const 변수
// 이 코드는 var과 다르게 error로 나옴
// console.log(내이름3);

let 내이름3 = "리사";

// ---------------------------
// 함수를 만드는 두가지 방법
// 1. 함수 선언 (Function Declaration)
// 2. 함수 표현식 (Function Expression)

// ---------------------------
// 1. 함수 선언

function look(who) {
  console.log(who + "를 보다.");
}

look("구름이");

// ---------------------------
// 2. 함수 표현식
// 자바스크립트는 함수를 값(value)로 취급
// 'let 변수 = 함수' 가 가능

let 보다 = function (누구) {
  console.log(누구 + "를 보다.");
};

보다("나");
보다("너");

// 하지만 표현식은 호이스팅이 안됨.
// let 변수 선언과 같이 값(function)은 빼고 선언부만 저장이 되기 때문
// ---------------------------
// 실습

// 1. logger 이름의 함수를 선언하고, logMessage 매개변수로 받아 콘솔 패널에 출력하도록 작성합니다.

function logger(logMessage) {
  console.log("로그 메세지: " + logMessage);
}

logger("실습을 통한 연습은 언제나 옳습니다. 😊");

// 2. px 값을 rem 단위 값으로 변경하는 pxToRem 함수를 선언하고, 계산된 값을 반환하도록 작성하세요.

function pxToRem(px) {
  return px * 0.0625 + "rem";
  // let rem = px / 16 + "rem"
  // return rem
}

console.log(pxToRem(20));

// 3. rem 단위 값을 px 값으로 변경하는 remToPx 함수를 선언하고, 계산된 값을 반환하도록 작성해보세요.

function remToPx(rem) {
  let px = rem * 16 + "px";
  return px;
}

console.log(remToPx(20));

// 4. 피자 한 판 가격 계산 함수 만들기
// 피자 한 판이 얼마인지 알고 있고, 몇 판을 살 건지도 알 때, 총 금액을 계산하는 함수

function pizzaPrice(qty, price) {
  return qty + "판," + " 총 " + qty * price + "원";
}

console.log(pizzaPrice(3, 16000));

// 5.주차 요금 계산 함수 만들기
// 주차장에 몇 시간 있었는지를 입력하면, 1시간에 1,000원씩 계산하는 함수

function parkingFee(hours) {
  return hours * 1000;
}

console.log("주차비 " + parkingFee(3) + "원");

// 6. 짝수인지 확인하는 함수 만들기
// 어떤 숫자가 짝수인지 아닌지를 확인하는 함수. 짝수면 true, 홀수면 false

function isEven(num) {
  if (num % 2 == 0) {
    console.log("true");
    return true;
  }
  console.log("false");
  return false;
}

isEven(2);

//

function 짝수함수(number) {
  return number % 2 == 0;
}

// 7. 생일 축하 메시지 출력 함수 만들기
// 이름만 알려주면 자동으로 축하 메시지를 만들어주는 자동 응답기 같은 함수

let bdayMessage = function (name) {
  return "Happy birthday, " + name;
};

console.log(bdayMessage("Alex"));

// 8. 올해 남은 날짜 계산 함수 만들기
// 오늘이 120일째라면, 1년(365일)에서 얼마나 남았는지 알려주는 함수

const NUMBER_OF_DAYS_OF_YEAR = 365;

function 올해남은날짜계산(현재날짜의일수) {
  return NUMBER_OF_DAYS_OF_YEAR - 현재날짜의일수;
}

// 9. 세금 포함 가격 계산 함수 만들기
// 상품 가격에 부가세를 붙여서 최종 금액을 계산하는 함수

let taxIncludedPrice = function (price) {
  let tax = 0.3;
  return price + price * tax;
};

console.log(taxIncludedPrice(1000));

// 10. 나이가 성인인지 판별하는 함수 만들기
// 놀이공원 입장 시, 성인(19+) 구역에 들어갈 수 있는 나이인지 확인해주는 함수

function isMinor(age) {
  return age < 19;
}

console.log(isMinor(18));
