"use strict";
var SelectPopulate = (function(){
  var breadDOM = document.getElementById("bread");
  var meatDOM = document.getElementById("meat");
  var cheeseDOM = document.getElementById("cheese");
  var veggieDOM = document.getElementById("veggie");
  var condDOM = document.getElementById("condiment");
// get each ingredient class' members in an array
// loop through that bitch
  // add member to correct select list

  return {
    "populateBread": function(){
        breadDOM.innerHTML = '<option value="null" selected disabled>Breads</option>';
      Object.keys(SandwichMaker.getBreads()).forEach(function(item){
        breadDOM.innerHTML += '<option value="' + item + '">' + item + ' - $' + SandwichMaker.getBreads()[item].toFixed(2) + '</option>';
      });
    },
    "populateMeat": function(){
        meatDOM.innerHTML = '<option value="null" selected disabled>Meats</option>';
      Object.keys(SandwichMaker.getMeats()).forEach(function(item){
        meatDOM.innerHTML += '<option value="' + item + '">' + item + ' - $' + SandwichMaker.getMeats()[item].toFixed(2) + '</option>';
      });
    },
    "populateCheese": function(){
        cheeseDOM.innerHTML = '<option value="null" selected disabled>Cheeses</option>';
      Object.keys(SandwichMaker.getCheeses()).forEach(function(item){
        cheeseDOM.innerHTML += '<option value="' + item + '">' + item + ' - $' + SandwichMaker.getCheeses()[item].toFixed(2) + '</option>';
      });
    },
    "populateVeggie": function(){
        veggieDOM.innerHTML = '<option value="null" selected disabled>Veggies</option>';
      Object.keys(SandwichMaker.getVeggies()).forEach(function(item){
        veggieDOM.innerHTML += '<option value="' + item + '">' + item + ' - $' + SandwichMaker.getVeggies()[item].toFixed(2) + '</option>';
      });
    },
    "populateCondi": function(){
        condDOM.innerHTML = '<option value="null" selected disabled>Condiments</option>';
      Object.keys(SandwichMaker.getCondiments()).forEach(function(item){
        condDOM.innerHTML += '<option value="' + item + '">' + item + ' - $' + SandwichMaker.getCondiments()[item].toFixed(2) + '</option>';
      });
    }
  };

})();