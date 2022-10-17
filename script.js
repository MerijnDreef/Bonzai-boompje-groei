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

leafsAmount.addEventListener("keydown", function (e) {
   if (!/^([0-9]*)$/gm.test(e.key))
      e.preventDefault();
});

/*
for showing and hiding the pokon input
*/
function pokonInputVisibility() {
   if (pokonDiv.style.display == "none") {
      pokonDiv.style.display = "block";
   } else {
      pokonDiv.style.display = "none";
   }
}

/*
for displaying the days at the slider
*/
function daysCount() {
   daysLabel.innerText = "Dagen " + "(" + daysAmount.value + ")";
}

/*
to start the calculation when the button "Calculate" has been pressed
*/
function calcDays() {
   if (resultTotal[0].children.length >= 1) {
      while (resultTotal[0].children.length > 0) {
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
   var waterPokonTotal = pokonTotal;
   var waterInitialAmount = initialAmount;

   /*
   checks if there is pokon available 
   when pokon is available it increases growth
   if not available it will grow with normal amounts
   */
   if (pokonCheckbox.checked == true && pokonTotal >= 0.3) {
      var addUp = leafsAmount.value / 100 * 6;
      pokonTotal = pokonTotal - 0.3;
   } else {
      var addUp = leafsAmount.value / 100 * 4;
   }

   /*
   starts the loop when more than 1 day is selected 
   */
   for (var i = 0; i < daysCount; i++) {
      var growthResult = addUp;

      /*
      will check if the growth is bigger than 200
      if it is bigger than 200 it will cut 8% of the growth
      */
      if (addUp >= 200) {
         cutCount = addUp / 100 * 8;
         addUp = addUp - cutCount;
      }

      addUp = Math.ceil(addUp);
      cutCount = Math.ceil(cutCount);
      growthResult = Math.ceil(growthResult);
      initialAmount = initialAmount + addUp;

      /*
      it will check if active watering (when the checkbox isn't checked) or passive watering (when the checkbox is checked)
      passive watering will note down a large amount of water on the first day of the week and will wait until the start of the next week
      active watering will note down the amount of water per day
      */
      if (waterCheckbox.checked == true && passiveWaterCounter == 1) {

         for (var y = 0; y < 7; y++) {
            if (pokonCheckbox.checked == true && waterPokonTotal != 0.3) {
               waterAddUp = waterInitialAmount / 100 * 6;
               waterPokonTotal = waterPokonTotal - 0.3;
            } else {
               waterAddUp = waterInitialAmount / 100 * 4;
            }

            if (waterAddUp >= 200) {
               waterAddUp = waterAddUp - waterAddUp / 100 * 8;
            }

            waterAddUp = Math.ceil(waterAddUp);
            waterInitialAmount = waterInitialAmount + waterAddUp;
            waterTotal = waterInitialAmount * 0.005 + waterTotal;
         }

         waterResult = waterTotal;

      } else if (waterCheckbox.checked == false) {
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

      /*
      this is to keep the pokon loop going until
      */
      if (pokonCheckbox.checked == true && pokonTotal >= 0.3) {
         addUp = initialAmount / 100 * 6;
         pokonTotal = pokonTotal - 0.3;
      } else {
         addUp = initialAmount / 100 * 4;
      }

      daysCurrent++;

      /*
      will count if the week is over or not
      */
      if (passiveWaterCounter == 7) {
         passiveWaterCounter = 1;
         waterTotal = 0;
      } else {
         passiveWaterCounter++;
      }
   }
}
