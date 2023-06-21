const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const filteredPerson = {
  id: person.id,
  age: person.age
};

const filteredJson= JSON.stringify(filteredPerson);
const json = JSON.stringify(person);

console.log(filteredJson); // Should return: { id: 1, age: 25 }