var leafsAmount = document.getElementById("leafs");
var daysAmount = document.getElementById("days");
var calculate = document.getElementById("calculate");
var growthTotal = document.getElementById("growth");
var cutTotal = document.getElementById("cut");
var daysLabel = document.getElementById("daysLabel");
var resultTotal = document.getElementsByClassName("result");

calculate.setAttribute('onclick', 'calcDays()');
daysAmount.setAttribute('onchange', 'daysCount()');

function daysCount() {
   daysLabel.innerText = "Dagen " + "(" + daysAmount.value + ")";
}

function calcDays() {
   var daysCurrent = 1;
   var daysCount = daysAmount.value * 1;
   var cutCount = 0;
   var initialAmount = 1 * leafsAmount.value;
   initialAmount = Math.floor(initialAmount);
   var addUp = leafsAmount.value / 100 * 4;
   var bonzaiSize = 0;
   console.log("pre vibe check");

   for (var i = 0; i < daysCount; i++) {
      console.log("post vibe check");
      if (addUp >= 200) {
         cutCount = addUp / 100 * 8;
         console.log("cutCount done");

         addUp = addUp - addUp / 100 * 8;

         console.log("You have failed the vibe check");
      }
      addUp = Math.ceil(addUp);
      cutCount = Math.round(cutCount);
      bonzaiSize = initialAmount += addUp;

      var div = document.createElement('div');
      var day = document.createElement('h3');
      var totalAmount = document.createElement('p');
      var totalGrow = document.createElement('p');
      var totalCut = document.createElement('p');

      day.innerText = "Dag " + daysCurrent;
      totalAmount.innerText = "Totaal aantal blaadjes: " + bonzaiSize;
      totalGrow.innerText = "Totaal aantal gegroeid: " + addUp;
      totalCut.innerText = "Totaal aantal geknipt: " + cutCount

      div.style.border = "black solid 3px";
      div.style.marginBottom = "10px";
      div.style.paddingLeft = "10px";

      div.appendChild(day);
      div.appendChild(totalAmount);
      div.appendChild(totalGrow);
      div.appendChild(totalCut);
      resultTotal[0].appendChild(div);

      initialAmount = bonzaiSize;
      addUp = initialAmount / 100 * 4;
      daysCurrent++;
   }
   console.log("the end");
}
