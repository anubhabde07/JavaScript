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


function calculateCartPrice(...num){
    return num;
}

console.log(calculateCartPrice(200,300,400,500));

const user = {
    username: "Anubhab",
    age: 20
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}

handleObject(user);

handleObject({
    username: "Alex",
    age: 21,
    gender: 'M'
})

const myArr = [200,400,500,900];

function returnSecondValue(array){
    return array[1];
}

console.log(returnSecondValue(myArr));