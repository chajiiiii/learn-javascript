// --------------------------------------------------------------------------
// 루프(Loop)
// --------------------------------------------------------------------------

const draw = () => {
  // count = count + 1
  // console.count("도화지에 그림을 그린 횟수");
};

let wantToDraw = true;

// 조건문
// 조건이 참이면 블록 내부의 코드 한 번 수행
if (wantToDraw) {
  // console.log("if문");
  draw();
}

// 루프(반복)문
// 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
let i = 10;

while (wantToDraw) {
  // console.log("while문");
  draw();

  // 특정 상황이 일치되는 경우
  // 조건을 참에서 거짓으로 변경
  // wantToDraw = !wantToDraw;

  if (i <= 0) {
    wantToDraw = false;
    // console.log("i = ", "wantToDraw : ", wantToDraw);
  } else {
    // i = i - 1;
    i -= 1;

    // 후감소
    // i--

    // 선감소
    // --i

    // console.log("i = ", i);
  }
}

// let k = 100;

// 선감소. 99로 시작
// while (--k >= 0) draw();

// let k = 100;
// 후 감소. 100 시작
// while (k--) draw();

// --------------------------------------------------------------------------
// 사용자 입력 검증 (while)

// let userInput = prompt("1부터 10까지 입력");
// // 아랫줄의 parseInt를 하지 않으면 prompt의 값은 string으로 반환됨
// userInput = Number.parseInt(userInput, 10);

// let userInput = parseInt(prompt("1부터 10까지 입력"), 10);
// console.log(userInput, typeof userInput);

// let userInput = parseInt(prompt("1부터 10까지 입력"), 10);

// while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
//   console.error("1부터 10까지 입력");
//   userInput = parseInt(prompt("1부터 10까지 입력"), 10);
// }

// --------------------------------------------------------------------------
// continue
{
  // let drawCount = 20;
  // let i = 0;
  // const draw2 = (n) => {
  //   console.log("도화지에 그림을 그린 횟수", n);
  // };
  // while (i++ < drawCount /* 0부터 10, continue, 16부터 19 */) {
  //   if (i > 10 && i <= 15) {
  //     continue;
  //   }
  //   draw2(i);
  // }
  // console.log("last count =", i);
}

// --------------------------------------------------------------------------
// break
{
  let drawCount = 20;
  let i = 0;

  const draw2 = (n) => {
    console.log("도화지에 그림을 그린 횟수", n);
  };

  while (i++ < drawCount) {
    if (i === 5) {
      break;
    }

    draw2(i);
  }

  console.log("last count =", i);
}

// --------------------------------------------------------------------------
// do ... while

{
  let condition = false;
  do {
    console.log("do while");
  } while (condition);
}

{
  // let userInput;
  // do {
  //   userInput = parseInt(prompt("1부터 10까지 입력"), 10);
  //   if (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
  //     console.error("1부터 10까지 입력");
  //   }
  // } while (Number.isNaN(userInput) || userInput < 1 || userInput > 10);
}

// --------------------------------------------------------------------------
// IIFE(Immediately Invoked Function Expression)

// const lookMe = function () {
//   console.log("look at me!");
// };

// lookMe();

(function () {
  console.log("look at me!");
})();

// --------------------------------------------------------------------------
// for 문
{
  // 방법 1
  for (let i = 0; i < 10; ++i) {
    console.log("for 문");
  }

  // 방법 2
  let y = 0;

  for (; y < 10; ) {
    ++y;
    console.log("for 문 y");
  }
}

{
  const numbers = [11, 22, 33, 44, 55, 66];

  // 33인 값(인덱스)에서 멈추기

  for (let i = 0; i < numbers.length; i = i + 1) {
    let number = numbers[i];
    console.log(number);
  }
}

// for 문의 변형
{
  // const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  // for (let i = 0, number; (number = numbers[i]); i = i + 1) {
  //   console.log(number);
  // }
}

{
  const fruitBasket = ["체리망고", "토마토", "스트로베리"];

  for (let i = 0, l = fruitBasket.length; i < l; i++) {
    console.log(fruitBasket[i]);
  }

  const students = [
    { 이름: "홍민영" },
    { 이름: "윤정화" },
    { 이름: "허시온" },
    { 이름: "조선현" },
    { 이름: "성정현" },
    { 이름: "조장원" },
  ];

  for (let i = 0; i < students.length; i++) {
    console.log(students[i].이름);
  }

  for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i].이름);
  }
}

// --------------------------------------------------------------------------
// for of 문
// Array, String, TypedArray, Map, Set, NodeList, DOM collections, arguments
{
  const str = "All you need is love";

  for (const char of str) {
    console.log(char);
  }

  const students = [
    { 이름: "홍민영" },
    { 이름: "윤정화" },
    { 이름: "허시온" },
    { 이름: "조선현" },
    { 이름: "성정현" },
    { 이름: "조장원" },
    { 이름: "차지현" },
    { 이름: "김동규" },
    { 이름: "이성은" },
    { 이름: "고우현" },
  ];

  // for문을 사용해 수강생의 이름을 콘솔 패널에 출력
  for (const student of students) {
    if (student.이름 === "성정현" || student.이름 === "김동규") continue;

    console.log(student.이름);
    if (student.이름 === "이성은") break;
  }
}

// --------------------------------------------------------------------------
// for in 문. object 전용

{
  const webTech = {
    html: "hyper text markup language",
    css: "cascading style sheet",
    javascript: "programming language",
  };

  console.log(webTech["css"]);

  for (const key in webTech) {
    // key 이름 반환
    console.log(key);

    // 키의 값도 얻고싶다면 webTech obj의 대괄호 표기법으로 접근하여 value를 얻어냄
    // obj[key] 하면 해당 키의 value가 나옴
    const value = webTech[key];
    console.log(key, value);
  }
}

// --------------------------------------------------------------------------
// 실습

(() => {
  // 컴퓨터 프로그래밍의 기본 구조 중 하나인 루프에 숙달하기 위한 연습을 진행하세요.

  // 1. for 문을 사용해 `1`부터 `100`까지의 숫자 중, 짝수만 출력
  // for (let num = 1; num < 101; num++) {
  //   if (num % 2 === 0) console.log(num);
  // }

  // 2. while 문을 사용해 숫자 `10`부터 `1`까지 역순으로 출력
  let num2 = 10;

  while (num2 > 0) {
    console.log(num2);
    num2--;
  }

  // 3. for … of 문을 사용해 다음 배열의 과일 출력
  const fruits = ["사과", "바나나", "귤", "복숭아"];

  for (const fruit of fruits) console.log(fruit);

  // 4. do … while 문을 사용해 입력된 비밀번호(`'3001'`) 매칭 검토 후 결과 출력
  let i = 0,
    input;
  const attempts = ["0124", "8291", "3001", "9073"];

  do {
    input = attempts[i];

    if (input === "3001") {
      console.log("일치");
      break;
    }

    i = i + 1;
  } while (i < attempts.length);

  // 5. for … in 문을 사용해 객체의 key, value 출력
  const student = {
    name: "선호",
    grade: "A",
    age: 22,
  };

  for (const key in student) {
    let value = student[key];
    console.log(key, ":", value);
  }

  // 6. `1`부터 `20`까지 반복
  //     1. `5`부터 `10`까지는 건너띄고 나머지 출력
  //     2. `17`이 되면 반복 종료
  for (let num3 = 1; num3 < 20; num3++) {
    if (num3 >= 5 && num3 <= 10) {
      continue;
    }
    if (num3 === 17) break;
    console.log(num3);
  }
})();
