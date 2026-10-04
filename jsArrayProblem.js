//Reverse an array.

const arr = [1, 3, 4, 6, 7, 8];
var newArray = [];

for (var i = arr.length - 1; i >= 0; i--) {
  newArray.push(arr[i]);
}
console.log('Reverse an array.=>', newArray);
