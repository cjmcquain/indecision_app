var nameVar = 'Charles';
var nameVar = 'McQuain';
console.log('nameVar', nameVar);

let nameLet = 'Bob';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'William';
console.log('nameCost', nameConst);

// Block Scoping
var fullName = 'Charles McQuain';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);