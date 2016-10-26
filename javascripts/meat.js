"use strict";
/*jshint -W079 */
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
// Private variable to store the different meat prices
  var meatPrice = {
    "Bacon": 1.50,
    "Moar Bacon": 2.50,
    "Turkey": 1.50,
    "Chicken": 1.50,
    "Pastrami": 1.50,
    "Tofurkey": 2.00,
  };

// Augment the original object with another method
  maker.addMeat = function(meat){
    return meatPrice[meat];
  };
  maker.getMeats = function(){
      return meatPrice;
    };

// Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});