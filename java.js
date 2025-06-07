let container = document.querySelector("#container");

let userChoice = 16;

for (let i = 0; i < userChoice * userChoice; i ++){
   let div = document.createElement("div");
   div.className = "grid";
   container.appendChild(div);
   };

darkenColor = (rgbString, amount) => {
    let rgb = rgbString.match(/\d+/g).map(Number);
    let darkened = rgb.map(value => Math.max(0, value - value * amount));
    return `rgb(${darkened.map(v => Math.round(v)).join(', ')})`;
};

document.querySelectorAll('.grid').forEach((grid) => {
grid.addEventListener("mouseover", (sketch) => {
    let currentColor = window.getComputedStyle(grid).backgroundColor;
    let newColor = darkenColor(currentColor, 0.1);
    grid.style.backgroundColor = newColor;
});
});

let button = document.querySelector("#reset");
button.addEventListener("click", () => {  
document.querySelectorAll(".grid").forEach(el => el.remove());

let getChoice = prompt("How many squares do you want per side?");
userChoice = parseInt(getChoice);

for (let i = 0; i < userChoice * userChoice; i ++){
   let div = document.createElement("div");
   div.className = "grid";
   container.appendChild(div);
   };

   darkenColor = (rgbString, amount) => {
    let rgb = rgbString.match(/\d+/g).map(Number);
    let darkened = rgb.map(value => Math.max(0, value - value * amount));
    return `rgb(${darkened.map(v => Math.round(v)).join(', ')})`;
};

document.querySelectorAll('.grid').forEach((grid) => {
grid.addEventListener("mouseover", (sketch) => {
    let currentColor = window.getComputedStyle(grid).backgroundColor;
    let newColor = darkenColor(currentColor, 0.1);
    grid.style.backgroundColor = newColor;
});
});
});
