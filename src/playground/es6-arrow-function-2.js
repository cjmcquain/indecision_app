const add = (a, b) => {
  return a + b;
};
console.log(add(55, 1));

const user = {
  name: 'Charles',
  cities: ['New York', 'Los Angeles', 'Dublin'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
      return this.name + ' has lived in ' + city;
    });
    return cityMessages;
  }
};

console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());