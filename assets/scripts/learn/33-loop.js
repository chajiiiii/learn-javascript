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
