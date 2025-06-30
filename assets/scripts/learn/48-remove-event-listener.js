// --------------------------------------------------------------------------
// 추가된 이벤트 리스너 제거
// --------------------------------------------------------------------------

() => {
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
};

// 이벤트 리스너 추가 후, 한 번 트리거 되면, 이벤트 리스너 제거
() => {
  const onceButton = document.querySelector('[data-role="once-event"]');

  let clickedCount = 0;

  // onceButton.addEventListener('click', () => {
  //   clickedCount += 1
  //   console.log(clickedCount + '번 클릭했습니다.')
  // })

  // 한 번만 이벤트를 트리거 하려면?
  // 이벤트가 트리거 되면 추가된 이벤트 리스너를 제거한다.
  onceButton.addEventListener("click", handleOnceClick);

  function handleOnceClick(e) {
    clickedCount += 1;
    console.log(clickedCount + "번 클릭했습니다.");
    e.currentTarget.removeEventListener("click", handleOnceClick);
    console.log("추가된 이벤트 리스너 handleOnceClick이 제거되었습니다.");
  }
};

// 이벤트 리스너 옵션 객체 설정으로 구현 { once : true }
(() => {
  const onceButton = document.querySelector("[data-role='once-event']");

  let clickedCount = 0;

  onceButton.addEventListener(
    "click",
    () => {
      console.log(++clickedCount + "번 클릭");
    },
    { once: true }
  );
})();
