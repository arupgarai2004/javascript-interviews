//1 Merge two objects.
function mergeObj(obj1, obj2) {
  const object = { ...obj1, ...obj2 };
  console.log('Object Details =>', object);
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

const addressDetails = {
  street: '52 Stevertesemolen',
  postcode: '5612 DV',
  city: 'Eindhoven',
};
mergeObj(person, addressDetails);

//Next: #2 — Deep clone an object.
const myAddress = structuredClone(addressDetails);
myAddress.street = '50 Luverlaan';

console.log('Deep clone an object=>', addressDetails, myAddress);

//#3 — Serialize and deserialize JSON.
const jsonString = JSON.stringify(person);
console.log('Serialize: Object → JSON string=>', jsonString);

const parsedObject = JSON.parse(jsonString);
console.log('Deserialize: JSON string → Object=>', parsedObject);

//#4 — Deep comparison of two objects
const obj1 = {
  name: 'John',
  address: { city: 'Eindhoven' },
};

const obj2 = {
  name: 'John',
  address: { city: 'Eindhoven' },
};

function deepEqual(obj1, obj2) {
  if (Object.is(obj1, obj2)) return true;
  if (!obj1 || !obj2 || typeof obj1 !== 'object' || typeof obj2 !== 'object')
    return false;

  const keys = Object.keys(obj1);
  return (
    keys.length === Object.keys(obj2).length &&
    keys.every(
      (key) => Object.hasOwn(obj2, key) && deepEqual(obj1[key], obj2[key])
    )
  );
}

console.log('Deep Equal=>', deepEqual(obj1, obj2)); // true

const cars = ['Saab', 'Volvo', 'BMW'];

//#5 — Transform an array into an object?
function arrayToObj(arr1) {
  return arr1.reduce((acc, car) => ({ ...acc, [car]: car }), {});
}
console.log('Transform an array into an object=>', arrayToObj(cars));

//  #6 — Implement classes and inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showDetails() {
    return `I am ${this.name} and I am ${this.age} years old`;
  }
}

class Employee extends Person {
  constructor(name, age, dept) {
    super(name, age);
    this.dept = dept;
  }

  employeeDetails() {
    return `${this.showDetails()}, department is ${this.dept}`;
  }
}

const emp = new Employee('Arup', 40, 'IT');
console.log(emp.employeeDetails());
