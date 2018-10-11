'use strict';
const arithmetic = require('../lib/arithmetic.js');

//faker to use random inputs for variables.//
var faker = require('faker');
let a = faker.random.number();
let b = faker.random.number();

describe('arithmetic', () => {

  //test add for arithmetic//
  it('adds two numbers', () => {
    let message = arithmetic.add(a,b);
    expect(message).toEqual(a+b);
  });

  //test for input to be only numbers
  it('makes sure only numbers are input', () => {
    let message = arithmetic.add(a, 'string');
    expect(message).toBeNull();
  });

  //test subtraction for arithmetic//
  it('will subtract a number', () => {
    let message = arithmetic.subtract(a,b);
    expect(message).toEqual(a-b);
  });

  //test to make sure only numbers get subtracted//
  it('only uses numbers to subtract', () => {
    let message = arithmetic.subtract('string', b);
    expect(message).toBeNull();
  });

  // test to make sure numbers get multiplied//
  it('tests that two numbers get multiplied', () => {
    let message = arithmetic.multiply(a,b);
    expect(message).toEqual(a*b);
  });

  // test to make sure only numbers get multiplied//
  it('only uses numbers to multiply', () => {
    let message = arithmetic.multiply('4',b);
    expect(message).toBeNull();
  });

  // test to make sure numbers get devided//
  it('devides two numbers', () => {
    if(b === 0) b = 2;
    let message = arithmetic.devide(a,b);
    expect(message).toEqual(a/b);
  });

  //test to make sure only numbers are devided//
  it('only devides numbers', () => {
    let message = arithmetic.devide(a,'2');
    expect(message).toBeNull();
  });

  //test to make sure use is not deviding by 0//
  it('make sure second number is not 0', () =>{
    let message = arithmetic.devide(a, 0);
    expect(message).toBeNull();
  });
});