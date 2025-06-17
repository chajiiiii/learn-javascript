console.log("함수 Functions");

// 함수 선언(Function Declaration)
function makeRamyeon() {
  console.group("물 뜨자");
  console.log("1. 냄비에 물 받기");
  console.log("2. 불 키고 스프 넣기");
  console.log("3. 끓으면 계란과 면 넣기");
  console.log("4. 5분 뒤 불 끄기");
  console.groupEnd();
}

// 함수 사용(Call Function)
makeRamyeon();
makeRamyeon();

// ------------------------------
// 함수 매개 변수(Function parameters)

// 함수 밖 변수 - 전역 변수(global scope variables)
// let year = 2031;

function writeDiary() {
  // 함수 안 변수 - 지역 변수(local variables)
  let year = 2025;
  let month = 6;
  let date = 10;

  console.log(year + "년 " + month + "월 " + date + "일에 일기를 쓴다");
}

writeDiary();

// 매개변수 (1) ------------------------------

function writeDiary2(year, month, date) {
  console.log(year, month, date);

  console.log(year + "년 " + month + "월 " + date + "일에 일기를 쓴다");
}

writeDiary2(2025, 10, 30);
writeDiary2(2026, 12, 25);

// 매개변수 (2) ------------------------------

function writeDiary3(연도, 월, 일) {
  console.log(연도, 월, 일);

  let year = 3333;
  let month = 6;
  let date = 10;

  console.log(연도 + "년 " + 월 + "월 " + 일 + "일에 일기를 쓴다");
}

writeDiary3(2025, 10, 30);
writeDiary3(2026, 12, 25);

// ------------------------------
// 반환문(return)

// 함수는 실행될 수 있다.
// 함수는 실행되면 결과 값을 반환한다.
// 처리(계산)된 값을 반환할 때 return 키워드를 사용한다.

function 더하기(숫자1, 숫자2) {
  console.log("콘솔 출력: ", 숫자1 + 숫자2);

  return 숫자1 + 숫자2;
}

// 함수 안에 return을 해줘야만 콘솔에 결과값을 줄 수 있음
let 결과값 = 더하기(10, 9);
console.log("결과 값: " + 결과값);

console.log(더하기(20, 9));
