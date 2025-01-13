const person = {
  name: 'John',
  address: {
    street: 'Fable Avenue',
  },
};

Object.freeze(person);
person.address.street = 'Chuckling Lane';
console.log(person.address.street);
