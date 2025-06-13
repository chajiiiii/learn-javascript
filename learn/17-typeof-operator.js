// --------------------------------------------------------------------------
// 📌 typeof 연산자 활용
// --------------------------------------------------------------------------

const o = {
  name: "object",
  serialNumber: 20250613,
  isObjectType: () => true,
  isNotDefined: undefined,
  empty: null,
  symbol: Symbol("o"),
  int: 100n,
};

// 어떤 data type인지 확인 시

console.log(typeof o);
console.log(typeof o.name);
console.log(typeof o.serialNumber);
console.log(typeof o.isObjectType);
console.log(typeof o.isObjectType());
console.log(typeof o.empty);
