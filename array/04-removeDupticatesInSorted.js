let arr = [1, 1, 2, 3, 3, 5, 5];
//Brute-->TC: O(nlogn)+O(n)->O(nlogn+n) :::SC:O(n)
function removeDuplicates(arr) {
  let set = new Set(); //SC: O(n)
  for (let i = 0; i < arr.length; i++) {
    //TC:O(n)
    set.add(arr[i]); //TC:O(logn)
  }
  let index = 0;
  for (let elem of set) {
    //TC:O(n)
    arr[index] = elem;
    index++;
  }
  return index;
}

// console.log(removeDuplicates(arr));

//optimal TC:O(n)
function removeDuplicatesOptimal(array) {
  let i = 0; //first unique
  for (let j = 1; j < array.length; j++) {
    //TC:O(n)
    if (array[j] != array[i]) {
      array[i + 1] = array[j];
      i++;
    }
  }
  return i + 1;
}
console.log(removeDuplicatesOptimal(arr));

console.log(arr);
