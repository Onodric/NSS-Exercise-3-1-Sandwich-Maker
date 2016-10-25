"use strict";
// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var veggieChooser = document.getElementById("veggie");
var condimentChooser = document.getElementById("condiment");
var sammichSoFar = document.getElementById("putPartsHere");
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  sammichSoFar.innerHTML += "<li>" + selectedTopping + " - " + SandwichMaker.addBread(selectedTopping).toFixed(2) + "</li>";
  // Determine the price of the topping chosen
  finalSandwichPrice += SandwichMaker.addBread(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  sammichSoFar.innerHTML += "<li>" + selectedTopping + " - " + SandwichMaker.addMeat(selectedTopping).toFixed(2) + "</li>";
  // Determine the price of the topping chosen
  finalSandwichPrice += SandwichMaker.addMeat(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
});

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  sammichSoFar.innerHTML += "<li>" + selectedTopping + " - " + SandwichMaker.addCheese(selectedTopping).toFixed(2) + "</li>";
  // Determine the price of the topping chosen
  finalSandwichPrice += SandwichMaker.addCheese(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
});

veggieChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  sammichSoFar.innerHTML += "<li>" + selectedTopping + " - " + SandwichMaker.addVeggie(selectedTopping).toFixed(2) + "</li>";
  // Determine the price of the topping chosen
  finalSandwichPrice += SandwichMaker.addVeggie(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
});

condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  sammichSoFar.innerHTML += "<li>" + selectedTopping + " - " + SandwichMaker.addCondiment(selectedTopping).toFixed(2) + "</li>";
  // Determine the price of the topping chosen
  finalSandwichPrice += SandwichMaker.addCondiment(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
});

document.getElementById("total").addEventListener("click", function(){
  document.getElementById("finalPrice").innerHTML = '$ ' + finalSandwichPrice.toFixed(2);
};