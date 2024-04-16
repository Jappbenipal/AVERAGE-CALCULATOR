// Average Calculator

// Event Listener
document.getElementById("calc-btn").addEventListener("click", calcAverage);

// Event Function
function calcAverage() {
  // Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  // Process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 / num2;
  let power = num1 ** num2;
  let n = num1.toFixed(2);
  let tangent = Math.tan(1);
  let random = Math.random(num1 + num2);

  // Output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("the-sum").innerHTML = sum;
  document.getElementById("product").innerHTML = product;
  document.getElementById("remainder").innerHTML = remainder;
  document.getElementById("power").innerHTML = power;
  document.getElementById("decimal").innerHTML = n;
  document.getElementById("tangent").innerHTML = tangent;
  document.getElementById("random").innerHTML = random;
}
