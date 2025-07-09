(() => {
  const section = document.querySelector("section");
  section.insertAdjacentHTML(
    "beforeend",
    `
    <ul class="members">
      <li>이지아</li>
      <li>박현일</li>
      <li>최상준</li>
      <li>하준경</li>
    </ul>  
  `
  );

  // 요소 제거
  const willRemoveElement = section.querySelector(".members li:nth-child(3)");
  const members = section.querySelector(".members");
  const parent = willRemoveElement.parentElement;

  setTimeout(() => {
    // 부모요소에서 자식요소 삭제. 리턴 값 O
    // removeChild(childElement)
    // members.removeChild(willRemoveElement);
    const removedChild = members.removeChild(willRemoveElement);
    console.log(removedChild);

    // 자기자신 삭제. 리턴 값 X
    // element.remove()
    // willRemoveElement.remove();
    // const removedChild2 = willRemoveElement.remove();
    // console.log(removedChild2);

    // 제거된 요소를 다시 삽입
    // parent.append(removedChild);

    // 제거된 요소를 다시 이지아 앞에
    parent.prepend(removedChild);

    // 제거된 요소를 다시 박현일 뒤에
    // const children = [...parent.children];
    // children.at(-1).before(removedChild);

    // 제거된 요소를 다시 박현일 앞에
    const [, park] = parent.children;
    park.before(removedChild);
  }, 1500);
})();
