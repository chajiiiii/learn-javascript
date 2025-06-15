const exorcists = document.getElementById("exorcist-characters");

const choi = exorcists.querySelector(".master-choi");
console.dir(choi);

// 요즘 방법
{
  choi.classList.add("active");
  console.log(choi.classList.value);

  choi.classList.remove("active");
  console.log(choi.classList.value);
}

// 오래된 방법
{
  console.log(choi.className);

  choi.className = choi.className + " active";
  // choi.className += " active";
}
