//variables
let red = 0;
let green = 0;
let blue = 0;
const colorDisplay = document.getElementById("color-display");

//functions
const randomColor = (color) => {
  color = Math.floor(Math.random() * 255);
  return color;
};

const interval = setInterval(() => {
  backgroundColor = `rgb(${randomColor(red)}, ${randomColor(green)}, ${randomColor(blue)})`;
  document.body.style.background = backgroundColor;
  colorDisplay.innerText = backgroundColor;
}, 1000);
