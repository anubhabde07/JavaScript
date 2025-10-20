// for each

const superHeros = ["Ironman", "Hulk", "Thor", "Black Panther", "Spiderman"];

// superHeros.forEach(function(hero) {
//     console.log(hero);
// })

// superHeros.forEach((hero) => {
//     console.log(hero);
// })


// function printMe (item) {
//     console.log(item);
// }

// superHeros.forEach(printMe);


const details = [
    {name: "Anubhab", age: 20},
    {name: "Rohit", age: 21},
    {name: "Virat", age: 22},
    {name: "Dhoni", age: 23},
];

details.forEach((person) => {
    console.log(`${person.name} : ${person.age}`);
})