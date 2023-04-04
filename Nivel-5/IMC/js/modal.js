export const Modal = {
  wrrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),
  open() {
    Modal.wrrapper.classList.add("open");
  },
  close() {
    Modal.wrrapper.classList.remove("open");
  },
};

Modal.buttonClose.onclick = () => {
  Modal.close();
};

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close();
  }
}
