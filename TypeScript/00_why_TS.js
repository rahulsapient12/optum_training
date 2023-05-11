const num1 = document.getElementById("x");
const num2 = document.getElementById("y");
const button = document.getElementById("my_btn");

function add(x, y) {
  return x + y;
}

button.addEventListener("click", () => {
  console.log(add(num1.value, num2.value));
});
