import './prototype.js';
import './callBindApply.js';
const person1 = [
  { firstname: 'Rohit', lastname: 'Sharma' },
  { firstname: 'Sachin', lastname: 'Tendulkar' },
  { firstname: 'Virat', lastname: 'Koholi' },
  { firstname: 'Rahul', lastname: 'Dravid' },
];

const OutMap = person1.map((item) => [item.firstname, item.lastname].join(' '));

console.log(OutMap);

const OutFilter = person1
  .filter((item) => item.firstname == 'Rahul')
  .map((item) => [item.firstname, item.lastname].join(' '));

console.log(OutFilter);

const numbers = [5, 6, 7, 9, 17, 19, 34];

console.log(numbers.map((i) => i * 5));
console.log(numbers.filter((i) => i % 3));
console.log(
  numbers.reduce((max, cur) => {
    if (cur > max) {
      max = cur;
    }
    return max;
  }, 0)
);

/// Curried version of the
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(2)(3)(6));
const total = curryAdd(2)(3);
console.log(total(9));
