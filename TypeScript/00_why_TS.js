const num1 = document.getElementById("x");
const num2 = document.getElementById("y");
const button = document.getElementById("my_btn");

function add(x, y) {
  return x + y;
}
function addWithCheck(x, y) {
  if (typeof parseInt(x) === "number" && typeof parseInt(y) === "number") {
    return parseInt(x) + parseInt(y);
  }
}

button.addEventListener("click", () => {
  console.log(add(num1.value, num2.value), "without Check");
  console.log(addWithCheck(num1.value, num2.value), "with Check");
});
