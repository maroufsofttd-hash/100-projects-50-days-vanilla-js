window.onload = function () {
  animateskillz();
};

function animateskillz() {
  let skillz = document.querySelectorAll(".skillz");
  skillz.forEach(function (skill) {
    let endvalu = parseInt(skill.textContent);
    let duration = 3000;
    let incremente = endvalu / (duration / 10);
    let current = 0;
    let timer = setInterval(function () {
      if (current >= endvalu) {
        clearInterval(timer);
      } else {
        current += incremente;
        skill.textContent = Math.round(current) + "%";
      }
    }, 10);
  });
}
