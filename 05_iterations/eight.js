// Reduce 
const numbers = [1, 2, 3, 4, 5];

const initialValue = 0;
// const sum = numbers.reduce((accumalator, currentValue) => accumalator + currentValue, initialValue);

const sum = numbers.reduce(function(accumalator, currentValue) {
    console.log(`acc: ${accumalator} , cur: ${currentValue}`);
    return accumalator + currentValue;
}, initialValue)

console.log(sum); // Output: 15


const course = [
    {name: "JavaScript", price: 5000},
    {name: "ReactJS", price: 7000},
    {name: "NodeJS", price: 6000},
];

const totalPrice = course.reduce((accumalator, item) => accumalator + item.price,0);

console.log(totalPrice); // Output: 18000