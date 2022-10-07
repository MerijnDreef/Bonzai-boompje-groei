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
var waterCheckbox = document.getElementById("water");

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
   if (resultTotal[0].children.length >= 1) {
      while (resultTotal[0].children.length > 0) {
         console.log(resultTotal[0].children.length);
         resultTotal[0].firstChild.remove();
      }
   }

   var pokonTotal = pokonInput.value;
   pokonTotal = pokonTotal * 1;
   var daysCurrent = 1;
   var daysCount = daysAmount.value * 1;
   var cutCount = 0;
   var initialAmount = 1 * leafsAmount.value;
   initialAmount = Math.ceil(initialAmount);
   var passiveWaterCounter = 1;
   var waterResult = 0;
   var waterTotal = 0;
   var waterAddUp = 0;

   if (pokonCheckbox.checked == true && pokonTotal >= 0.3) {
      var addUp = leafsAmount.value / 100 * 6;
      pokonTotal = pokonTotal - 0.3;
   } else {
      var addUp = leafsAmount.value / 100 * 4;
   }

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
      initialAmount = initialAmount += addUp;

      if (waterCheckbox.checked == true && passiveWaterCounter == 1) {
         console.log("passive watering");
         // waterResult = 7;
         var waterPokonTotal = pokonTotal;
         var waterInitialAmount = initialAmount;

         for (var y = 0; y < 7; y++) {
            if (pokonCheckbox.checked == true && waterPokonTotal != 0.3) {
               // grab initial amount and add up each time it is true
               waterAddUp = waterInitialAmount / 100 * 6;
               waterPokonTotal = waterPokonTotal - 0.3;
            } else {
               // normal amount add up
               waterAddUp = waterInitialAmount / 100 * 4;
            }
            waterInitialAmount = waterInitialAmount + waterAddUp;
            // waterTotal = waterInitialAmount * 0.005;
            waterTotal = waterTotal + waterInitialAmount * 0.005;
            console.log(waterTotal + " ML");

         }
         waterResult = waterTotal;
         console.log(waterTotal + " ML");
      } else if (waterCheckbox.checked == false) {
         console.log("active watering");
         // waterResult = 1;
         waterResult = initialAmount * 0.005;
      } else {
         waterResult = 0;
      }

      var div = document.createElement('div');
      var day = document.createElement('h3');
      var totalAmount = document.createElement('p');
      var totalGrow = document.createElement('p');
      var totalCut = document.createElement('p');
      var totalWater = document.createElement('p');

      day.innerText = "Dag " + daysCurrent;
      totalAmount.innerText = "Totaal aantal blaadjes: " + initialAmount;
      totalGrow.innerText = "Totaal aantal gegroeid: " + growthResult;
      totalCut.innerText = "Totaal aantal geknipt: " + cutCount;
      totalWater.innerText = "Te wateren: " + waterResult + " Ml";

      div.style.border = "black solid 3px";
      div.style.marginBottom = "10px";
      div.style.paddingLeft = "10px";

      div.appendChild(day);
      div.appendChild(totalAmount);
      div.appendChild(totalGrow);
      div.appendChild(totalCut);
      div.appendChild(totalWater);
      resultTotal[0].appendChild(div);

      if (pokonCheckbox.checked == true && pokonTotal >= 0.3) {
         addUp = initialAmount / 100 * 6;
         pokonTotal = pokonTotal - 0.3;
      } else {
         addUp = initialAmount / 100 * 4;
      }

      daysCurrent++;
      if (passiveWaterCounter == 7) {
         passiveWaterCounter = 1;
      } else {
         passiveWaterCounter++;
      }
   }
   console.log("the end");
}
