//Union of two sorted Array

//Brute
function unionOfTwoSortedArray(a1, a2) {
  const set = new Set();
  for (let i = 0; i < a1.length; i++) {
    set.add(a1[i]);
  }
  for (let i = 0; i < a2.length; i++) {
    set.add(a2[i]);
  }
  let union = [];
  for (const value of set) {
    union.push(value);
  }
  console.log(set);

  return union;
}

function union(a1, a2) {
  let n1 = a1.length;
  let n2 = a2.length;
  let i = 0,
    j = 0;
  let union = [];
  while (i < n1 && j < n2) {
    if (a1[i] >= a2[j]) {
      if (union.length == 0 || !union.includes(a2[j])) {
        union.push(a2[j]);
      }
      j++;
    } else {
      if (union.length == 0 || !union.includes(a1[i])) {
        union.push(a1[i]);
      }
      i++;
    }
  }
  while (i < n1) {
    if (union.length == 0 || !union.includes(a1[i])) {
      union.push(a1[i]);
    }
    i++;
  }
  while (j < n2) {
    if (union.length == 0 || !union.includes(a2[j])) {
      union.push(a2[j]);
    }
    j++;
  }
  return union;
}

let a1 = [1, 2, 3, 5, 7];
let a2 = [2, 3, 4, 6, 7, 8];
// console.log(unionOfTwoSortedArray(a1, a2));
console.log(union(a1, a2));
