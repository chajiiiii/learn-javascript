// 콜백
// 1. 다른 함수(ex. addEventListener)에 인수로 전달되는 함수
// 2. 나중에 실행됨
// element.addEventListener("mouseenter", function () {});
// element.addEventListener("click", () => {});

// 사용 이유
// 1. 유연하게 코드 추가 가능
// 2. 비동기 코드 작업 차단을 방지

const button = document.querySelector(".clickable");

// 버튼 요소에 이벤트 리스너(함수) 추가
// 콜백 = 다른 함수에 인수로 전달된 함수(나중에 실행될 수 있도록)
// 이벤트 = 언제(time) 발생할지 알 수 없음(비동기)

// button.addEventListener("click", () => {
//   document.body.classList.toggle("is-active");
// });

// button.addEventListener("click", () => {
//   button.classList.toggle("is-active");
// });

// -------------------------------------
// 이중 중첩 함수 VS 콜백함수

// 함수 이중 중첩 예시
// function fn1() {
//   function fn2() {

//   }
// }

// 콜백 예시
fn1(fn2);

function fn1(callback) {
  // [1]
  console.log("fn1");
  callback();
}

function fn2() {
  // [2]
  console.log("fn2");
}

// -------------------------------------
// 레거시 이벤트 VS 모던 이벤트 모델

// 변수에는 하나의 값만 저장할 수 있기 때문에 하나의 이벤트만 작동 됨.

button.onclick = function () {
  document.body.classList.toggle("is-active");
};

button.onclick = function () {
  button.classList.toggle("is-active");
};

// -------------------------------------
// 동기(sync) VS 비동기(Async)

// 동기 방식은 코드 실행이 완료될 때까지 다음 코드를 차단(블로킹)함.
// 비동기 방식은 바로 실행되지 않고(다음 코드를 차단하지 않고) 나중에 코드가 호출(콜백)

const handleBodyToggleClass = () => {
  document.body.classList.toggle("is-active");
};

// 동기(sync) - 실행 시점이 바로

handleBodyToggleClass(); // 1
handleBodyToggleClass(); // 2
handleBodyToggleClass(); // 3

// 비동기(Async) - 실행 시점 나중에 이벤트 activate 되었을 때

button.addEventListener("click", () => {
  document.body.classList.toggle("is-active");
});

// 함수에 Web API가 콜백함수를 가지고,
// 그 함수가 비동기적으로 실행되는 경우에만 콜스택에 쌓임
