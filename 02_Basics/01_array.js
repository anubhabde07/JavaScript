// Array

const myArr = [10,20,30,40,50];
const newArr = new Array(1,2,3,4,5);

console.log(myArr);
console.log(newArr);

console.log(myArr[1]);

// Methods of array

console.log(myArr.length);

myArr.push(60);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(-1);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(50));
console.log(myArr.indexOf(70));

const newArr2 = myArr.join();
console.log(newArr2);
console.log(typeof newArr2);