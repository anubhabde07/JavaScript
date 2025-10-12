const { use } = require("react");

const appleUser = {}

appleUser.name = 'Alex Mercer';
appleUser.ID = 'A12345';
appleUser.isLoggedIn = false;

// console.log(appleUser);

const regularUser = {
    email: 'alex23@gmail.com',
    fullName: {
        userFullName: {
            firstName: 'Alex',
            lastName: 'Mercer'
        }
    }
}


// console.log(regularUser.fullName);

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'a',
    4: 'b'
}

const obj3 = {...obj1, ...obj2}

console.log(obj3);

const users = [
    {
        userID: 1,
        email: 'alex@gmail.com'
    },
    {
        userID: 2,
        email: 'adam@gmail.com'
    },
    {
        userID: 3,
        email: 'green@gmail.com'
    },
    {
        userID: 4,
        email: 'ben@gmail.com'
    },
    {
        userID: 5,
        email: 'john@gmail.com'
    }
]

console.log(users[2].email);

console.log(Object.keys(appleUser));
console.log(Object.values(appleUser));
console.log(Object.entries(appleUser));