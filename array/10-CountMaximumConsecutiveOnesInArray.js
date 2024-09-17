let prices = [1, 0, 1, 1, 0, 1];
let count = 0,
  max = 0;
for (let i = 0; i < prices.length; i++) {
  if (prices[i] == 1) {
    count++;
  } else {
    count = 0;
  }
  max = Math.max(max, count);
}

console.log(max);
