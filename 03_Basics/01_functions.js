function sayMyName(){
    console.log("My name is Anubhab De");
}

// sayMyName();

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addTwoNumbers(7, 13);

function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}

const result = multiplyTwoNumbers(5, 7);
console.log("Result : ", result);


function userLoginMessage(username = "Guest"){
    if(!username){
        console.log("Please enater a username");
        return;
    }

    return `${username} just logged in`;
}

// console.log(userLoginMessage('Anubhab'));

console.log(userLoginMessage());