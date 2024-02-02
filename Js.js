document.addEventListener('DOMContentLoaded', function () {
    
    const gridContainer = document.getElementById('grid-container');
    const newGridButton = document.getElementById('newGridButton');

    newGridButton.addEventListener('click', function () {
        let squaresPerSide = prompt('Enter the number of squares per side (up to 100):');
        squaresPerSide = parseInt(squaresPerSide);
        if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
            alert('Please enter a valid number between 1 and 100.');
            return;
        }

        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        generateGrid(squaresPerSide);
    });
    generateGrid(16);
    function generateGrid(squaresPerSide) {
        const squareSize = 960 / squaresPerSide;


    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = squareSize + 'px';
            square.style.height = squareSize + 'px';

            square.addEventListener('mouseenter', function () {
                square.style.backgroundColor = getRandomColor();
            });
            square.addEventListener('mouseleave', function () {
                square.style.backgroundColor = '';
            });

            gridContainer.appendChild(square);
        }
    }
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});