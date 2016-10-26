"use strict";
/*jshint -W079 */
var SandwichMaker = (function(maker) {
// Private variable to store the price
  var totalPrice = 0;

  maker.addTopping = function(toppingPrice) {
      totalPrice += toppingPrice;
    };
  maker.getTotalPrice = function(){
    return totalPrice;
  };
// Return the public interface that other code can interact with
  return maker;
  
})(SandwichMaker || {});
