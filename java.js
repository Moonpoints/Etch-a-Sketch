let grid = document.querySelector("#grid");
let button = document.querySelector("#reset");
let userChoice = 16;

cellListener = () =>{
document.querySelectorAll('.cell').forEach((cell) => {
cell.addEventListener("mouseover", (sketch) => {
    let currentColor = window.getComputedStyle(cell).backgroundColor;
    let newColor = darkenColor(currentColor, 0.1);
    cell.style.backgroundColor = newColor;
});
});
};

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