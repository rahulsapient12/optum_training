const num1_ts = document.getElementById("x")! as HTMLInputElement;
const num2_ts = document.getElementById("y")! as HTMLInputElement;
const button_ts = document.getElementById("my_btn")! as HTMLButtonElement;

function addTs(x: number, y: number) {
  return x + y;
}

button_ts.addEventListener("click", () => {
  console.log(addTs(+num1_ts.value, +num2_ts.value));
});
