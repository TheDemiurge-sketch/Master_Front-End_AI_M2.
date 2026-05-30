// Reduce Algorithm
let numbers = [10, 24, 85, 90];
let sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);
console.log(sum);

let plus = numbers.reduce((acc, n) => acc + n, 0);
console.log(plus);

let number = [10, 24, 85, 90];
let sums = 0;

for (let index = 0; index < number.length; index++) {
  sums += number[index];
}
console.log(sums);

let users = [
  { name: 'Miguel', age: 21 },
  { name: 'César', age: 24 },
  { name: 'Isaac', age: 30 },
  { name: 'Natalia', age: 20 },
  { name: 'Emilio', age: 24 },
];

let total = users.reduce((acc, user) => acc + user.age, 0);
console.log(total);

let words = ['¡', 'Hola', 'Mundo', '!'];
let phrase = words.reduce((acc, words) => acc + words);
console.log(words);
