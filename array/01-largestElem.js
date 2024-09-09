//Brute
let arr = [3, 2, 1, 5, 4];
function brute(arr) {
  arr.sort();
  return arr[arr.length - 1];
}
// console.log(brute(arr));

//optimal

function optimal(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(optimal(arr));
