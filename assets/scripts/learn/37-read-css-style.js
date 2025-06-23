// --------------------------------------------------------------------------
// JavaScript로 CSS 스타일 읽기
// --------------------------------------------------------------------------

// 정적으로 설정된 인라인 스타일 읽기
{
  const body = document.body;
  const h1 = document.querySelector("h1");

  console.log(body.style.backgroundColor);
  console.log(h1.style.color);
}

// --------------------------------------------------------------------------
// getComputedStyle().getPropertyValue()

// 인라인이 아닌 스타일 값 읽기
// 웹 브라우저에 의해 계산된 스타일(computed style) 정보를 읽을 수 있다.

{
  const body = document.body;
  const h1 = document.querySelector("h1");

  // window.getComputedStyle;
  getComputedStyle(body).getPropertyValue("background-color");
  // console.log(getComputedStyle(body));
  console.log(getComputedStyle(body).getPropertyValue("background-color"));
  console.log(getComputedStyle(h1).getPropertyValue("font-size"));
}

// --------------------------------------------------------------------------
// 실습

{
  const h1 = document.querySelector("h1");

  const fontSize = parseFloat(
    getComputedStyle(h1).getPropertyValue("font-size")
  );
  console.log(fontSize);

  const newFontSize = fontSize + 84;
  console.log(newFontSize);

  h1.style.setProperty("font-size", newFontSize + "px");
  console.log(getComputedStyle(h1).getPropertyValue("font-size"));
  console.log(fontSize);
}
