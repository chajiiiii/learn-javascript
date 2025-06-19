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

let userInput = parseInt(prompt("1부터 10까지 입력"), 10);

while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
  console.error("1부터 10까지 입력");
  userInput = parseInt(prompt("1부터 10까지 입력"), 10);
}
