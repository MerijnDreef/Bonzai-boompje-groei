var leafsAmount = document.getElementById("leafs");
var daysAmount = document.getElementById("days");
var calculate = document.getElementById("calculate").onclick = calcDays(leafsAmount, daysAmount);

// calculate.onclick = calcDays(leafsAmount, daysAmount);
calculate.onclick = console.log("ik hoor gedrukt te worden");

function calcDays(leafsCount, daysCount) {
   var bonzaiSize = leafsCount + (leafsCount / 100 * 4);
   console.log(bonzaiSize);
}
