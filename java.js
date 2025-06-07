let grid = document.querySelector("#grid");
let button = document.querySelector("#reset");
let buttons = document.querySelector("#buttons");
let color = document.querySelector("#color");
let eraser = document.querySelector("#eraser");
let etch = document.querySelector("#etch")
let userChoice = 16;
let currentMode = "darken";
let currentColor = "grey"

cellListener = () => {
    document.querySelectorAll('.cell').forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            if (currentMode === "color") {
                cell.style.backgroundColor = currentColor;
            } else if (currentMode === "eraser") {
                cell.style.backgroundColor = "grey";
            } else if (currentMode === "darken") {
                let curr = window.getComputedStyle(cell).backgroundColor;
                cell.style.backgroundColor = darkenColor(curr, 0.1);
            }
        });
    }
)};
etch.addEventListener("click", () => {
    currentMode = "darken";
})

color.addEventListener("click", () => {
    document.getElementById("colorPicker").style.display = "block";
    currentMode = "color";
});

eraser.addEventListener("click",() => {
    currentMode = "eraser";
    document.querySelector("#colorPicker").style.display = "none";
})

document.querySelector("#closeColorPicker").addEventListener("click", () => {
    document.querySelector("#colorPicker").style.display = "none";
});

const updateColor = () => {
    let r = document.querySelector("#rSlider").value;
    let g = document.querySelector("#gSlider").value;
    let b = document.querySelector("#bSlider").value;
    currentColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector("#colorPreview").style.backgroundColor = currentColor;
};

["rSlider", "gSlider", "bSlider"].forEach(id => {
    document.getElementById(id).addEventListener("input", updateColor);
});

firstGrid = () =>{
for (let i = 0; i < userChoice * userChoice; i ++){
   let div = document.createElement("div");
   div.className = "cell";
   grid.appendChild(div);
    div.style.height = 700 / userChoice + "px";
    div.style.width = 700 / userChoice + "px";
   };
   cellListener();
};
firstGrid();

darkenColor = (rgbString, amount) => {
    let rgb = rgbString.match(/\d+/g).map(Number);
    let darkened = rgb.map(value => Math.max(0, value - value * amount));
    return `rgb(${darkened.map(v => Math.round(v)).join(', ')})`;
};

deleteGrid = () => {
    grid.innerHTML = "";
}

newGrid = () => {
let getChoice = prompt("How many squares do you want per side up to 100?");
if(isNaN(getChoice)){
    alert("please provide a valid number");
}else if(getChoice < 1 || getChoice > 100 ){
    alert('Choose a number between 1 and 100')
} else{
    userChoice = parseInt(getChoice);

    for(let i = 0; i < userChoice * userChoice; i ++){
   let div = document.createElement("div");
   div.className = "cell";
   grid.appendChild(div);
   div.style.height = 700 / userChoice + "px";
    div.style.width = 700 / userChoice + "px";
   };
   cellListener();
}
}

button.addEventListener("click",() => {
    deleteGrid();
    newGrid();
});