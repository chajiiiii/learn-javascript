// 요소 동적 생성 (dynamic creating element node)
() => {
  // <section> 요소 생성
  const sectionElement = document.createElement("section");
  // 생성된 요소에 클래스 이름 설정(추가)
  sectionElement.classList.add("sectioning-content");
  // 커스텀 속성 설정(추가)
  sectionElement.dataset.category = "sports";
  // 텍스트 콘텐츠 추가
  sectionElement.textContent = "스포츠는 역시 멋사!";
  // HTML 콘텐츠 추가(덮어쓰기)
  sectionElement.innerHTML = `<h2>${sectionElement.textContent}</h2>`;
  console.log(sectionElement);

  // <table> 요소 생성
  const tableElement = document.createElement("table");
  // 생성된 요소에 클래스 이름 설정(추가)
  tableElement.className = "zebra-table";
  // 커스텀 속성 설정(추가)
  tableElement.setAttribute("data-presentation", "true");
  // 표 제목 텍스트 콘텐츠 추가
  tableElement.textContent = "얼룩말 사육 표";
  // 표 제목 HTML 콘텐츠 추가(덮어쓰기)
  tableElement.innerHTML = `<caption>${tableElement.textContent}</caption>`;

  console.log(tableElement);

  // DOM에 추가
  const mountElement = document.querySelector(".mount");
  mountElement.appendChild(sectionElement);
  mountElement.appendChild(tableElement);
};

// 라면 레서피!!
() => {
  const ol = document.querySelector(".ramen-cooking-recipe");

  // DOM에 <li> 요소 생성 후 텍스트 컨텐츠 추가
  const listItem = document.createElement("li");
  listItem.textContent = "맛잇게 먹자~";

  // 생성된 <li> 요소를 ol 참조 요소 내부 마지막 자식으로 추가
  ol.appendChild(listItem);
};

// 요소 위치 변경
// appendChild()
() => {
  const button = document.querySelector("button");

  const section = button.nextElementSibling;
  const [likeFruitList, unlikeFruitList] = section.children;

  button.addEventListener("click", () => {
    // 좋아하는 과일 첫번째를 좋아하지 않는 과일 마지막으로 이동
    const firstFruit = likeFruitList.firstElementChild;
    if (!firstFruit) return;
    unlikeFruitList.appendChild(firstFruit);
  });
};

// 특정 요소 앞에 생성된 요소 삽입
// insertBefore()
() => {
  // 동적으로 생성한 요소
  // <li>면을 넣고 3-4분 끓입니다.

  const recipe = document.querySelector(".ramen-cooking-recipe");
  // const [, , targetElement] = recipe.children;
  const targetElement = recipe.children[2];

  const recipeItem = document.createElement("li");
  recipeItem.textContent = "면을 넣고 끓이기";

  // insertBefore(넣을 요소, before 요소)
  recipe.insertBefore(recipeItem, targetElement);
};

// 문서에 존재하는 요소를 목표 노드 앞에 추가
(() => {
  const recipe = document.querySelector(".ramen-cooking-recipe");

  // 삽입 요소
  const insertRecipe = recipe.firstElementChild;

  // 타겟 요소
  const targetRecipe = recipe.lastElementChild;

  // 삽입
  recipe.insertBefore(insertRecipe, targetRecipe);
})();
