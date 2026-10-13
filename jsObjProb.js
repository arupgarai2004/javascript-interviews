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
