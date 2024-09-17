//Brute Approach

function brute(arr, n) {
  for (let i = 1; i <= n; i++) {
    let flag = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      return i;
    }
  }
}

// better: by hashing

function better(arr, n) {
  let hash = Array(n + 1).fill(0);
  for (let i = 0; i < n - 1; i++) {
    hash[arr[i]] = 1;
  }
  for (let i = 1; i < hash.length; i++) {
    if (hash[i] == 0) {
      return i;
    }
  }
}
// optimal1 summation approach
function optimal1(arr, n) {
  let sum = (n * (n + 1)) / 2;
  let arraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }
  return sum - arraySum;
}

//optimal2 :XOR approach
// a ^ a = 0
// a ^ 0 = a
function optimal2(arr, n) {
  let xor1, arrayXOR;
  for (let i = 0; i < n - 1; i++) {
    arrayXOR = arrayXOR ^ arr[i];
    xor1 = xor1 ^ (i + 1);
  }
  xor1 = xor1 ^ n;
  return xor1 ^ arrayXOR;
}

let arr = [1, 2, 3, 4],
  n = 5;
console.log(optimal2(arr, n));
