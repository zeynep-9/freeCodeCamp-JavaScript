const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue.length <= 0) {
    alert("Please input a value");
    return;
  } else if (
    inputValue.length > 0 &&
    inputValue.replace(/[^a-z0-9]/gi, "").toLowerCase() ===
      inputValue
        .replace(/[^a-z0-9]/gi, "")
        .toLowerCase()
        .split("")
        .reduce((acc, char) => char + acc, "")
  ) {
    result.innerHTML = `${inputValue} is a palindrome`;
  } else {
    result.innerHTML = `${inputValue} is not a palindrome`;
  }
});
