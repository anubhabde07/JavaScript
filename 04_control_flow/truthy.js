const userEmail = "user@gmail.com";

if(userEmail) {
    console.log(`User have an email address: ${userEmail}`);
}
else {
    console.log("User don't have an email address");
}



// Falsy values: false, 0, -0, "", null, undefined, NaN

// Truthy values: " ", "0", "false", [], {}, function() {}


// Nulish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;

val1 = undefined ?? 10;

console.log(val1);


// Ternary Operator
// condition ? true : false

const age = 18;
const canDrive = age >=18 ? "Can Drive" : "Cannot Drive";
console.log(canDrive);