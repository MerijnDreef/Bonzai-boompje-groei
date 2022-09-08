var leafsAmount = document.getElementById("leafs");
var daysAmount = document.getElementById("days");
var calculate = document.getElementById("calculate")
calculate.setAttribute('onclick', 'calcDays()');
// calculate.onclick = function(){calcDays(leafsAmount, daysAmount);};

function calcDays() {
   var daysCount = daysAmount.value * 1;
   console.log(daysCount);
   var initialAmount = 1 * leafsAmount.value;
   var addUp = leafsAmount.value / 100 * 4;
   // console.log(initialAmount);
   // console.log(addUp);
   var bonzaiSize = initialAmount += addUp;
   console.log("pre vibe check");
   for (var i = 0; i < daysCount; i++) {
      console.log("post vibe check");
      console.log(initialAmount);
      if (addUp >= 200) {
         addUp = addUp / 100 * 8;
         console.log("You have failed the vibe check");
      }
      console.log(addUp);
      Math.round(addUp);
      bonzaiSize = initialAmount += addUp;
      initialAmount = bonzaiSize;
      addUp = initialAmount / 100 * 4;
      console.log(initialAmount);
      console.log(addUp);
   }
   // daysAmount = 0;
   console.log("the end")
   console.log(bonzaiSize);
}
