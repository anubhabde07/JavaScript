// for loop

for(let i=0; i<5;i++){
    const element = i;
    if(element === 3) {
        console.log("3 is found");
        break;
    }
    console.log(element);
}


for(let i=0;i<=5;i++){
    console.log("Outer loop iteration: ", i);
    for(let j=0;j<=5;j++){
        console.log("Inner loop iteration: ", j);
    }
}


// continue keyword

for(let i=0;i<10;i++){
    if(i%2 === 0){
        continue;
    }
    console.log(i);
}