{
  // Web Animations API
  // 하나
  // function playground() {
  //   const boxElement = document.querySelector(".box");
  //   const boxAni = boxElement.animate(
  //     [{ translate: "0 0" }, { translate: "80vw 0" }],
  //     {
  //       duration: 1000,
  //       fill: "forwards",
  //     }
  //   );

  //   boxAni.pause();
  // }

  // Web Animations API
  // 여러개
  function playground() {
    const boxElements = document.querySelectorAll(".box");

    const keyframes = [{ translate: "0 0" }, { translate: "80vw 0" }];

    const options = {
      duration: 1000,
      fill: "forwards",
    };

    boxElements.forEach((element) => {
      const animation = element.animate(keyframes, options);
      animation.pause();
      // animation.play()
    });
  }

  /* global gsap */

  // GSAP API

  // gsap.to(target, varObject)
  // gsap.to(selector, varObject)
  // gsap.to(htmlElement, varObject)
  // gsap.to([htmlElement1, htmlElement2], varObject)
  // gsap.to(svgElement, varObject)
  // gsap.to(jsObject, varObject)

  function playgroundGSAP() {
    // to(). 현재 위치에서 지정 위치로 가는 것
    // to(target, vars)
    // gsap.to(".box", { xPercent: 100, rotation: 360 });
    // gsap.to(".box", { x: "80vw" });
    // gsap.to([".box", ".term"], { x: "80vw" });

    // from(). 지정 위치에서 현재 위치로 오는 것
    // from(target, vars)
    // gsap.from(".box", { y: -200, rotation: 360, scale: 0.5 });
    // gsap.from(".box", {
    //   opacity: 0,
    //   xPercent: 50,
    //   y: -200,
    //   rotation: 360,
    //   scale: 4,
    //   repeat: 4,
    // });

    // fromTo(). vars1에서 vars2로 이동
    // fromTo(target, vars1, vars2)
    // gsap.fromTo(".box", { x: 400, y: -400 }, { x: 10, y: 50 });

    // set(). 위치 지정하기. animation X
    // set(target, vars)
    // gsap.set(".box", { x: 200, y: -200 });

    // targets ------------------------------
    // gsap.to(document.querySelectorAll(".box"), { x: 200 });

    // vars ------------------------------
    // SVG 요소
    // gsap.to(".svgBox", {
    //   attr: {
    //     rx: 40,
    //     fill: "red",
    //   },
    // });

    // JavaScript 객체
    // const o = {
    //   num: 0,
    //   color: "yellow",
    // };

    // const output = document.querySelector("output");
    // const renderCount = () => {
    //   output.value = Math.round(o.num);
    // };

    // gsap.to(o, {
    //   num: 100,
    //   color: "orange",
    //   duration: 3,
    //   repeat: 1,
    //   yoyo: true,
    //   // 변경사항 확인 가능
    //   onUpdate: renderCount,
    //   // () => {
    //   // document.querySelector("output").value = Math.round(o.num);
    //   // },
    //   onComplete: () => {
    //     // console.log("finished gsap animation");
    //     gsap.set(output, { opacity: 0 });
    //   },
    // });

    // delay ------------------------------
    // repeatDelay
    // gsap.to(".box:first-of-type", {
    //   rotation: 360,
    //   duration: 1,
    //   repeat: 1,
    //   repeatDelay: 1,
    // });

    // gsap.to(".box.yellow", { rotation: 360, duration: 1, delay: 1 });

    // Canvas ------------------------------
    const canvasElement = document.querySelector(".canvas");
    const canvas = canvasElement.getContext("2d");

    canvas.fillStyle = "green";

    const position = { x: 0, y: 0 };

    function draw() {
      canvas.clearRect(0, 0, 400, 400);

      // redraw
      canvas.fillRect(position.x, position.y, 100, 100);
    }

    gsap.to(position, {
      x: 300,
      y: 300,
      duration: 4,
      onUpdate: draw,
    });

    draw();
  }

  setTimeout(() => {
    playgroundGSAP();
    // playground();
  }, 500);
}
