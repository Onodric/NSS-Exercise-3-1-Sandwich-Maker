"use strict";
/*jshint -W079 */
var SandwichMaker = (function(maker){
  var veggiePrice = {
    "Onions": 0.25,
    "Green Peppers": 0.50,
    "Spinach": 0.50,
    "Lettuce": 0.50,
    "Olives": 1.00,
    "Tomatoes": 1.50,
  };
  maker.addVeggie = function(veggie){
      return veggiePrice[veggie];
  };
  maker.getVeggies = function(){
      return veggiePrice;
    };

  return maker;
})(SandwichMaker || {});