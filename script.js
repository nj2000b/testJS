var button1 = document.getElementById('click-button1');
var button2 = document.getElementById('click-button2');
var button3 = document.getElementById('click-button3');
var button4 = document.getElementById('click-button4');


var test=0;
button1.addEventListener("click", function() {
    //var MI = document.getElementById('nb1').value;
    var INTERET = document.getElementById('nb2').value;
    var DUREE = document.getElementById('nb3').value;
    var MFINAL = document.getElementById('nb4').value;
    document.getElementById('nb1').value=(MFINAL/Math.pow(1+INTERET/100,DUREE)).toFixed(2);
    document.getElementById('nb1').style.backgroundColor="lightgreen";
    document.getElementById('nb2').style.backgroundColor="white";
    document.getElementById('nb3').style.backgroundColor="white";
    document.getElementById('nb4').style.backgroundColor="white";
    
});

button2.addEventListener("click", function() {
      var MI = document.getElementById('nb1').value;
      //var INTERET = document.getElementById('nb2').value;
      var DUREE = document.getElementById('nb3').value;
      var MFINAL = document.getElementById('nb4').value;
      document.getElementById('nb2').value=((Math.pow(MFINAL/MI,1/DUREE)-1)*100).toFixed(2);
      document.getElementById('nb1').style.backgroundColor="white";
      document.getElementById('nb2').style.backgroundColor="lightgreen";
      document.getElementById('nb3').style.backgroundColor="white";
      document.getElementById('nb4').style.backgroundColor="white";
});

button3.addEventListener("click", function() {
      var MI = document.getElementById('nb1').value;
      var INTERET = document.getElementById('nb2').value;
      //var DUREE = document.getElementById('nb3').value;
      var MFINAL = document.getElementById('nb4').value;
      document.getElementById('nb3').value=(Math.log(MFINAL/MI)/Math.log(1+INTERET/100)).toFixed(2);
      document.getElementById('nb1').style.backgroundColor="white";
      document.getElementById('nb2').style.backgroundColor="white";
      document.getElementById('nb3').style.backgroundColor="lightgreen";
      document.getElementById('nb4').style.backgroundColor="white";
});

button4.addEventListener("click", function() {
      var MI = document.getElementById('nb1').value;
      var INTERET = document.getElementById('nb2').value;
      var DUREE = document.getElementById('nb3').value;
      //var MFINAL = document.getElementById('nb4').value;
      document.getElementById('nb4').value=(MI*Math.pow(1+INTERET/100,DUREE)).toFixed(2);
      document.getElementById('nb1').style.backgroundColor="white";
      document.getElementById('nb2').style.backgroundColor="white";
      document.getElementById('nb3').style.backgroundColor="white";
      document.getElementById('nb4').style.backgroundColor="lightgreen";
});