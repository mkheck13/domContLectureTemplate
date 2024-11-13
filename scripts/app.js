//goal is to create a function that will randomize and apply wicked css styles to the text in the div

let wickedCSS = ['barrelRoll', 'fadeIn', 'floater', 'heartbeat', 'pulse'];

// In JS Math.random() will chose a number between 0 and 1
console.log(Math.random());
// Math.floor will round down to the nearest whole number
console.log(Math.floor(Math.random() *2 ));

// creating a random number from the length of the array
let wickedSelecter = Math.floor(Math.random() * wickedCSS.length);
console.log(wickedSelecter);
console.log(wickedCSS[wickedSelecter]);


let btnChange1 = document.getElementById('btnChange1');

let change1 = document.getElementById('change1');

btnChange1.addEventListener('click', function(event) {
    change1.innerText = 'Hello World';
    change1.className = 'newStyle ' + wickedCSS[wickedSelecter];   
});