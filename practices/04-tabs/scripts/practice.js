const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");

const SELECTED_CLASSNAME = "is-selected";

let selectedIndex = -1;

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs.item(i);
  if (tab.classList.contains(SELECTED_CLASSNAME)) {
    selectedIndex = i;
    break;
  }
}

tabs.forEach((tab, activeIndex) => {
  tab.addEventListener("click", () => {
    if (selectedIndex > -1) {
      const activeTab = tabs.item(selectedIndex);
      activeTab.classList.remove(SELECTED_CLASSNAME);

      const activeContent = contents.item(selectedIndex);
      activeContent.classList.remove(SELECTED_CLASSNAME);

      const selectedTab = tabs.item(activeIndex);
      selectedTab.classList.add(SELECTED_CLASSNAME);

      const selectedContent = contents.item(activeIndex);
      selectedContent.classList.add(SELECTED_CLASSNAME);

      selectedIndex = activeIndex;
    }
  });
});
