function deepFreeze(object) {
  for (const temp of Object.values(object)) {
    if ((temp && typeof temp === 'object') || typeof temp === 'function') {
      deepFreeze(temp);
    }
  }
  return Object.freeze(object);
}

const person = {
  name: 'John',
  address: {
    street: 'Fable Avenue',
  },
};

deepFreeze(person);
person.address.street = 'Chuckling Lane';
