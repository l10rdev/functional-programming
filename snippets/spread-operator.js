const person1 = { name: 'oliver', address: { street: 'Hofstrasse' } };
const person2 = { ...person1 };

person2.address.street = 'Königsallee';

console.log(person1.address.street);
