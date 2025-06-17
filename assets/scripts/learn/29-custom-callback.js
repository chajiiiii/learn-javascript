function callToAction(callback) {
  callback();
}

callToAction(() => {
  console.log("콜백은 다른 함수에 인수로 전달되는 함수를 말합니다.");
});

// ---------------------------------
// click 함수 작성

const button = document.querySelector(".clickable");
// button.addEventListener("click", () => {
//   console.log("button clicked");
// });

const handleClick = () => console.log("clicked button");

click(button, handleClick);

// ---------------------------------
// mouse enter

// button.addEventListener("mouseenter", () => {
//   console.log("enter");
// });

const handleMouse = () => {
  console.log("mouse entered!");
};

mouseenter(button, handleMouse);

// ---------------------------------
// mouse leave

const handleLeave = () => {
  console.log("Mouse left!");
};

mouseLeave(button, handleLeave);
