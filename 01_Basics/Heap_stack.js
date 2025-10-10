// Stack (Premitive)   Heap(Non-premitive)

let my_name = "Anubhab";
let dup_name = my_name; // here dup_name is a copy of name

dup_name = "Ankit"; // here we are changing the value of dup_name

console.log(my_name); // Anubhab
console.log(dup_name); // Ankit

let person1 = {
  name: "Anubhab",
  age: 24,
};

let person2 = person1; // here person2 is pointing to the same address as person1

person2.age = 25; // here we are changing the age property of person2

console.log(person1.age); // 25
console.log(person2.age); // 25

// In JavaScript, primitive data types (like strings, numbers, booleans) are stored in the stack, while non-primitive data types (like objects and arrays) are stored in the heap. When you assign a non-primitive type to another variable, you're copying the reference (address) to the same location in memory, not creating a new copy of the object. Therefore, changes made through one reference will affect the other.