const display = document.querySelector("#display");
const btns = document.querySelectorAll(".btn");
const equal = document.querySelector("#equal");
const delet = document.querySelector("#delete");

// 1. Bouton C = Clear
delet.addEventListener("click", () => {
  display.textContent = "0";
});

equal.addEventListener("click", () => {
  try {
    display.textContent = eval(display.textContent);
    shouldResetScreen = true;
  } catch {
    display.textContent = "Erreur";
  }
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "delete" || btn.id === "equal") return;

    let valeur = btn.value;

    if (display.textContent === "0" || shouldResetScreen) {
      display.textContent = valeur;
      shouldResetScreen = false;
    } else {
      display.textContent += valeur;
    }
  });
});
