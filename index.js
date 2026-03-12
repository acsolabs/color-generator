// Créer 3 variables pour stocker 3 chiffres aléatoires

//Donner au body une couleur de fond en rgb()

// Montrer sur le body la couleur rgb()

//jouer un set interval 1sec pour que ça se joue tout seul ensuite
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

backgroundColor = `rgb(${randomColor(red)}, ${randomColor(green)}, ${randomColor(blue)})`;

document.body.style.background = backgroundColor;
colorDisplay.innerText = backgroundColor;
