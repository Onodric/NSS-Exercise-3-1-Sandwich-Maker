"use strict";
var SandwichMaker = (function(maker){
  var condimentPrice = {
    "Katsup": 0.10,
    "Mustard": 0.10,
    "Dijon": 0.20,
    "Mayo": 0.50,
    "Relish": 0.20,
    "Oil and Vinegar": 0.10,
    "Spices": 0.20,
  };
  maker.addCondiment = function(condiment){
    return condimentPrice[condiment];
  };
  return maker;
})(SandwichMaker);