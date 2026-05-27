// Search Algorithm
let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];
let sum = fibonacci.find((num) => num === 1);
console.log(sum);

let search = 21;
let sums = null;

for (let i = 0; i < fibonacci.length; i++) {
  if (fibonacci[i] === search);
  sums = fibonacci[i];
  break;
}
console.log(sums);

let users = ['Samuel', 'Emilio', 'antonella'];
let r = users.find((usr) => usr === 'Antonella');
console.log(r);

// Transform Algorithm
let powerNumbers = [2, 4, 5, 7, 10];
let res = powerNumbers.map((powerNumbers) => powerNumbers * powerNumbers);
console.log(res);

let result = [];
for (let i = 0; i < powerNumbers.length; i++) {
  result.push(powerNumbers[i] * powerNumbers[i]);
}

console.log(result);

// Organized Algorithm
let bubbleNumbers = [5, 2, 8, 7, 1, 3];

function bubbleSort(arr) {
  // Evaluates each number
  for (let i = 0; i < arr.length; i++) {
    // Comparates
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let pivote = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = pivote;
      }
    }
  }
  return arr;
}

console.log('Resultado', bubbleSort(bubbleNumbers));
