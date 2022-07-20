//select HTML elements to manipulate the document
const colorPicker = document.querySelector("#colorPicker");
let gridHeight = document.querySelector("#inputHeight");
let gridWidth = document.querySelector("#inputWidth");
let color = document.querySelector("#color");
let tableElement = document.getElementById("pixelCanvas");

// gets values for height and width from form and uses them to call makeGrid() and add click events to the submit button
document.querySelector("#submitButton").addEventListener("click", function (e) {
  //Prevents the page to refresh and the grid to be deleted after it is created
  e.preventDefault();
  // assigning gridHeight and gridWidth  to variables
  let height = gridHeight.value;
  let width = gridWidth.value;
  makeGrid(height, width);
  //the grid cleared(the chosen color) when hitting the 'Submit' button again
  tableElement.firstChild.remove();
  makeGrid(height, width);
});

function makeGrid(r, c) {
  for (let i = 0; i < gridHeight.value; i++) {
    let row = tableElement.insertRow(i);
    for (let j = 0; j < gridWidth.value; j++) {
      let column = row.insertCell(j);
      // add click events on column and row in the grid cell
      column.addEventListener("click", (e) => {
        column.style.backgroundColor = colorPicker.value; // The user can choose a color on a click event to be added to the grid
      });
    }
  }
}
