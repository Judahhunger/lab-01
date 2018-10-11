'use strict';

let greet = module.exports = {};

//takes in a string and returns hello concatenated infront of it. event though only one case used switch statment//
greet.hello = function(person){
  switch(typeof person){
  case 'string':
    return `hello ${person}`;
  default:
    return null;
  }
};