function leftRotateByOne(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
}

// leftRotateByOne(arr);

//Brute using temp array with extra space O(d%n)
//TC: O(d) + O(n - d) + O(d)=O(n + d)
function leftRotateByDplace(arr, d, n = arr.length) {
  d = d % n;
  let temp = [];
  // TC: O(d)
  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }
  //TC: O(n-d)
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  //TC:O(d)
  for (let i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }
}
// leftRotateByDplace(arr, 3);

//optimal By SC
function leftRotateByD(arr, d, n = arr.length - 1) {
  d = d % n;
  reverse(arr, 0, d - 1);
  reverse(arr, d, n);
  reverse(arr, 0, n);
}
function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
let arr = [5, 7, 3, 1, 9, 8];
leftRotateByD(arr, 3);
console.log(arr);
