const number = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  output.textContent = "";
  let numberValue = parseInt(number.value);
  if (isNaN(numberValue)) {
    output.textContent = "Please enter a valid number";
  } else if (numberValue < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numberValue >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    let romanNumeral = "";
    const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];

    for (const { value, numeral } of romanNumerals) {
      while (numberValue >= value) {
        romanNumeral += numeral;
        numberValue -= value;
      }
    }

    output.textContent = romanNumeral;
  }
});
