/* global byId*/

// --------------------------------------------------------------------------
// Custom 속성 읽기 & 쓰기 & 삭제
// --------------------------------------------------------------------------

(() => {
  const para = byId("notice");

  // 쓰기

  para.dataset.category = "frontend-web-development";

  // 읽기

  console.log(para.dataset.category);
  console.log(para.dataset.userId);
})();

(() => {
  // 삭제

  const pElement = document.querySelector("p");
  console.log(pElement.dataset.category);

  pElement.removeAttribute("id");
  pElement.removeAttribute("class");
  console.log(pElement);

  console.log(pElement.attributes);
  console.log(Array.from(pElement.attributes));

  Array.from(pElement.attributes).forEach((attrObject) => {
    pElement.removeAttribute(attrObject.name);
  });
})();

// --------------------------------------------------------------------------
// 실습
(() => {
  const product = document.querySelector(".product");
  const readButton = document.getElementById("read");

  //   1. "속성 읽기" 버튼 클릭 시, 제품의 커스텀 속성을 읽어 콘솔 패널에 출력합니다. (`getAttribute` 활용)

  readButton.addEventListener("click", () => {
    const itemName = product.getAttribute("data-name");
    console.log(itemName);
  });

  // 2. "속성 읽기" 버튼 클릭 시, 제품의 커스텀 속성을 읽어 콘솔 패널에 출력합니다. (`dataset` 활용)
  readButton.addEventListener("click", () => {
    const itemStock = product.dataset.stock;
    console.log(itemStock);
  });

  // 3. "재고 수정" 버튼 클릭 시, 현재 재고 값에 2를 더한 값으로 설정하고 "📦 재고: 5"로 화면에 반영합니다.
  const stockButton = document.getElementById("update");

  stockButton.addEventListener("click", () => {
    const itemStock = product.dataset.stock;
    const stockNumber = Number(itemStock);
    const updatedStock = stockNumber + 2;
    console.log("📦 재고:", updatedStock);

    const stockOutput = product.querySelector(".stock");
    console.log(stockOutput);
    stockOutput.textContent = updatedStock;
  });

  // 4. "속성 제거" 버튼 클릭 시, 제품 `data-stock` 속성을 제거하고, "📦 재고: 없음"으로 화면에 반영합니다.
  const removeButton = document.getElementById("remove");

  removeButton.addEventListener("click", () => {
    product.removeAttribute("data-stock");
    product.querySelector(".stock").textContent = "없음";
  });
})();
