const GRID_PIXELS = 800; // width and height in pixels of grid

const container = document.getElementById('container');

for(let i = 0; i < 16; i++) {
  const gridRow = document.createElement('div');
  gridRow.classList.add('grid-row');
  for(let j = 0; j < 16; j++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.classList.add('hovered');
    });
    gridRow.appendChild(gridSquare);
  }
  container.appendChild(gridRow);
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
  let gridSize = parseInt(prompt('Enter number of squares per size of new grid'));
  while(!gridSize || gridSize < 0 || gridSize > 100) {
    let errorMsg = (!gridSize || gridSize < 0) ? 'Invalid number.' : 'Grid size cannot be greater than 100.';
    gridSize = parseInt(prompt(`${errorMsg} Enter number of squares per size of new grid`));
  }
  container.replaceChildren();
  for(let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    for(let j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridRow.appendChild(gridSquare);
    }
    container.appendChild(gridRow);
  }
  const gridSquares = document.getElementsByClassName('grid-square');
  let squareSize = GRID_PIXELS/gridSize;
  Array.from(gridSquares).forEach((gridSquare) => {
    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.classList.add('hovered');
    });
  });
});