const score = 300;
console.log(score);

const balance = new Number(100);
console.log(balance);

// Note: It's generally recommended to use primitive number types (like `score`) instead of `Number` objects (like `balance`) for better performance and to avoid unexpected behavior.

console.log(typeof score); // "number"
console.log(typeof balance); // "object"

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.4567;
console.log(otherNumber.toPrecision(3));


const money = 1000000;
console.log(money.toLocaleString('en-IN'));

// ************************ Math ***********************

console.log(Math);
console.log(Math.PI);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(10, 20, 5, 40, -1));
console.log(Math.max(10, 20, 5, 40, -1));


console.log(Math.random()); // 0 to 0.999999

const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1) + min); // 10 to 20.99999

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20