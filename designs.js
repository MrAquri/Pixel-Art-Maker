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
});

let table = document.getElementById("pixelCanvas");

function makeGrid(height, width) {
    for (let i = 1; i <= height; i++) {
        let x = document.createElement("tr");
        x.setAttribute("id", "table-row" + i);
        table.appendChild(x);
        for (let j = 1; j <= width; j++) {
            let y = document.createElement("td");
            y.setAttribute("id", "table-column" + j);
            x.appendChild(y);
        }
    }

}

//Picking up color

table.addEventListener('click', function() {
    color = document.getElementById("colorPicker").value;
    event.target.style.removeProperty("background-color");
    event.target.style.background = color;
});
