var leafsAmount = document.getElementById("leafs");
var daysAmount = document.getElementById("days");
var calculate = document.getElementById("calculate");
var growthTotal = document.getElementById("growth");
var cutTotal = document.getElementById("cut");

calculate.setAttribute('onclick', 'calcDays()');
// calculate.onclick = function(){calcDays(leafsAmount, daysAmount);};


function calcDays() {
   var daysCount = daysAmount.value * 1;
   var cutCount = 0;
   console.log(daysCount);
   var initialAmount = 1 * leafsAmount.value;
   initialAmount = Math.floor(initialAmount);
   var addUp = leafsAmount.value / 100 * 4;
   console.log(initialAmount);
   // console.log(addUp);
   var bonzaiSize = initialAmount += addUp;
   console.log("pre vibe check");
   for (var i = 1; i < daysCount; i++) {
      console.log("post vibe check");
      console.log(initialAmount);
      if (addUp >= 200) {

         addUp = addUp / 100 * 8;

         // cutCount = 
         console.log("You have failed the vibe check");
      }
      console.log(addUp);
      addUp = Math.ceil(addUp);
      console.log(addUp);
      bonzaiSize = initialAmount += addUp;
      initialAmount = bonzaiSize;
      addUp = initialAmount / 100 * 4;
      console.log(initialAmount);
      console.log(addUp);
      // console.log(Counter);
   }
   // daysAmount = 0;
   console.log("the end");
   growthTotal.innerText = bonzaiSize;
   // growthTotal.appendChild(growthTotal);
   console.log(bonzaiSize);
}
