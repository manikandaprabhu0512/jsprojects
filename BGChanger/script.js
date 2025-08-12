// console.log('Manikanda');

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
  button.addEventListener("mouseout", (e) => {
    if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
