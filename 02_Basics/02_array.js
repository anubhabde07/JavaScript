const marvel_heros = ['Thor', 'Iron Man',  'Sprider Man'];
const dc_heros = ['Superman', 'Batman', 'Flash'];

const heros = marvel_heros.concat(dc_heros);
console.log(heros);

const marvel_heros2 = ['Captain America', 'Hulk', 'Black Panther'];;
const newHeros = [...marvel_heros, ...dc_heros, ...marvel_heros2];
console.log(newHeros);

const array = [1,2,3,[4,5,6],7,8,[9,10,[11,12,[13,14]]]];
const flatArray = array.flat(Infinity);
console.log(flatArray);

console.log(Array.isArray("Messi"));
console.log(Array.isArray(marvel_heros));

console.log(Array.from('Messi')); // Converts iterable to array


const score1 = 100;
const score2 = 200;
const score3 = 300;

const scores = Array.of(score1, score2, score3);
console.log(scores);