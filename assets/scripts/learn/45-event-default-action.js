() => {
  // 브라우저의 기본 작동 확인
  // href 속성을 가진 요소 클릭 시, 연결
  // checkbox 요소를 클릭 시, 체크 상태 변경
  // form 내부의 submit 버튼 이벤트 발동

  const aLink = document.querySelector('a[href="https://naver.com"]');

  aLink.addEventListener("click", (e) => {
    console.log("e.currentTarget =", e.currentTarget);
  });

  aLink.addEventListener("click", (e) => {
    // 브라우저 기본 작동 방지
    if (!e.defaultPrevented) e.preventDefault();
  });
};

// checkbox 요소 기본 작동 방지. change 이벤트
// change 이벤트는 e.preventDefault()가 안먹음
() => {
  const checkbox = document.getElementById("agreement");

  checkbox.addEventListener("change", (e) => {
    // input checkbox 요소는 방지가 안됨. 아래줄 써도 방지가 안됨.
    e.preventDefault();

    const input = e.currentTarget;
    const isChecked = e.currentTarget.checked;
    console.log(isChecked);

    // isChecked는 true지만 반전시켜서 false로 바꿔서
    // input.checked를 false로 해줌
    input.checked = !isChecked;
    console.log("input.checked", input.checked);

    console.warn("checkbox 기본 작동 방지 상태임");
  });
};

// checkbox 요소 기본 작동 방지. click 이벤트
// change 대신 click하면 preventDefault()가 작동 됨
() => {
  const checkbox = document.getElementById("agreement");
  checkbox.addEventListener("click", (e) => {
    console.dir(e);

    if (!e.defaultPrevented) {
      e.preventDefault();
    } else {
      console.log("2");
    }
  });
};

// form 요소의 브라우저 기본 작동 방지
// submit 이벤트, reset 이벤트
(() => {
  const form = document.querySelector("[data-learn='form']");

  // submit --------------------
  form.addEventListener("submit", (e) => {
    // 서버에 입력 값을 전송하는 브라우저 기본 작동을 방지
    if (!e.defaultPrevented) e.preventDefault();

    // js사용해 사용자 입력 값 검토 처리
    const formElement = e.currentTarget;
    console.log(e.currentTarget);
    console.log(formElement.elements["search-term"].value);
  });

  // reset --------------------
  form.addEventListener("click", (e) => {
    // 아래코드 안먹힘
    if (!e.defaultPrevented) e.preventDefault();

    // 그래서 매뉴얼로 리셋하기
    e.currentTarget.elements["search-term"].value = "";
    console.log("reset event");
  });
})();
