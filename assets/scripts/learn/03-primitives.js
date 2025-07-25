// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// ---------------------------
// String

"작은 따옴표 문자 값";
"큰 따옴표 문자 값";
// 어퍼스트로피(이스케이프 처리)
console.log("나의 100m 달리기 최고 기록은 12'26\"이야.");

// ---------------------------
// Number
console.log("1,000,000");
console.log(1_000_000);

// 나머지(modulus) : %
// 10000을 6으로 나누고 남는 값
console.log(10000 % 6);

// JS 숫자(정수)의 안전 범위 표현
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

// ---------------------------
// Boolean
// 조건 제어에 사용

true; // boolean
("true"); // string

// ---------------------------
// Undefined

// 선언 된 변수의 기본값으로 사용 됨

undefined;
console.log(undefined);

// ---------------------------
// Null
// 비어있다 라는 의미로 씀

null;
console.log(null);

// ---------------------------
// Symbol
// number or string. 고유성 보장.

console.log(Symbol());
console.log(Symbol(2025));
console.log(Symbol("고유 식별자"));

// ---------------------------
// BigInt
// JS가 표현 가능한 정수 안전범위 이상의 숫자값을 표현할 때

console.log(BigInt(Number.MAX_SAFE_INTEGER + 10));
// 숫자 뒤에 n만 붙여도 BigInt로 인식
console.log(10000n);

// ---------------------------

// # 실습

// 콘솔 패널에서 숫자, 문자열, 불리언 값을 만들어 다음을 연습합니다.

// 1. 문자열(String) 만들고 출력하기
console.log("Hi");
// 2. 문자열 두 개 합치기
console.log("Hi" + " there");
// 3. 숫자(Number) 만들고 출력하기
console.log(8);
// 4. `31`과 `81` 더하기
console.log(31 + 81);
// 5. `502`에서 `271` 빼기
console.log(502 - 271);
// 6. `5`와 `117` 곱하기
console.log(5 * 117);
// 7. `100`을 `8`로 나누기
console.log(100 / 8);
// 8. `502`를 `3`으로 나눈 나머지 구하기
console.log(502 % 3);
// 9. 불리언(Boolean) 만들고 출력하기
console.log(true);
