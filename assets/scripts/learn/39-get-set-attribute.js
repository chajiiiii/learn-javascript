/* global byId, query, click, mouseenter */

// --------------------------------------------------------------------------
// JavaScript로 CSS 스타일 읽기
// --------------------------------------------------------------------------

{
  // --------------------------------------------------------------------------
  // 쓰기 : setAttribute(attributeName, value)
  const noticeElement = byId("notice");
  // console.log(noticeElement);

  click(noticeElement, () => {
    noticeElement.setAttribute("contenteditable", true);
    noticeElement.setAttribute("data-role", "student");
    noticeElement.setAttribute("data-status", "offline");
    noticeElement.setAttribute("data-user-id", "1004");
  });

  // const noticeElement = document.getElementById("notice");
  const hobbyCheckbox = document.getElementById("hobby");
  console.log(hobbyCheckbox.checked);

  noticeElement.setAttribute("contenteditable", true);

  // --------------------------------------------------------------------------
  // 읽기 : getAttribute(attributeName)

  const submitButton = query("form button[type='submit']");

  mouseenter(submitButton, () => {
    const role = noticeElement.getAttribute("data-role");
    console.log("role =", role);
    const status = noticeElement.getAttribute("data-status");
    console.log("status =", status);
    const userId = noticeElement.getAttribute("data-user-id");
    console.log("userId =", userId);
    const category = noticeElement.getAttribute("data-category");
    console.log("category =", category);
    const idName = noticeElement.getAttribute("id");
    console.log("idName =", idName);
    const className = noticeElement.getAttribute("class");
    console.log("className =", className);
    // const className = noticeElement.classList.value
  });
}
