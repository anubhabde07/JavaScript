// var c = 300;

let a = 100;

if(true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("Inner : ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Anubhab";

    function two(){
        const website = "youTube";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if(true) {
    const username = "Anubhab";
    if(username === "Anubhab") {
        const website = " youTube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ***************************************** Intersting **************************************************

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}


const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(7));