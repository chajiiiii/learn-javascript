// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

function getMoney(price, unit) {
  // if (unit === undefined) {
  //   unit = "원";
  // }

  // if문의 코드가 한줄이면 생략 가능
  if (!unit) unit = "원";

  // if (unit === "$") {
  //   return unit + price;
  // }

  // if문의 코드가 한줄이면 생략 가능
  if (unit === "$") return unit + price;

  return price + unit;
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500); // '10000원'
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, "$"); // '$80.75'

console.log(moneyKR);
console.log(moneyUS);
