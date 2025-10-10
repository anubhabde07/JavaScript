const name = "Anubhab";
const age = 20;


console.log(`My name is ${name} and my age is ${age}`); // Template Literal
console.log("My name is " + name + " and my age is " + age); // Concatenation

const gameName = "FIFA MOBILE";
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('M'));

const newString1 = gameName.substring(0, 4);
console.log(newString1);

const newString2 = gameName.slice(-9, 4);
console.log(newString2);

const newString3 = "   Hello World    ".trim();
console.log(newString3);

const email = "deanubhab5%!:@gmail.com";
console.log(email.replace('%!:', ''));
console.log(email.includes('@'));
console.log(email.split('@'));
