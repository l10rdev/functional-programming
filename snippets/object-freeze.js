const person = {
  name: 'John',
};

Object.freeze(person);
person.name = 'Jack';
