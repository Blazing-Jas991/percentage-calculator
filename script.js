const percentInput = document.querySelector("#percent-input");
const numberInput = document.querySelector("#number-input");
const resultOutput = document.querySelector(".result");
resultOutput.style.display = "none";

function getPercentage() {
  let percentNum = Number(percentInput.value);
  let calNumber = Number(numberInput.value);
  if (isNaN(percentNum) || isNaN(calNumber)) {
    resultOutput.style.display = "none";
    return;
  }
  const calculatedPercent = Math.round(percentNum * (calNumber / 100));
  if (
    Number(calculatedPercent) === 0 ||
    percentInput === "" ||
    numberInput === ""
  ) {
    resultOutput.style.display = "none";
    return;
  }
  resultOutput.textContent = `${percentNum}% of ${calNumber} is: ${calculatedPercent}`;
}

const calButton = document.querySelector(".calculation-button");

calButton.addEventListener("click", (event) => {
  event.preventDefault();
  resultOutput.style.display = "flex";
  getPercentage();
  percentInput.value = "";
  numberInput.value = "";
});

percentInput.addEventListener("input", () => {
  resultOutput.style.display = "none";
});

numberInput.addEventListener("input", () => {
  resultOutput.style.display = "none";
});
