// 1. Reverse an array.

const arr = [1, 3, 4, 6, 35, 7, 8, 10];
var newArray = [];

for (var i = arr.length - 1; i >= 0; i--) {
  newArray.push(arr[i]);
}
console.log('Reverse an array.=>', newArray);

// 2. Find the maximum number in an array.

const maxNumber = arr.reduce((max, cur) => {
  return cur > max ? cur : max;
}, arr[0]);

console.log('Maximum number =>', maxNumber);

// using function const maxNumber = Math.max(...arr);
// using loop
let maxNumberLopp = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNumberLopp) {
    maxNumberLopp = arr[i];
  }
}

console.log('Maximum number using loop =>', maxNumberLopp);

// 3. Calculate the sum of an array.
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log('Sum of array using loop=>', sum);

const total = arr.reduce((cur, sum) => {
  sum = sum + cur;
  return sum;
}, 0);
console.log('Sum of array using reduce=>', total);
