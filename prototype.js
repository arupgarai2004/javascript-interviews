// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Add a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
const john = new Person('John', 45);

john.greet();
