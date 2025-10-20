// for of
// the for...of loop is used to iterate over iterable objects — like arrays, strings, maps, sets, and more.

const superHeros = ["Ironman", "Hulk", "Thor", "Black Panther", "Spiderman"];

for (const hero of superHeros) {
    console.log(hero);
}

const message = "Virat is one of the geatest cricketers of all time";

for(const char of message) {
    console.log(char);
}


// Maps
const newMap = new Map();
newMap.set("name", "Anubhab");
newMap.set("age", 20);
newMap.set("country", "India");

// console.log(newMap);

for (const [keys,values] of newMap) {
    console.log(`${keys} : ${values}`);
}


// Objects
const person = {
    name: "Anubhab",
    age: 20,
    gender: "M",
    state: "West Bengal"
}

for(const key of Object.keys(person)) {
    console.log(`${key} : ${person[key]}`);
}