var num1_ts = document.getElementById("x");
var num2_ts = document.getElementById("y");
var button_ts = document.getElementById("my_btn");
function addTs(x, y) {
    return x + y;
}
button_ts.addEventListener("click", function () {
    console.log(addTs(+num1_ts.value, +num2_ts.value));
});
