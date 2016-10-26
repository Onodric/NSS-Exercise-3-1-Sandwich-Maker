"use strict";
/*jshint -W079 */
var SandwichMaker = (function(maker){
  var breadPrice = {
    "Low-Carb": 1.00,
    "Artisan Causasus": 0.50,
    "Black Russion Spud": 1.00,
    "French Baguette": 1.50,
    "Artisan 17-seed Whole Grain": 1.00,
    "Cheetos© Krusty Roll™": 1.50,
  };

    maker.addBread = function(bread){
      return breadPrice[bread];
    };
    maker.getBreads = function(){
      return breadPrice;
    };
  
  return maker;
})(SandwichMaker || {});
