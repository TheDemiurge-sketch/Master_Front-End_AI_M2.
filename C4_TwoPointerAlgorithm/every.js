// Every Algorithm
let ages = [15, 20, 15, 80, 25];
let majorityAge = ages.every((age) => age >= 18);
console.log(majorityAge);

let pairs = [20, 90, 18, 26, 30];
let itsPair = true;

for (let i = 0; i < pairs.length; i++) {
  if (pairs[i] % 2 !== 0) {
    itsPair = false;
    break;
  }
}
console.log(itsPair);
