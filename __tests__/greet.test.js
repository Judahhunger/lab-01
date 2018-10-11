'use strict';
const greet = require('../lib/greet.js');

//faker to get random sting for names.//
var faker = require('faker');
let personName = faker.name.firstName();

describe('greet', () => {
  // hello world test to make sure it works.//
  it('takes in world and returns "hello world"', () => {
    let message = greet.hello('world');
    expect(message).toEqual('hello world');
  });

  //test to make sure hello is infront of greeting.//
  it('takes in a any string and concatenates hello infront of it.', () => {
    let message = greet.hello(personName);
    expect(message).toBe('hello ' + personName);
  });

  //tests to make sure that only strings are accepted.//
  it('does not accept non strings', () => {
    expect(greet.hello('')).toBeNull;
    expect(greet.hello(5)).toBeNull;
    expect(greet.hello(true)).toBeNull;
    expect(greet.hello(['name'])).toBeNull;
    expect(greet.hello({})).toBeNull;
  });


});
