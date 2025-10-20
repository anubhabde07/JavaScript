const superHeros = ["Ironman", "Hulk", "Thor", "Black Panther", "Spiderman"];


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNumbers.filter((num) => num > 4);

// const newNum = myNumbers.filter((num) => {
//     return num > 4;
// })

const newNum = [];

myNumbers.forEach((num) => {
    if(num > 4) {
        newNum.push(num);
    }
});

// console.log(newNum);

const books = [
    {title: "The Alchemist", author: "Paulo Coelho"},
    {title: "The Power of Now", author: "Eckhart Tolle"},
    {title: "Atomic Habits", author: "James Clear"},
    {title: "Thinking, Fast and Slow", author: "Daniel Kahneman"},
];

const userBooks = books.filter((book) => book.author.includes("James"));

console.log(userBooks);