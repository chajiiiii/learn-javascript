// --------------------------------------------------------------------------
// 📌 .toString(radix?)
// --------------------------------------------------------------------------
// - 타입 변경 (문자열화)
// - 10진수를 다른 진수로 변경 (최소값: 2진수 / 최대값: 36진수)
// --------------------------------------------------------------------------

// 타입 변경
console.log((1004).toString());

// 10진수 -> 2진수 변경
let n = 70; // 10진수
console.log(n.toString(2)); // 2진수
console.log(n.toString(8)); // 8진수
console.log(n.toString(16)); // 16진수

// 10진수를 16진수로 변경하는 함수 작성
// 1. 함수 기능 고민
// 2. 적절한 함수 이름 작성
// 3. 함수 기능 구현
// 4. 반환값 설계
// 5. 테스트 (함수 호출 정상 작동 검사)

function tenToSixteen(num) {
  return console.log(num.toString(16));
}

tenToSixteen(255);

// --------------------------------------------------------------------------
// 📌 parseInt(string, radix?)
// --------------------------------------------------------------------------
// - 단위(예: px, rem, cm, mm 등) 제거
// - 2 또는 16진수 문자열을 10진수로 변경
// --------------------------------------------------------------------------

// 단위 제거
console.log(parseInt("24px"));
console.log(parseFloat("1.625rem"));
console.log(parseInt("1.625rem"));
console.log(parseFloat("24rem"));

// 단위 제거 함수 작성
const removeUnit = (x) => console.log(parseFloat(x));
removeUnit("23rem");

// 2진수 문자열 -> 10진수 변경
console.log(parseInt("10", 2));

// 16진수 문자열 -> 10진수 변경
console.log(parseInt("80", 16));

// 16진수 문자열을 10진수로 변경하는 함수 작성
const hexToTen = (x) => console.log(parseInt(x, 16));

hexToTen(80);
