function brute(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    //TC:O(n)
    if (arr[i] != 0) {
      temp.push(arr[i]);
    }
  }
  console.log(temp);

  for (let i = 0; i < temp.length; i++) {
    //TC:O(x)
    arr[i] = temp[i];
  }
  for (let i = temp.length; i < arr.length; i++) {
    //TC:O(n-x)
    arr[i] = 0;
  }
}

//optimal
function moveZerosToEnd(arr) {
  //TC:O(n)
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    //TC:O(x)
    if (arr[j] == 0) {
      i = j;
      break;
    }
  }
  for (let j = i + 1; j < arr.length; j++) {
    //TC:O(n-x)
    if (arr[j] != 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
}
let arr = [5, 0, 1, 0, 0, 4, 0, 1];
// moveZerosToEnd(arr);
brute(arr);
console.log(arr);
