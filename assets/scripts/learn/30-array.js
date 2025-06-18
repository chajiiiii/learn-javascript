// -----------------------------------------
// 배열(Array) 객체
// -----------------------------------------

// 배열 리터럴로 배열 만들기
const basket = ["대파", "계란", "두부", "시금치", "양파", "케첩"];
console.log(basket, basket.length);

// new Array로 배열 만들기
const numbersEn = new Array("one", "two", "three", "four", "five");
console.log(numbersEn, numbersEn.length);

// new Array 방식의 다른점.
// const onlyOneNumberList = [99]
// 위의 값을 생각하고 아래로 작성하면
// 결과 값: [empty x 99]로 나옴. 99개의 내용 없는 빈 방이 생긴다고 생각하면 됨.
const onlyOneNumberList = new Array(99);
console.log(onlyOneNumberList);

// -----------------------------------------
// 배열 원소(항목) 값 읽기

// array[index]로 값을 꺼낼 수 있다
console.log(basket[3]);
console.log(basket[basket.length - 1]);

// 배열.메소드()
console.log(basket.at(2));
console.log(basket.at(-2));

// -----------------------------------------
// 배열 원소(항목) 값 수정
basket[2] = "순두부";
console.log(basket[2]);

// 아래코드처럼 할 경우 6번부터 19까지는 undefined 값으로 생기게 됨
basket[20] = "carbonara";
console.log(basket);

// -----------------------------------------
// 실습
// 배열에 대해 이해할 수 있는 연습을 진행합니다.
// 1. 빈 배열을 생성합니다.
const emptyArray = [];

// 2. 3개의 항목을 포함하는 배열을 작성합니다.
const threeArray = [true, false, null];

// 3. instructors 배열에서 "야무" 항목을 가져와 yamoo9 변수에 할당합니다.
// instructors 배열에서 "슬비" 항목 값을 "김데리사"로 변경합니다.
const instructors = ["야무", "슬비"];

const yamoo9 = instructors[0];
console.log(yamoo9);

const 김데리사 = instructors[1];
console.log(김데리사);
