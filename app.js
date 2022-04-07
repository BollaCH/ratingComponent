function toggle() {
  const thanks = document.querySelector("#thanks");
  const rating = document.querySelector("#rating");
  rating.classList.add("hidden");
  thanks.classList.remove("hidden");
}
const span = document.querySelectorAll("span");
function rating() {
  for (text of span) text.innerText = value;
}

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  rating();
  toggle();
});

let value = 0;

const ratingOne = document.querySelector("#one");
ratingOne.addEventListener("click", () => {
  removeFocus();
  value = 1;
  ratingOne.classList.add("focused");
});
const ratingTwo = document.querySelector("#two");
ratingTwo.addEventListener("click", () => {
  removeFocus();
  value = 2;
  ratingTwo.classList.add("focused");
});
const ratingThree = document.querySelector("#three");
ratingThree.addEventListener("click", () => {
  removeFocus();
  value = 3;
  ratingThree.classList.add("focused");
});
const ratingFour = document.querySelector("#four");
ratingFour.addEventListener("click", () => {
  removeFocus();
  value = 4;
  ratingFour.classList.add("focused");
});
const ratingFive = document.querySelector("#five");
ratingFive.addEventListener("click", () => {
  removeFocus();
  value = 5;
  ratingFive.classList.add("focused");
});

function removeFocus() {
  const btns = document.querySelectorAll(".rating");
  for (let btn of btns) btn.classList.remove("focused");
}
