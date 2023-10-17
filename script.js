const button = document.querySelector(".toggle");
button.addEventListener("click", alert);
let counter = 0;
function alert() {
  const colors = [
    "red",
    "green",
    "blue",
    "purple",
    "lightblue",
    "lightgreen",
    "orange",
    "brown",
  ];
  const body = document.getElementsByTagName("body")[0];
  body.style.background = colors[counter++];
  if (counter > colors.length - 1) counter = 0;
}
