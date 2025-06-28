// --------------------------------------------------------------------------
// 추가된 이벤트 리스너 제거
// --------------------------------------------------------------------------

(() => {
  // 항상 동일 참조 중요!!!!!
  function handleSameFunction() {
    console.log("테스트 버튼에 이벤트 연결");
  }

  const buttonGroup = document.querySelector("[role='group']");
  const testerButton = buttonGroup.querySelector("[data-role='tester']");

  buttonGroup.addEventListener("click", (e) => {
    const target = e.target.closest("button");

    if (target.dataset.role === "add-event") {
      console.log("add event");
      testerButton.textContent = "이벤트 추가 됨";

      testerButton.addEventListener("click", handleSameFunction);
      // testerButton.addEventListener("click", () => {
      //   console.log("테스트 버튼에 이벤트 연결");
      // });
    }

    if (target.dataset.role === "remove-event") {
      testerButton.textContent = "이벤트 제거 됨";
      testerButton.removeEventListener(
        "click",
        handleSameFunction
        //   => {
        //   console.log("테스트 버튼에 이벤트 연결 해제");
        // });
      );
      console.log("remove event");
    }
  });
})();
