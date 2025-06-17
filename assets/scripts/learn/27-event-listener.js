const clickableButton = document.querySelector(".clickable");
console.log(clickableButton);

// document.documentElement -> HTML
// document.head -> head
// document.body -> body

clickableButton.addEventListener(
  /* event type(string) */ "click",
  // /* event listener(function) */ () => {
  //   console.log("clicked");
  // }
  function () {
    console.log("clicked");
  }
);

// 크롬 브라우저에서 연결되어있는 이벤트리스너 확인하기. js아니고 크롬 dev tools만 가능!
// getEventListeners(clickableButton)

// clickableButton.addEventListener("click", () => {
//   document.body.classList.add("is-active");
//   clickableButton.classList.add("is-active");
// });

clickableButton.addEventListener("click", () => {
  document.body.classList.toggle("is-active");
  clickableButton.classList.toggle("is-active");
});

clickableButton.addEventListener("click", (e) => {
  // addEventListener()에 전달된 함수(값) 즉, 이벤트 리스너는
  // event 객체를 매개변수로 전달 받는다.

  console.log("이벤트 객체: ", e);
});

// ----------------------------------
// 실습

const clickableButton2 = document.querySelector(".clickable2");

clickableButton2.addEventListener("click", () => console.log("clicked!"));
clickableButton2.addEventListener("click", () => {
  clickableButton2.classList.toggle("hehe");
  console.log(clickableButton2.classList.value);
});

function message() {
  console.log("clicked function clicked!");
}

// 인수로 온 함수(콜백함수)에 ()를 붙이면 안되는 이유!!!
// 위의 함수 자체는 return이 없어서 undefined로 나오기 때문에
// 괄호를 붙이면 그 함수의 실행된 값을 주기 때문에 undefined로 옴.
// 그. 러. 나.
// return이 있더라도 그건 함수 실행 값을 주는것이기 때문에
// 인수로 콜백함수가 왔을때는 함수값이 아닌 함수 그 자체를 넣어야 하기 때문에
// 괄호를 붙이지 않고 넣어야 함.
clickableButton2.addEventListener("click", message);
