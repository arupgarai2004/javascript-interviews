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
// 7 roated array
function rotateArray(arr, k) {
  const n = arr.length;
  if (n === 0) {
    return [];
  }
  k = k % n;
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

console.log('Rotated Araay=>', rotateArray(arr1, 2));
// 8 Find the largest contiguous subarray sum.
const arrayEx = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function subArraySum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;

    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}
console.log('sum of array values=>', subArraySum(arrayEx));
// 9 Check if an array is a palindrome.
function palindromeArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const pArray = [6, 1, 2, 3, 2, 1, 6];
console.log('Array is palindrome or not ', palindromeArray(pArray));
//10 Shuffle an array.
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

const sArr = [1, 2, 3, 4, 5];

console.log('Shuffle Array:', shuffleArray(sArr));
