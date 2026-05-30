// Includes Method
let numbers = [0, 1];
let exists = numbers.includes(20);
console.log(exists);

let text = 'JavaScript';
let search = 'Script';
let existence = false;

for (let i = 0; i < text.length - search.length; i++) {
  let coincidence = false;

  for (let j = 0; j < search.length; j++) {
    if (text[i + j] !== search) {
      coincidence = true;
      break;
    }
  }
  if (coincidence) {
    existence = true;
    break;
  }
}
console.log(existence);
