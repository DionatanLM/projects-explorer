let attempt = 1;

function handleClick(event) {
  event.preventDefault();
  const randomNumber = Math.round(Math.random() * 10);
  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) === randomNumber) {
    document.querySelector(".screen1").classList.add("hidden");
    document.querySelector(".screen2").classList.remove("hidden");

    document.querySelector(
      ".screen2 span"
    ).innerText = `Acertou em ${attempt} tentativas`;
  } else {
    alert(`Tente novamente`);
    inputNumber.value = "";
    attempt++;
  }
}
