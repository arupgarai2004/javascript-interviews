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

//4 Remove duplicates from an array.
const arrayNew = [2, 3, 4, 6, 5, 6, 7, 9, 2, 4, 6, 7, 8];
const removeDuplicate = arrayNew.filter(
  (item, index) => arrayNew.indexOf(item) === index
);
console.log('Remove duplicate value=>', removeDuplicate);

const removeDuplicateSet = [...new Set(arrayNew)];

console.log(removeDuplicateSet);

// 5 sorted array using loop
const customSort = [1, 3, 4, 6, 35, 7, 8, 10];

for (let i = 0; i < customSort.length - 1; i++) {
  for (let j = 0; j < customSort.length - 1 - i; j++) {
    if (customSort[j] > customSort[j + 1]) {
      [customSort[j], customSort[j + 1]] = [customSort[j + 1], customSort[j]];
    }
  }
}

console.log('Sorted array:', customSort);

// 6 — Find the intersection of two arrays
function intersection(arr1, arr2) {
  const interSecResult = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      interSecResult.push(arr1[i]);
    }
  }

  return interSecResult.filter(
    (item, index) => interSecResult.indexOf(item) === index
  );
}
const arr1 = [1, 2, 3, 4, 3, 5];
const arr2 = [3, 4, 5, 6, 7];
console.log('intersection of two arrays=>', intersection(arr1, arr2));
