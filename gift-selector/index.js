document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
 
 // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
 // 2. Display the total cost in the cost-el span.

function calculate() {
   const selectFoodCost = parseInt(document.getElementById("food-select").value);
   const selectTransportCost = parseInt(document.getElementById("transport-select").value);
   const balloonAddOn = document.getElementById("balloon-checkbox").checked;

   let cost = selectFoodCost + selectTransportCost;

   if (balloonAddOn) {
    cost += 10
    }
    costEl.textContent = `$${cost}`;
}   