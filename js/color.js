// ===== color change

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let btn = document.querySelector('#btn');
let color = document.querySelector('.color')

btn.addEventListener('click', function () {
    let hexColor = '#'
    for (var x = 0; x < 6; x++) {
        hexColor = hexColor + hex[randomColor()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

})

function randomColor() {
    return Math.floor(Math.random() * hex.length)
}