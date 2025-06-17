// ---------------------------------------
// 실습

// 1. 빈 객체를 정의합니다.
const obj = {};

// 2. 점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
obj.name = "michelle";
console.log(obj.name);

// 3. 대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
obj["Full Name"] = "michelle watson";
console.log(obj["Full Name"]);

// 4. 점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
obj.lastName = "watson";
console.log(obj.lastName);

obj.lastName = "johnson";
console.log(obj.lastName);

// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
obj["Full Name"] = "michelle johnson";
console.log(obj["Full Name"]);

// 6. 객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
obj.message = function () {
  return console.log("Hello");
};
obj.message();

// 7. 객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.
obj.age = function (age) {
  return console.log(`I'm ${age} years old`);
};
obj.age(30);

console.log(obj);
// ### 연습 주제

// 어떤 객체를 만들어야 할 지 감이 안 잡힌다면? 아래 주제에 맞는 객체를 만들어 보세요.

// 1. 사람(person) 정보 객체로 만들기
//     - 속성 추가
//     - 속성 읽기
//     - 속성 수정
//     - 속성 삭제
// 2. 도서(book) 정보 객체로 만들기
//     - 속성 추가
//     - 속성 읽기
//     - 속성 수정
//     - 속성 삭제
