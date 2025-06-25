{
  // 1. 제어 대상, 선택된 인덱스 찾기

  // 제어 대상 찾기
  const tabsContainer = document.querySelector(".tabs__container");
  console.log(tabsContainer);

  const tabs = tabsContainer.querySelectorAll(".tab");
  const tabContents = tabsContainer.querySelectorAll(".tab__content");
  console.log(tabs, tabContents);

  // 활성 상태 클래스 이름
  const SELECTED_CLASSNAME = "is-selected";

  // 선택된 인덱스 찾기
  // for문 + break

  // 선택되지 않았음을 나타내는 값 -1 초기값 구성
  let selectedIndex = -1;

  for (let i = 0; i < tabs.length; i++) {
    console.log(i);
    const tab = tabs.item(i);
    if (tab.classList.contains(SELECTED_CLASSNAME)) {
      selectedIndex = i;
      break;
    }
  }

  // 2. 모든 탭에 이벤트 리스너 추가

  // for...of 문
  () => {
    for (const tab of tabs) {
      tab.addEventListener("click", () => {
        console.log(tab);
      });
    }
  };

  // forEach()
  () => {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        console.log(tab);
      });
    });
  };

  // 3. 이전 선택된 대상 비활성화
  () => {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        if (selectedIndex > -1) {
          // 이전 활성 상태의 탭 요소에서 활성 클래스 제거
          const currentTab = tabs.item(selectedIndex);
          // console.log(currentTab);

          currentTab.classList.remove(SELECTED_CLASSNAME);

          // 이전 활성 상태의 탭 컨텐트 요소에서 활성 클래스 제거

          const currentTabContent = tabContents.item(selectedIndex);
          // console.log(currentTabContent);

          currentTabContent.classList.remove(SELECTED_CLASSNAME);
        }
      });
    });
  };

  // 4. 현재 선택된 대상 비활성화
  (() => {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        if (selectedIndex > -1) {
          const currentTab = tabs.item(selectedIndex);
          currentTab.classList.remove(SELECTED_CLASSNAME);

          const currentTabContent = tabContents.item(selectedIndex);
          currentTabContent.classList.remove(SELECTED_CLASSNAME);
        }

        // 현재 활성 상태의 인덱스
        let activeIndex;

        // for 문하고 break 조합으로 선택된 인덱스 찾기
        for (let i = 0; i < tabs.length; i++) {
          const compareTab = tabs.item(i);
          if (compareTab === tab) {
            activeIndex = i;
            break;
          }
        }

        // 현재 활성 상태 인덱스에 해당되는 탭 요소에서 활성 클래스 이름 추가
        const activeTab = tabs.item(activeIndex);
        activeTab.classList.add(SELECTED_CLASSNAME);

        // 현재 활성 상태 인덱스에 해당되는 탭 콘텐츠 요소에서 활성 클래스 추가
        const activeTabContent = tabContents.item(activeIndex);
        console.log(activeTabContent);
        activeTabContent.classList.add(SELECTED_CLASSNAME);

        // 선택된 인덱스 값 업데이트(변경)
        selectedIndex = activeIndex;
      });
    });
  })();
}
