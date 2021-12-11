var button1 = document.getElementById('click-button1');
var button2 = document.getElementById('click-button2');
var button3 = document.getElementById('click-button3');
var button4 = document.getElementById('click-button4');
var field1 = document.getElementById('nb1');

var test=0;
button1.addEventListener("click", function() {
    test++;
        console.log('Click1');
});

button2.addEventListener("click", function() {
    test++;
        console.log('Click2');
});

button3.addEventListener("click", function() {
    test++;
        console.log('Click3');
});

button4.addEventListener("click", function() {
    test++;
        console.log('Click4');
    field1.value=123
});