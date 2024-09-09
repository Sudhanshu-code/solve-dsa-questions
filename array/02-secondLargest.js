let arr = [3, 2, 6, 9, 1];

//brute --> TC: O(nlogn)+ O(n)-->O(n+nlogn)
function brute(arr) {
  arr.sort();
  let largest = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < largest) {
      return arr[i];
    }
  }
  return -1;
}
// console.log(brute(arr));

//better -- TC: O(n+n)-> O(2n)
function better(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
// console.log(better(arr));

//optimal --TC: O(n)
function optimal(arr) {
  let largest = arr[0];
  let slargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      slargest = largest;
      largest = arr[i];
    }
    if (arr[i] < largest && arr[i] > slargest) {
      slargest = arr[i];
    }
  }
  return slargest;
}
console.log(optimal(arr));
