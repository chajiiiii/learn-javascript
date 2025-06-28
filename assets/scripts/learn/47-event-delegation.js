// --------------------------------------------------------------------------
// 이벤트 위임 (Event Delegation)
// --------------------------------------------------------------------------

// 루프에 이벤트 리스너 추가
// 이벤트에 리스너 각각 추가가 됨
() => {
  const linkList = document.querySelector(".link-list");
  const links = linkList.querySelectorAll("a");

  links.forEach((link, i) => {
    function listener(e) {
      if (!e.defaultPrevented) e.preventDefault();
      const aElement = e.currentTarget;
      console.log(aElement);
    }
    link.addEventListener("click", listener);
    console.log(i);
  });
};

// 이벤트 위임
// - 가장 가까운 공통의 부모에 이벤트를 연결
// - 이벤트 버블링을 사용해 위임. 캡쳐링은 안됨
() => {
  const linkList = document.querySelector(".link-list");

  linkList.addEventListener("click", (e) => {
    if (!e.defaultPrevented) e.preventDefault();

    console.log("e.currentTarget = ", e.currentTarget); // 이벤트 리스너를 추가한 대상(요소)
    console.log("e.target =", e.target); // 실제로 클릭된 요소
  });
};

// 이벤트 위임 + 이벤트 대상 확인에 따른 조건 처리
// 단 1개의 이벤트 리스너 생성
() => {
  const linkList = document.querySelector(".link-list");

  linkList.addEventListener("click", (e) => {
    if (!e.defaultPrevented) e.preventDefault();
    const target = e.target;

    if (target.localName === "a") {
      // console.log('<a> 요소를 클릭했습니다.')
      console.log(target.getAttribute("href"));
    }

    // console.log(target.nodeName)  // 'A', 'LI', 'UL'
    // console.log(target.nodeName.toLowerCase())  // 'a', 'li', 'ul'
    // console.log(target.localName) // 'a', 'li', 'ul'

    // if(target.localName === 'li') {
    //   console.log('<li> 요소를 클릭했습니다.')
    // }

    // if(target.localName === 'ul') {
    //   console.log('<ul> 요소를 클릭했습니다.')
    // }
  });
};

// 이벤트 대상(event target)이 일치 하는지 검사
// element.matches(selector)
() => {
  const linkList = document.querySelector(".link-list");

  linkList.addEventListener("click", (e) => {
    if (!e.defaultPrevented) e.preventDefault();
    const target = e.target;

    // 실제로 클릭한게 아래 속성이 맞다면 콘솔로그
    if (target.matches("a[href='/community']")) {
      console.log(target.getAttribute("href"));
    }
  });
};

// 중첩된 요소 처리 1.
// <a>, <button> 요소 내부에 <svg>를 포함하는 경우
// 1. CSS를 사용해 <a> 또는 <button> 내부의 <svg>, <span> 요소에
//    pointer-events: none 설정을 하여 마우스 포인트 이벤트에 영향을 받지 않도록 설정
() => {
  const linkList = document.querySelector(".link-list");

  linkList.addEventListener("click", (e) => {
    if (!e.defaultPrevented) e.preventDefault();

    const target = e.target;

    if (target.matches('a[href="/news"]')) {
      console.log(target.getAttribute("href"));
    } else {
      console.log(target.localName);
    }
  });
};

// 중첩된 요소 처리 2.
// 2. element.clesest(selector)를 사용
(() => {
  const linkList = document.querySelector(".link-list");
  console.log(linkList);
  linkList.addEventListener("click", (e) => {
    if (!e.defaultPrevented) e.preventDefault();

    const target = e.target.closest("a[href]");
    // const target = e.target.closest("ul");

    if (target) {
      console.log(target.getAttribute("href"));
    } else {
      console.log(target.localName);
    }
  });
})();
