const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};


const person2 = person1;

person2.firstName = "Simon";


// person2 assume il reference di person1, quindi accedendo agli elementi di person2 modifichiamo gli elementi di person1.


// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);


