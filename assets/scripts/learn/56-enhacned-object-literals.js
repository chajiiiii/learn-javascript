// 속성 할당 단축
() => {
  const nickname = "야무";
  const phone = "Gallaxy";

  // nickname, phone 변수 값을 객체의 속성 값으로 할당하고자 한다.
  const instrcutor = { nickname, phone };
  console.log(instrcutor);
};

// 메서드 단축
(() => {
  const instrcutor = {
    nickname: "야무",
    phone: "갤럭시",
    location: "서울",
    // introduction: function() {
    introduction() {
      let { nickname: name, phone, location } = this;
      console.log(name, phone, location);
    },
  };

  instrcutor.introduction();
})();
