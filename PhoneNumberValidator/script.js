const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

check.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue.length <= 0) {
    alert("Please provide a phone number");
  } else if (
    inputValue.match(/^1 \d{3}-\d{3}-\d{4}$/) ||
    inputValue.match(/^1 \(\d{3}\) \d{3}-\d{4}$/) ||
    inputValue.match(/^1\(\d{3}\)\d{3}-\d{4}$/) ||
    inputValue.match(/^1 \d{3} \d{3} \d{4}$/) ||
    inputValue.match(/^\d{10}$/) ||
    inputValue.match(/^\d{3}-\d{3}-\d{4}$/) ||
    inputValue.match(/^\(\d{3}\)\d{3}-\d{4}$/)
  ) {
    result.innerHTML = `Valid US number: ${inputValue}`;
  } else {
    result.innerHTML = `Invalid US number: ${inputValue}`;
  }
});

clear.addEventListener("click", () => {
  result.innerHTML = "";
  input.value = "";
});
