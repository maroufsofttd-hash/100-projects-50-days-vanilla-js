const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const jours = document.querySelector("#jours");
const heures = document.querySelector("#heures");
const minutes = document.querySelector("#minutes");
const secondes = document.querySelector("#secondes");
function currentdate(date) {
  const newdate = new Date().getTime();
  const differnce = date - newdate;
  if (differnce < 0) return console.log("Date deja passer");
  let datte = new Date(differnce);
  return {
    jours: Math.floor(differnce / (24 * 60 * 60 * 1000)),
    heures: Math.floor((differnce % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
    minutes: Math.floor((differnce % (60 * 60 * 1000)) / (60 * 1000)),
    secondes: Math.floor((differnce % (60 * 1000)) / 1000),
  };
}
btn.addEventListener("click", () => {
  let t = setInterval(() => {
    let dattte = new Date(input.value).getTime();
    const d = currentdate(dattte);
    jours.textContent = d.jours;
    heures.textContent = d.heures;
    minutes.textContent = d.minutes;
    secondes.textContent = d.secondes;
  }, 1000);
});
