//Q1 Print numbers from 1 to 10 using for loop

for(let i=1; i<=10; i++){
    console.log(i);
}

//Q2 Print numbers from 10 to 1 using while loop

let i=10;
while(i>=1){
    console.log(i);
    i--;
}

for(let i=10; i>=1; i--){
    console.log(i)
}

//Q3 Print even numbers from 1 to 20 using for loop

for(let i=1; i<=20; i++){
    if(i % 2===0){
        console.log(i);
    }
}

//Q4 Print odd numbers from 1 to 20 using while loop

let j=1;
while(j<=20){
    if(j % 2!==0){
        console.log(j);
    }
    j++;    
}