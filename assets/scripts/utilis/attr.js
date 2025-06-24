/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 유틸리티 함수 설계
// --------------------------------------------------------------------------
//
// const h1 = document.querySelector("h1");

// attr(h1, "blah", "blahblah");
// attr(h1, "data-category");
// getAttr(element, attributeName)

function attr(element, attributeName, attributeValue) {
  if (!attributeValue) {
    const value = element.getAttribute(attributeName);
    console.log(value);
    return value;
  } else {
    element.setAttribute(attributeName, attributeValue);
    console.log(element.getAttribute(attributeName));
    return;
  }
}

function setAttr(element, attributeName, attributeValue) {
  return element.setAttribute(attributeName, attributeValue);
}

function getAttr(element, attributeName) {
  return element.getAttribute(attributeName);
}

// {
//   function getAttr(element, attributeName) {
//     return console.log(element.getAttribute(attributeName));
//   }

//   // setAttr(element, attributeName, attributeValue)
//   function setAttr(element, attributeName, attributeValue) {
//     element.setAttribute(attributeName, attributeValue);
//     console.log(element.getAttribute(attributeName));
//     return element;
//   }

//   // 1
//   // attr(element, attributeName, ?attributeValue): element | string
//   function attr(element, attributeName, attributeValue) {
//     // if (attributeValue !== undefined && attributeValue !== null) {
//     if (attributeValue) {
//       // 속성 쓰기
//       // element.setAttribute(attributeName, attributeValue);
//       // return element;

//       return setAttr(element, attributeName, attributeValue);
//     } else {
//       // 속성 읽기
//       // const attributeValue = element.getAttribute(attributeName);
//       // return attributeValue;

//       console.log("attribute value: ", attributeValue);

//       return getAttr(element, attributeName);
//     }
//   }
// }

// 2

// const attr = (el, name, value) => {
//   if (!value) {
//     // 속성 읽기 기능 구현
//     // 요소.getAttribute('속성이름')
//     const value = el.getAttribute(name);
//     return value;
//   } else {
//     // 속성 쓰기 기능 구현
//     // 요소.setAttribute('속성이름', '값')
//     el.setAttribute(name, value);
//   }
// };

// (() => {
//   const h1 = document.querySelector("h1");

//   // 속성 쓰기 (attr 함수 속성 값 전달)
//   attr(h1, "id", "dynamic");

//   // 속성 읽기 (attr 함수 속성 값 반환)
//   const h1IdValue = attr(h1, "id");
//   console.log(h1IdValue);
// })();
