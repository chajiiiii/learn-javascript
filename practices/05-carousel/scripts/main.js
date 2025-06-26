// 제어할 대상 찾기

// 1. 문서에서 제어할 대상 요소 선택(찾기)
() => {
  // 캐러셀 컴포넌트 찾기
  const carousel = document.querySelector(".carousel");

  // 캐러셀 컨텐츠 래퍼
  const contentWrapper = carousel.querySelector(".carousel__contents");

  // 이전 탐색 버튼 찾기
  const prevButton = carousel.querySelector('[aria-label^="이전"]');

  // 다음 탐색 버튼 찾기
  const nextButton = carousel.querySelector('[aria-label^="다음"]');
};

// 2. 상태 클래스 상수
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";
};

// 3-1. 다음 탐색 기능(함수)
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  // 다음 탐색 클릭 리스너 추가
  // - 현재, 다음 콘텐츠 탐색
  nextButton.addEventListener("click", () => {
    // 현재 선택된 컨텐츠 찾기(Quering)
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    // 다음 선택될 컨텐츠 찾기(Traversing)
    const nextContent = selectedContent.nextElementSibling;
  });
};

// 3-2. 다음 컨텐츠로 이동
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  nextButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    // 다음 컨텐츠로 이동
    // 다음 컨텐츠의 computed style 읽기
    const distance = getComputedStyle(nextContent).getPropertyValue("left");

    // 컨텐츠 래퍼에 transform 인라인 스타일 설정
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);
  });
};

// 3-3. 선택된 상태 변경
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  nextButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    // 선택된 상태 변경
    // 이전 선택된 컨텐츠에서 활성 클래스 제거
    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });
};

// 3-4. 다음 탐색 버튼 감춤
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  nextButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    // 다음 탐색 버튼 감춤
    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });
};

// 4-1. 이전 컨텐츠 탐색
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  nextButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    // 현재, 이전 컨텐츠 탐색
    // 현재 컨텐츠 찾기
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    // 이전 컨텐츠 찾기
    const prevContent = selectedContent.previousElementSibling;
  });
};

// 4-2. 이전 컨텐츠로 이동
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  nextButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    // 이전 컨텐츠로 이동
    // prevContent로 부터 거리를 계산해서 가져오기
    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    // contentWrapper에 스타일 지정
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);
  });
};

// 4-3. 이전 컨텐츠로 클래스 옮기기(선택 상태 변경)
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  nextButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    // 선택된 상태 변경
    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });
};

// 4-4. 이전 탐색 버튼 감추기
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  nextButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    // 이전 탐색 버튼 감추기
    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });
};

// 5-1. 탐색 버튼 다시 보여주기
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  nextButton.addEventListener("click", () => {
    // 이전 버튼 보여주기
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    // 다음 버튼 보여주기
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });
};

// 5-2. 로딩 시, 이전 탐색 버튼 감추기
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  // 로딩 시, 이전 탐색 버튼 감추기
  prevButton.hidden = true;

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });
};

// 5-3. 로딩 시, 이전/다음 탐색 버튼 표시 설정
// - 사용자가 활성 상태 클래스 이름을 설정하지 않을 경우 경고
// - 첫 콘텐츠인 경우, 이전 탐색 버튼 감춤
// - 마지막 콘텐츠인 경우, 다음 탐색 버튼 감춤
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  // 문서에서 컨텐츠를 순회하여 활성클래스가 있는 컨텐츠가 있는지 확인
  // 확인되면 활성 컨텐츠를 인덱스 변수에 기억

  // 활성 상태 인덱스 기억
  let selectedIndex = -1;

  // for 문
  for (let i = 0; i < contents.length; i++) {
    // 순환중인 컨텐츠에 활성 클래스 있는지 확인
    if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
      selectedIndex = i;
      break;
    }
  }

  // 어떠한 캐러셀에도 활성 클래스가 없을 경우 경고
  if (selectedIndex === -1) {
    console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
  } else if (selectedIndex === 0) {
    prevButton.hidden = true;
  } else if (selectedIndex === contents.length) {
    nextButton.hidden = true;
  }

  // - 사용자가 활성 상태 클래스 이름을 설정하지 않을 경우 경고
  // - 첫 콘텐츠인 경우, 이전 탐색 버튼 감춤
  // - 마지막 콘텐츠인 경우, 다음 탐색 버튼 감춤

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });
};

