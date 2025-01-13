import users from '../data/users.js';

function filterUsers0ver18(users) {
  return users.filter((user) => user.age >= 18);
}

function filterFemale(users) {
  return users.filter((user) => user.sex === 'f');
}

function calculateAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

function compose(...fns) {
  return function (input) {
    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, input);
  };
}

const getAverageAgeOfFemaleAdults = compose(
  filterFemale,
  filterUsers0ver18,
  calculateAverageAge,
);

console.log(getAverageAgeOfFemaleAdults(users));
