// Select color input
// Select size input
let height, width, color;
// When size is submitted by the user, call makeGrid()


const submit = document.getElementById("sizePicker");
submit.addEventListener('submit', function(event) {
  event.preventDefault();
  height = document.getElementById("inputHeight").value;
  width = document.getElementById("inputWidth").value;
  makeGrid(height, width)
  console.log('Height: ' + height + ' and width: ' + width);
});


function makeGrid() {


}
