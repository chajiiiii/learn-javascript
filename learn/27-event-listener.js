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

  document.body.classList.toggle("is-active");
  clickableButton.classList.toggle("is-active");
});
