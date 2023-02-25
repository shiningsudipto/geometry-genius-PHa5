// serial number
serial = 0;
// geometry name
function nameOfGeometry(geometryId) {
    const nameOfGeometry = document.getElementById(geometryId).innerText;
    return nameOfGeometry;
}
// triangle & rectangle
function inputDataCalculation(x, y) {
    serial += 1;
    const firstInput = document.getElementById(x);
    const secondInput = document.getElementById(y);
    const firstValue = firstInput.value;
    const secondValue = secondInput.value;

    firstInput.value = '';
    secondInput.value = '';

    if (firstValue > 0 && secondValue > 0) {
        const calculate = parseInt(firstValue) * parseInt(secondValue);
        return calculate.toFixed(2);
    } else { }
}
// parallelogram & ellipse
function elementDataCalculation(x, y) {
    serial += 1;
    const parallelogramB = document.getElementById(x).innerText;
    const parallelogramH = document.getElementById(y).innerText;
    const calculate = parseInt(parallelogramB) * parseInt(parallelogramH);
    return calculate;
}
// pentagon & rhombus
function commonGeometryDataCalculation(x, y) {
    serial += 1;
    const parallelogramB = document.getElementById(x).innerText;
    const parallelogramH = document.getElementById(y).innerText;
    const calculate = 0.5 * parseInt(parallelogramB) * parseInt(parallelogramH);
    return calculate;
}


// displaying calculation
function displayCalculation(nameOfGeometry, calculate) {
    const displayData = document.getElementById('display-data');
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>${serial + '.'}</td>
<td><u>${nameOfGeometry}</u></td>
<td>${calculate} cm<sup>2</sup></td>
<td><button class="btn btn-danger normal-case">Convert to m<sup>2</sup></a></button></td>
`
    displayData.appendChild(tr);
}