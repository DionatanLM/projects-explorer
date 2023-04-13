import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMC, notNumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = form.querySelector("#weight");
const inputHeight = form.querySelector("#height");

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMC(weight, height);
  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `O seu IMC é ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}
