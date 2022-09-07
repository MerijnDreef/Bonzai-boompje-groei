var leafsAmount = document.getElementById("leafs");
var daysAmount = document.getElementById("days");
var calculate = document.getElementById("calculate")

calculate.onclick = function(){calcDays(leafsAmount, daysAmount);};

function calcDays(leafsCount, daysCount) {
   var bonzaiSize = leafsCount + (leafsCount / 100 * 4);
   console.log(bonzaiSize);
}