// 6. 버튼 숨겨진 상태 설정(기능) 추출
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");
  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });

  // 버튼 감춤 상태 조절하는 함수
  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 7-1. 인디케이터 탐색
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  // 인디케이터 wrapper, 인디케이터 버튼 찾기
  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 7-2. 인디케이터 순환하여 이벤트 리스너 추가
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });

  // 인디케이터 집합을 순환 처리
  for (const indicator of indicators) {
    indicator.addEventListener("click", () => {
      console.log(indicator);
    });
  }

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 7-3. 탐색한 인디케이터
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener("click", () => {
      let selectedIndex;

      for (let i = 0; i < indicators.length; i++) {
        // 순환중인 상태의 인디케이터와 클릭한 인디케이터가 같은지 확인
        // 동일 시, 그 인덱스가 선택한 인덱스
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }
      console.log(indicator, selectedIndex);
    });
  }

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 7-4. 인디케이터로 탐색한 콘텐츠 찾기
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener("click", () => {
      let selectedIndex;

      for (let i = 0; i < indicators.length; i++) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      // 사용자가 선택한 인디케이터의 인덱스에 해당하는 컨텐츠 찾기
      const activeContent = contents.item(selectedIndex);
      console.log(activeContent);
    });
  }

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 7-5. 인디케이터로 탐색한 콘텐츠로 전환
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener("click", () => {
      let selectedIndex;

      for (let i = 0; i < indicators.length; i++) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);
    });
  }

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 7-6. 선택된 상태 변경
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener("click", () => {
      let selectedIndex;

      for (let i = 0; i < indicators.length; i++) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      // 선택된 컨텐츠 상태 변경
      // 이전에 선택된 컨텐츠 찾기
      const selectedContent = contentWrapper.querySelector(
        "." + SELECTED_CLASSNAME
      );

      // 이전에 선택된 컨텐츠에 활성 클래스 제거
      selectedContent.classList.remove(SELECTED_CLASSNAME);

      // 현재 선택된 컨텐츠에 활성 클래스 추가
      activeContent.classList.add(SELECTED_CLASSNAME);
    });
  }

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 7-7. 인디케이터 상태 변경
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) {
      nextButton.hidden = true;
    }

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener("click", () => {
      let selectedIndex;

      for (let i = 0; i < indicators.length; i++) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      const selectedContent = contentWrapper.querySelector(
        "." + SELECTED_CLASSNAME
      );

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      activeContent.classList.add(SELECTED_CLASSNAME);

      // 이전에 선택된 인디케이터 찾기
      const selectedIndicator = indicatorWrapper.querySelector(
        "." + SELECTED_CLASSNAME
      );

      // 이전에 선택된 인디케이터에서 활성 클래스 제거
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);

      // 현재 선택된 인디케이터에서 활성 클래스 추가
      indicator.classList.add(SELECTED_CLASSNAME);
    });
  }

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 8-1. 다음 탐색 버튼 동기화 | 탐색 버튼과 인디케이터 상태 동기화
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) nextButton.hidden = true;

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty(
      "transform",
      "translateX(-" + distance + ")"
    );

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    // 사용자가 다음 탐색 버튼을 누르면
    // 인디케이터 중에 현재 활성 상태인 것을 찾기
    const selectedIndicator = indicatorWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextIndicator = selectedIndicator.nextElementSibling;

    // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
    selectedIndicator.classList.remove(SELECTED_CLASSNAME);

    // 다음 선택될 인디케이터에 활성 클래스 이름 추가
    nextIndicator.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener("click", () => {
      let selectedIndex;

      for (let i = 0; i < indicators.length; i++) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      const selectedContent = contentWrapper.querySelector(
        "." + SELECTED_CLASSNAME
      );

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      activeContent.classList.add(SELECTED_CLASSNAME);

      // 이전에 선택된 인디케이터 찾기
      const selectedIndicator = indicatorWrapper.querySelector(
        "." + SELECTED_CLASSNAME
      );

      // 이전에 선택된 인디케이터에서 활성 클래스 제거
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);

      // 현재 선택된 인디케이터에서 활성 클래스 추가
      indicator.classList.add(SELECTED_CLASSNAME);
    });
  }

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 8-2. 이전 탐색 버튼 동기화 | 탐색 버튼과 인디케이터 상태 동기화
() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) nextButton.hidden = true;

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty(
      "transform",
      "translateX(-" + distance + ")"
    );

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    const selectedIndicator = indicatorWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextIndicator = selectedIndicator.nextElementSibling;

    selectedIndicator.classList.remove(SELECTED_CLASSNAME);

    nextIndicator.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    // 사용자가 이전 탐색 버튼을 누르면
    // 인디케이터 중에 현재 활성 상태인 것을 찾기
    const selectedIndicator = indicatorWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevIndicator = selectedIndicator.previousElementSibling;

    // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
    selectedIndicator.classList.remove(SELECTED_CLASSNAME);

    // 현재 선택될 인디케이터에 활성 클래스 이름 추가
    prevIndicator.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener("click", () => {
      let selectedIndex;

      for (let i = 0; i < indicators.length; i++) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      const selectedContent = contentWrapper.querySelector(
        "." + SELECTED_CLASSNAME
      );

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      activeContent.classList.add(SELECTED_CLASSNAME);

      // 이전에 선택된 인디케이터 찾기
      const selectedIndicator = indicatorWrapper.querySelector(
        "." + SELECTED_CLASSNAME
      );

      // 이전에 선택된 인디케이터에서 활성 클래스 제거
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);

      // 현재 선택된 인디케이터에서 활성 클래스 추가
      indicator.classList.add(SELECTED_CLASSNAME);
    });
  }

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
};

