//grid dimensions
var totalWidth = '560'; //in px
var customGridSideLength = 16;
var body = document.querySelector('body');
//create a clear button
let clearButton = document.createElement('button');
clearButton.textContent = 'CLEAR GRID';
clearButton.setAttribute('style', 'display: block; margin: 10px auto;');
clearButton.addEventListener('click', clearGrid);
body.appendChild(clearButton);

//create the 16x16 grid of square divs
let containerDiv = document.createElement('div');
containerDiv.classList.add('grid');

//create 256 divs
createGridBlocks();
body.appendChild(containerDiv);

//add event listener
addGridBlockListeners();

function changeBackground(e) {
    
    e.target.style.backgroundColor = 'pink';
}

function clearGrid() { //and prompt
    const allDivs = Array.from(document.querySelectorAll('.gridBlock'));
    allDivs.forEach(div => {
        div.removeAttribute('style');
    })

    //alert
    let side = prompt("Please enter the side length (number of squares) for your desired grid", 16);
    adjustGridSize(side);
}

//custom grid size
function adjustGridSize(side) {
    customGridSideLength = side;
    let myGrid = document.querySelector('.grid');
    myGrid.style.cssText = "display:grid;grid-template-columns: repeat(" + customGridSideLength +", " + (totalWidth/customGridSideLength) + "px);grid-template-rows: repeat(" + customGridSideLength +", " + (totalWidth/customGridSideLength) + "px);justify-content: center;"
    //remove current divs and create new divs
    const allDivs = Array.from(document.querySelectorAll('.gridBlock'));
    allDivs.forEach(div => {
        myGrid.removeChild(div);
    })
    //create custom divs
    createGridBlocks();
    //add new event listeners
    addGridBlockListeners();
    
}

function createGridBlocks() {
    for(let i = 0; i<(customGridSideLength*customGridSideLength); i++) {
        let tempDiv = document.createElement('div');
        tempDiv.id = 'div' + (i+1);
        tempDiv.classList.add('gridBlock');
        containerDiv.appendChild(tempDiv);
    }
}

function addGridBlockListeners() {
    const allDivs = Array.from(document.querySelectorAll('.gridBlock'));
    allDivs.forEach(div => div.addEventListener("mouseover", changeBackground));

}

