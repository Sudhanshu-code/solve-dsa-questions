//Brute
function brute(a, b) {
  let visited;
  let n = a.length;
  let m = b.length;
  if (n < m) {
    visited = new Array(n).fill(0);
  } else {
    visited = new Array(m).fill(0);
  }
  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a[i] == b[j] && visited[j] == 0) {
        ans.push(a[i]);
        visited[j] = 1;
        break;
      }
      if (a[i] < b[j]) {
        break;
      }
    }
  }
  return ans;
}
//optimal
function optimal(a, b) {
  let i = 0,
    j = 0;
  let n = a.length,
    m = b.length;
  let intersection = [];
  while (i < n && j < m) {
    if (a[i] < b[j]) {
      i++;
    } else if (a[i] > b[j]) {
      j++;
    } else {
      intersection.push(a[i]);
      i++;
      j++;
    }
  }
  return intersection;
}
let a = [1, 2, 2, 3, 3, 4, 5, 6];
let b = [2, 3, 3, 5, 6, 6, 7, 8];

console.log(brute(a, b));
