const GRID_PIXELS = 800; // width and height in pixels of grid

const container = document.getElementById('container');

// create grid with gridSize number of squares per side
function createGrid(gridSize) {
  for(let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    for(let j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      
      // adjust width and height of each grid square
      let squareSize = GRID_PIXELS/gridSize;
      gridSquare.style.width = `${squareSize}px`;
      gridSquare.style.height = `${squareSize}px`;

      // add hover functionality to grid square
      gridSquare.addEventListener('mouseenter', () => {
        gridSquare.classList.add('hovered');
      });

      gridRow.appendChild(gridSquare);
    }
    container.appendChild(gridRow);
  }
}

createGrid(16); // website starts with 16 x 16 grid

const button = document.querySelector('button');

// allow user to change grid size with button click
button.addEventListener('click', () => {
  // prompt user for new grid size
  let gridSize = parseInt(prompt('Enter number of squares per side of new grid'));
  // make sure user input is valid
  while(!gridSize || gridSize < 0 || gridSize > 100) {
    let errorMsg = (!gridSize || gridSize < 0) ? 'Invalid number.' : 'Grid size cannot be greater than 100.';
    gridSize = parseInt(prompt(`${errorMsg} Enter number of squares per side of new grid`));
  }

  container.replaceChildren();  // remove previous grid

  createGrid(gridSize); // create new grid with new size
});