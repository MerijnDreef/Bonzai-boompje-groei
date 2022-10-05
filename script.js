var leafsAmount = document.getElementById("leafs");
var daysAmount = document.getElementById("days");
var calculate = document.getElementById("calculate");
var growthTotal = document.getElementById("growth");
var cutTotal = document.getElementById("cut");
var daysLabel = document.getElementById("daysLabel");
var resultTotal = document.getElementsByClassName("result");
var pokonCheckbox = document.getElementById("pokonCheckbox");
var pokonDiv = document.getElementById("pokonInputZone");
var pokonInput = document.getElementById("pokonInput");

calculate.setAttribute('onclick', 'calcDays()');
daysAmount.setAttribute('onchange', 'daysCount()');
pokonCheckbox.setAttribute('onchange', 'pokonInputVisibility()');
calculate.style.marginTop = "10px";
pokonDiv.style.display = "none";

function pokonInputVisibility() {
   if (pokonDiv.style.display == "none") {
      pokonDiv.style.display = "block";
   } else {
      pokonDiv.style.display = "none";
   }
}

function daysCount() {
   daysLabel.innerText = "Dagen " + "(" + daysAmount.value + ")";
}

function calcDays() {
   // console.log(resultTotal);
   // console.log(resultTotal[0].childElementCount);
   if (resultTotal[0].childElementCount >= 1) {
      while (resultTotal[0].childElementCount > 0) {
         resultTotal[0].firstChild.remove();
      }
   }
   console.log("still doing the thing");
   var daysCurrent = 1;
   var daysCount = daysAmount.value * 1;
   var cutCount = 0;
   var initialAmount = 1 * leafsAmount.value;
   initialAmount = Math.ceil(initialAmount);
   var addUp = leafsAmount.value / 100 * 4;
   var bonzaiSize = 0;
   console.log("pre vibe check");

   for (var i = 0; i < daysCount; i++) {
      console.log("post vibe check");
      var growthResult = addUp;

      if (addUp >= 200) {
         cutCount = addUp / 100 * 8;
         console.log("cutCount done");

         addUp = addUp - addUp / 100 * 8;

         console.log("You have failed the vibe check");
      }
      addUp = Math.ceil(addUp);
      cutCount = Math.ceil(cutCount);
      growthResult = Math.ceil(growthResult);
      bonzaiSize = initialAmount += addUp;

      var div = document.createElement('div');
      var day = document.createElement('h3');
      var totalAmount = document.createElement('p');
      var totalGrow = document.createElement('p');
      var totalCut = document.createElement('p');

      day.innerText = "Dag " + daysCurrent;
      totalAmount.innerText = "Totaal aantal blaadjes: " + bonzaiSize;
      totalGrow.innerText = "Totaal aantal gegroeid: " + growthResult;
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
