// 웹 브라우저 환경. 이벤트 전파 3단계
// 1. Capturing Phase
// 2. Target Phase
// 3. Bubbling Phase

// 이벤트 버블링 단계(기본)
() => {
  const boxes = document.querySelectorAll(".box");

  for (const box of boxes) {
    // 이벤트 버블링 단계
    box.addEventListener("click", (e) => {
      const element = e.currentTarget;
      console.log("이벤트 단계:", e.eventPhase);
      console.log("이벤트 대상의 클래스 이름", element.className);
    });
  }
};

// 이벤트 캡쳐링 단계
() => {
  const boxes = document.querySelectorAll(".box");

  for (const box of boxes) {
    // 이벤트 캡쳐링 단계
    box.addEventListener(
      "click",
      (e) => {
        const element = e.currentTarget;
        console.log("이벤트 단계:", e.eventPhase);
        console.log("이벤트 대상의 클래스 이름", element.className);
      },
      true // useCapture boolean 값 넣기.
    );
  }
};

// 이벤트 전파 중지(Stop Propagation)
() => {
  const boxes = document.querySelectorAll(".box");
  let useCapture = false;

  // box 1
  boxes.item(0).addEventListener("click", handleLog, { capture: useCapture });

  // box 3
  boxes.item(2).addEventListener("click", handleLog, { capture: useCapture });

  // box 2
  boxes.item(1).addEventListener(
    "click",
    (e) => {
      // 이벤트 전파 중지
      e.stopPropagation();
      const element = e.currentTarget;
      console.log(element.className.replace("box", "").trim());
    },
    { capture: useCapture }
  );

  function handleLog(e) {
    const element = e.currentTarget;
    console.log(element.className.replace("box", "").trim());
  }
};

// 즉시 후속 이벤트 전파 모두 중지(Stop Immediate Propagation)
(() => {
  const boxes = document.querySelectorAll(".box");
  let useCapture = true;

  // body
  document.body.addEventListener(
    "click",
    (e) => {
      const element = e.currentTarget;
      console.log(element.localName);
    },
    useCapture
  );

  // box 1
  boxes.item(0).addEventListener(
    "click",
    (e) => {
      // e.stopPropagation()
      const element = e.currentTarget;
      console.log(element.className.replace("box", "").trim());
    },
    useCapture
  );

  // box 2
  boxes.item(1).addEventListener(
    "click",
    (e) => {
      // e.stopPropagation()
      e.stopImmediatePropagation();
      const element = e.currentTarget;
      console.log(element.className.replace("box", "").trim());
      console.log("박스 2에 연결된 이벤트 리스너 1");
    },
    useCapture
  );

  boxes.item(1).addEventListener(
    "click",
    (e) => {
      // e.stopPropagation()
      const element = e.currentTarget;
      console.log(element.className.replace("box", "").trim());
      console.log("박스 2에 연결된 이벤트 리스너 2");
    },
    useCapture
  );

  // box 3
  boxes.item(2).addEventListener(
    "click",
    (e) => {
      // e.stopPropagation()
      const element = e.currentTarget;
      console.log(element.className.replace("box", "").trim());
    },
    useCapture
  );
})();