// 8-3. 탐색 버튼 표시/감춤 동기화
(() => {
  const carousel = document.querySelector(".carousel");
  const contentWrapper = carousel.querySelector(".carousel__contents");
  const contents = contentWrapper.querySelectorAll(".carousel__content");

  const indicatorWrapper = carousel.querySelector(".carousel__indicators");
  const indicators = indicatorWrapper.querySelectorAll(".carousel__indicator");

  const prevButton = carousel.querySelector('[aria-label^="이전"]');
  const nextButton = carousel.querySelector('[aria-label^="다음"]');

  const SELECTED_CLASSNAME = "is-selected";

  setButtonsHiddenStatus();

  nextButton.addEventListener("click", () => {
    if (prevButton.hidden) prevButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextContent = selectedContent.nextElementSibling;

    if (!nextContent.nextElementSibling) nextButton.hidden = true;

    const distance = getComputedStyle(nextContent).getPropertyValue("left");
    contentWrapper.style.setProperty(
      "transform",
      "translateX(-" + distance + ")"
    );

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    nextContent.classList.add(SELECTED_CLASSNAME);

    const selectedIndicator = indicatorWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const nextIndicator = selectedIndicator.nextElementSibling;

    selectedIndicator.classList.remove(SELECTED_CLASSNAME);

    nextIndicator.classList.add(SELECTED_CLASSNAME);
  });

  prevButton.addEventListener("click", () => {
    if (nextButton.hidden) nextButton.hidden = false;

    const selectedContent = contentWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevContent = selectedContent.previousElementSibling;

    if (!prevContent.previousElementSibling) prevButton.hidden = true;

    const distance = getComputedStyle(prevContent).getPropertyValue("left");
    contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

    selectedContent.classList.remove(SELECTED_CLASSNAME);
    prevContent.classList.add(SELECTED_CLASSNAME);

    // 사용자가 이전 탐색 버튼을 누르면
    // 인디케이터 중에 현재 활성 상태인 것을 찾기
    const selectedIndicator = indicatorWrapper.querySelector(
      "." + SELECTED_CLASSNAME
    );
    const prevIndicator = selectedIndicator.previousElementSibling;

    // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
    selectedIndicator.classList.remove(SELECTED_CLASSNAME);

    // 현재 선택될 인디케이터에 활성 클래스 이름 추가
    prevIndicator.classList.add(SELECTED_CLASSNAME);
  });

  for (const indicator of indicators) {
    indicator.addEventListener("click", () => {
      let selectedIndex;

      for (let i = 0; i < indicators.length; i++) {
        if (indicators.item(i) === indicator) {
          selectedIndex = i;
          break;
        }
      }

      // selectedIndex 값이 처음(0)일 때
      // -> prevButton 숨긴다, nextButton 보인다
      if (selectedIndex === 0) {
        prevButton.hidden = true;
        nextButton.hidden = false;
      } // selectedIndex 값이 마지막 인덱스(indicators.length -1)일 때
      // -> prevButton 보인다, nextButton 숨긴다
      else if (selectedIndex === indicators.length - 1) {
        prevButton.hidden = false;
        nextButton.hidden = true;
      } // 둘 다 아닐 때
      // -> prevButton, nextButton 둘 다 보인다
      else {
        prevButton.hidden = false;
        nextButton.hidden = false;
      }

      const activeContent = contents.item(selectedIndex);
      const distance = getComputedStyle(activeContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      const selectedContent = contentWrapper.querySelector(
        "." + SELECTED_CLASSNAME
      );

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      activeContent.classList.add(SELECTED_CLASSNAME);

      const selectedIndicator = indicatorWrapper.querySelector(
        "." + SELECTED_CLASSNAME
      );

      selectedIndicator.classList.remove(SELECTED_CLASSNAME);

      indicator.classList.add(SELECTED_CLASSNAME);
    });
  }

  function setButtonsHiddenStatus() {
    let selectedIndex = -1;

    for (let i = 0; i < contents.length; ++i) {
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        selectedIndex = i;
        break;
      }
    }

    if (selectedIndex === -1) {
      console.warn("어떤 캐러셀 컨텐츠에도 활성 클래스가 없다");
    } else if (selectedIndex === 0) {
      prevButton.hidden = true;
    } else if (selectedIndex === contents.length) {
      nextButton.hidden = true;
    }
  }
})();

// - 로딩되면 이전 버튼은 처음에 감춰져야 합니다.

// - 다음 탐색 버튼을 누르면 콘텐츠가 전환되어 이전 콘텐츠가 표시됩니다.

// - 표시된 콘텐츠가 처음이 아닌 경우, 이전 버튼이 표시되어야 합니다.
// - 마지막 콘텐츠가 표시되면 다음 버튼은 감춰져야 합니다.
// - 이전 탐색 버튼을 누르면 콘텐츠가 전환되어 이전 콘텐츠가 표시됩니다.
// - 표시된 콘텐츠가 마지막이 아닌 경우, 다음 버튼이 표시되어야 합니다.
// - 처음 콘텐츠가 표시되면 이전 버튼은 감춰져야 합니다.
// - 인디케이터를 클릭하면 해당 순서의 콘텐츠가 표시되어야 합니다.
// - 표시된 콘텐츠에 따라 이전/다음 버튼이 감춰지거나 표시되어야 합니다.
// - 이전 활성 인디케이터와 클릭한 인디케이터는 활성 상태가 서로 전환되어야 합니다.
