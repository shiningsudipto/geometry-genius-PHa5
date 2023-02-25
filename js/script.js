// triangle
document.getElementById('triangle-calculate').addEventListener('click', function () {
    const triangleInputedData = inputDataCalculation('triangleb', 'triangleh');
    const area = 0.5 * triangleInputedData;
    if (isNaN(area)) {
        alert('enter a valid number');
    } else {
        displayCalculation(nameOfGeometry('triangle'), area)
    }
});
// rectangle
document.getElementById('rectangle-calculate').addEventListener('click', function () {
    const rectangleArea = inputDataCalculation('rectangle-w', 'rectangle-l')
    if (isNaN(rectangleArea)) {
        alert('enter a valid number');
    } else {
        displayCalculation(nameOfGeometry('rectangle'), rectangleArea)
    }
});
// Parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click', function () {
    const area = elementDataCalculation('parallelogram-b', 'Parallelogram-h');
    displayCalculation(nameOfGeometry('Parallelogram'), area)
});
// ellipse
document.getElementById('ellipse-calculate').addEventListener('click', function () {
    const area = 3.14 * elementDataCalculation('ellipse-a', 'ellipse-b');
    displayCalculation(nameOfGeometry('ellipse'), area.toFixed(2))
});
// pentagon
document.getElementById('pentagon-calculate').addEventListener('click', function () {
    const area = commonGeometryDataCalculation('pentagon-p', 'pentagon-b');
    displayCalculation(nameOfGeometry('pentagon'), area)
})
// rhombus
document.getElementById('rhombus-calculate').addEventListener('click', function () {
    const area = commonGeometryDataCalculation('rhombus-b1', 'rhombus-b2');
    displayCalculation(nameOfGeometry('rhombus'), area)
})

// different background color

const cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
    const defaultColor = window.getComputedStyle(card).getPropertyValue('background-color');

    card.addEventListener('mouseover', function () {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        card.style.backgroundColor = `#${randomColor}`;
    });
    // default bg color
    // card.addEventListener('mouseout', function () {
    //     card.style.backgroundColor = defaultColor;
    // });
});