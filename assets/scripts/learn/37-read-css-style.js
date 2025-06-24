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
  // const h1 = document.querySelector("h1");
  // const fontSize = parseFloat(
  //   getComputedStyle(h1).getPropertyValue("font-size")
  // );
  // console.log(fontSize);
  // const newFontSize = fontSize + 84;
  // console.log(newFontSize);
  // h1.style.setProperty("font-size", newFontSize + "px");
  // console.log(getComputedStyle(h1).getPropertyValue("font-size"));
  // console.log(fontSize);
}

// --------------------------------------------------------------------------
// 가상요소 읽기 - 가상요소는 읽기만 가능

{
  const heading1 = document.querySelector("h1");
  const heading1PseudoElementStyles = getComputedStyle(heading1, "::after");
  console.log(heading1PseudoElementStyles.getPropertyValue("content"));
  console.log(heading1PseudoElementStyles.getPropertyValue("position"));
}

// --------------------------------------------------------------------------
// 가상요소 읽기 실습
// 1. 인라인 스타일 읽기
// 인라인 스타일로 설정된 글자색, 글자 크기를 JavaScript로 읽어 콘솔 패널에 출력합니다.
{
  const element = document.querySelector(".element");

  console.log(element.style.color);
  console.log(element.style.getPropertyValue("font-size"));
}

// 2. 계산된 스타일 읽기
// 요소의 스타일을 `getComputedStyle()` 메서드로 읽어 콘솔 패널에 출력합니다.
{
  const boxP = document.querySelector(".box");

  console.log(getComputedStyle(boxP).getPropertyValue("width"));
}

// 3. 가상 요소의 스타일 읽기
// `getComputedStyle()` 메서드를 사용해 가상 요소의 콘텐츠 값을 읽어 콘솔 패널에 출력합니다.
{
  const quote = document.querySelector(".quote");

  console.log(
    "가상요소",
    getComputedStyle(quote, "::before").getPropertyValue("content")
  );
}
