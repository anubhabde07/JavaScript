const mySymbol = Symbol('mySymbol');

const User = {
    name: "Anubhab",
    [mySymbol]: 'mySymbol1',
    age: 20,
    isLoggedIn: true,
    email: 'anubhabde@gmail.com'
};

// console.log(User.email);
console.log(User['email']);
console.log(User[mySymbol]);

User.email = 'deanubhab@gmail.com'; // Update

// Object.freeze(User); // Prevent any changes
// User.email = 'bumba@gmail.com'; // Will not update

console.log(User['email']);

User.greeting = function() {
    console.log("Hello User");
}

User.greetingTwo = function() {
    console.log(`Hello User - ${this.name}`);
}

console.log(User.greeting());
console.log(User.greetingTwo());