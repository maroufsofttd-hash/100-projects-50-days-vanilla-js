const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const minutes = document.querySelector("#minutes");
const secondes = document.querySelector("#secondes");
const timers = document.querySelector("#timers");
const span = document.querySelector("#span");
const stopper = document.querySelector("#stopper");
let sold = parseInt(localStorage.getItem("mtn")) || 100000;
span.textContent = sold;

console.log(sold);

const start = 10 * 1000;
function debittransac(mont) {
  let debit = sold - mont;
  localStorage.setItem("mtn", debit);
  return (span.textContent = debit);
}

function startcount(start) {
  return {
    minutes: Math.floor((start % (60 * 60 * 1000)) / (60 * 1000)),
    secondes: Math.floor((start % (60 * 1000)) / 1000),
  };
}

btn.addEventListener("click", () => {
  let montant = input.value;
  if (montant < 0 && montant <= sold) {
    return alert("impossible valeur incorrecte");
  }
  let date = start;
  let d = startcount(date);

  let t = setInterval(() => {
    if (date <= 0) {
      debittransac(montant);
      timers.style.display = "none";
      return;
    }
    date = date - 1000;
    d = startcount(date);
    console.log(date);

    minutes.textContent = d.minutes;
    secondes.textContent = d.secondes;
  }, 1000);
  timers.style.display = "flex";
  stopper.addEventListener("click", () => {
    timers.style.display = "none";
    input.value = "";
    clearInterval(t);
  });
});
