// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



// add event listener When form gets submitted and call makeGrid() 
// Grid mount function
//variable declarations
  
// Grid mount function
function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    var grid = '';
    //looping over each row and coloumn to get the grid
    for (var i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        for (var j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    table.innerHTML = grid;  // creating a new raw HTML node and appending it to table
    addClickEventToCells();  //calling event listener
}

//creating function Click Event to all cells
function addClickEventToCells() {
    // on color selection return color:
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}


document.getElementById('sizePicker').onsubmit = function () {
    event.preventDefault();
    const height = document.getElementById('input_height').value; //get value of height
    const width = document.getElementById('input_width').value;   //get value of width
    makeGrid(height, width);   //calling the function Make Grid
};