"use strict";
var SandwichMaker = (function(maker){
  var cheesePrice = {
    "Cheze": 1.00,
    "Vegan": 2.50,
    "Ah Mehr Ken": 0.50,
    "Stinky Blue": 1.50,
    "Snooty Manchego": 2.00,
    "Cheetos©": 0.50,
  };

  maker.addCheese = function(cheese){
      return cheesePrice[cheese];
    };
    
  return maker;
})(SandwichMaker);