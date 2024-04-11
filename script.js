const adviceButton = document.getElementById("advice-generator");
adviceButton.addEventListener("click", randomAdvice);

let slipNum = "";
let slipAdvice = "";
async function randomAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  slipNum = data.slip.id;
  slipAdvice = data.slip.advice;

  function updateAdvice() {
    let adviceNum = (document.querySelector(".advice-num").innerHTML =
      "ADVICE #" + slipNum);
    let advice = (document.querySelector(".advice").innerHTML = slipAdvice);
  }
  updateAdvice();
}

() => adviceButton.removeEventListener("click", randomAdvice);
