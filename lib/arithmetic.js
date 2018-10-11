'use strict';

let arithmetic = module.exports = {};


arithmetic.add = function(...arr) {
  let total = 0;
  for(var i = 0; i < arr.length; i++ ){
    if(typeof arr[i] !== 'number'){ return null; }
    total = arr[i] + total;
  }
  return total;
};  

arithmetic.subtract = function (...arr) {
  let subtotal;
  for(var i = 0; i < arr.length; i++ ){
    if( typeof arr[i] !== 'number') { return null; }
    subtotal = arr[0] - arr[i];
  }
  return subtotal;
};

arithmetic.multiply = function (...arr) {
  let total = 1;
  for(var i = 0; i < arr.length; i++){
    if( typeof arr[i] !== 'number'){return null; }
    total = total * arr[i];
  }
  return total;
};

arithmetic.devide = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' || b === 0 ){return null; }
  return a/b;
};
