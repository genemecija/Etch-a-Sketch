/**
 * 'rgbToHsl' function is snippet of 'color-conversion-algorithms.js'
 * Converts an RGB color value to HSL.
 * Source Code Link: https://gist.github.com/mjackson/5311256
 * Credit:  mjackson: https://gist.github.com/mjackson
 */
function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
}

// Get the background color of the element, convert the color from RGB to HSL,
// and change the elements background color to a random darker color 
function randomizeColor(e) {
  let rgb = e.target.style.backgroundColor;
  let colors = rgb.split("(")[1].split(", ");
  let r = colors[0];
  let g = colors[1];
  let b = colors[2].split(")")[0];
  let hsl = rgbToHsl(r, g, b);
  let h = Math.round(Math.random() * 360);
  let s = 100;
  let l = hsl[2] * 100 - 10; // Darkens square with each pass; completely black after 10 passes
  e.target.style.backgroundColor = `hsl(${h},${s}%,${l}%)`;
}

// Selecting and styling the div that will contain the grid squares
const gridContainer = document.querySelector("#grid-container");
gridContainer.style.width = "800px";
gridContainer.style.height = "800px";
gridContainer.style.border = "solid 1px #CCC";
gridContainer.style.padding = "0px";

// Functionality of the 'Clear' button
// Deletes all squares on the grid and creates a new grid of a user-chosen length
function clearGrid() {
  const squares = document.querySelectorAll(".square");
  newSize = prompt("Enter the desired number of squares per row.");
  gridContainer.innerHTML = "";
  createGrid(newSize);
}

// Selecting the 'Clear' button and adding listener
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearGrid);

// Creates a grid within the container div and configures, styles,
// and adds a listener to each square of the grid
function createGrid(numOfSquares = 16) {
  const size = 800 / numOfSquares;
  for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "square");
      newDiv.style.width = `${size}px`;
      newDiv.style.height = `${size}px`;
      newDiv.style.border = "solid 1px #CCC";
      newDiv.style.position = "inline";
      newDiv.style.float = "left";
      newDiv.style.margin = "-1px";
      newDiv.style.backgroundColor = "rgb(255,255,255)";
      newDiv.addEventListener("mouseover", randomizeColor);
      gridContainer.append(newDiv);
    }
  }
}

// Create the default grid when window loads
window.onload = createGrid();