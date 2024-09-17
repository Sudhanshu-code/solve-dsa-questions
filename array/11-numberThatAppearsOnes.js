//Find the numbet that appears ones and other number twice

//brute
function brute(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      return arr[i];
    }
  }
}

//Better by hashing: Using map datastructure
function better(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (value == 1) {
      return key;
    }
  }
}

// optimal using XOR
//properties of XOR : 1) a ^ a = 0, 2) a ^ 0 = a

function optimal(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

let arr = [4, 1, 2, 1, 2];
console.log(optimal(arr));
