'use strict';

var nameVar = 'Charles';
var nameVar = 'McQuain';
console.log('nameVar', nameVar);

var nameLet = 'Bob';
nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'William';
console.log('nameCost', nameConst);

// Block Scoping
var fullName = 'Charles McQuain';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
