
document.addEventListener("DOMContentLoaded", function() {

    var gridContainer = document.getElementById('container');
    var slider = document.getElementById('slider');

    slider.onchange = function() {

        var gridSize = parseInt(this.value);
        gridContainer.innerHTML = '';

        drawGrid(gridSize, gridContainer);
        applyBackgrounds(gridSize, gridContainer);
    };
});

function drawGrid(size, container) {

    for(var x=0; x<size; x++) {

        for(var y=0; y<size; y++) {

            appendCell(container, size);

        }
    }
}

function appendCell(container, gridSize) {

    var cellSize = 100 / gridSize + '%';

    var div = document.createElement('div');
    div.style.height = cellSize;
    div.style.width = cellSize;

    container.appendChild(div);
}

function applyBackgrounds(gridSize, container) {

    var children = container.children;
    var stepSize = Math.floor(255 / (gridSize + 1));
    var currentCell = 0;

    for(var row=0; row<gridSize; row++) {

        for(var column=0; column<gridSize; column++) {

            var gb = (column + row) * stepSize;

            console.log(gb);

            children[currentCell].style.backgroundColor = 'rgb(255,' + gb + ',' + gb + ')';

            currentCell ++;
        }
    }
}