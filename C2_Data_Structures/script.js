// Shopping List Array
class shoppingList {
  constructor() {
    this.items = [];
    this.set = new Set();
  }
  // Adding Product Function
  add(product) {
    if (!this.set.has(product)) {
      this.items.push(product);
      this.set.add(product);
    }
  }
  // Adding Remove Last Item Function
  removeLast() {
    const removed = this.items.pop();
    if (removed !== undefined) {
      this.set.delete(removed);
    }
    return removed;
  }
  // Adding Show List Function
  showList() {
    return [...this.items];
  }
  // Maintain List Empty
  emptyList() {
    this.items = [];
    this.set.clear();
  }
}
// Array in Action
let list = new shoppingList();

list.add('Avocado');
list.add('Tomato');
list.add('Lettuce');
list.add('Avocado');

console.log(list.showList());

list.removeLast();
console.log(list.showList());

list.emptyList();
console.log(list.showList());

// class_exercises.js
// SetTimeOut

// SetInterval - 1 to 5 timer, auto stop.

// Callback_Function - Start & Ending Message.

// API, async & await.
