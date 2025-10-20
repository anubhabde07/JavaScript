// for in

// The for...in loop is used to iterate over the keys or property names of an object (or the indexes of an array).

// It loops through enumerable properties, meaning the keys (not the values directly).

const superHeros = ["Ironman", "Hulk", "Thor", "Black Panther", "Spiderman"];

for (const index in superHeros) {
    console.log(superHeros[index]);
}


// Maps     ---- Map is not directly iterable using for...in loop
// const newMap = new Map();
// newMap.set("name", "Anubhab");
// newMap.set("age", 20);
// newMap.set("country", "India");

// for(const keys in newMap) {
//     console.log(keys);
// }