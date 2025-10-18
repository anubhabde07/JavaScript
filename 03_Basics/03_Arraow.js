const user = {
    username: "Anubhab",
    age: 20,

    wlcomeMessage: function() {
        console.log(`Welcome ${this.username}`);
    }
}

// user.wlcomeMessage();

// console.log(this);


function myFun() {
    let username = "Anubhab";
    console.log(this.username);
}

// myFun();


// Arrow Function

// const arrowFun = () => {
//     console.log(this);
// }

// arrowFun();

const arrowFunction = (num1, num2) => num1 * num2;

console.log(arrowFunction(5, 7));

const greetUser = () => console.log({username: "Anubhab"});
console.log(greetUser());