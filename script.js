var leafsAmount = document.getElementById("leafs");
var daysAmount = document.getElementById("days");
var calculate = document.getElementById("calculate")
calculate.setAttribute('onclick', 'calcDays()');
// calculate.onclick = function(){calcDays(leafsAmount, daysAmount);};
var initialAmount = leafsAmount.value;

function calcDays() {
   console.log(initialAmount)
   var addUp = leafsAmount.value/100*4;
   var bonzaiSize = initialAmount+=addUp;
   // daysAmount = 0;
   console.log(bonzaiSize);
}
