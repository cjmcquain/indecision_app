/*
const square = function (x) {
  return x * x;
};


    const squareArrow = (x) => {
      return x * x;
    };

const squareArrow = (x) => x * x;
console.log(squareArrow(3));
*/
const fullName = 'Charles McQuain';
let firstName;

const getFirstName = () => {
  return fullName.split(' ')[0];
};

const getFirstNameTwo = () => fullName.split(' ')[0];

console.log(getFirstName());
console.log(getFirstNameTwo());