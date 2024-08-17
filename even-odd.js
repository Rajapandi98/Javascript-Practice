// a=11;
// if(a%2==0){
//     console.log("even");
// }
// else {
//     console.log("odd")
// }

//  Printing Even Number Using For Loop  
 
// const n =30
// for (i=0; i<=n; i++){
// if (i%2==0){
//     console.log(i);

// }
// }

//Printing Odd Number Using While Loop

// let i=1
// while(i<=50){
//     if(i%2==1){
//         console.log(i);
//     }
//     i++
// }

//Printing Prime Numbers Using if Else

function myFun (num){
let i,flag =true;
for (i=2; i<=num-1; i++){
    if (num%i==0){
        flag=false;
        break;
    }  
}
    if(flag==true) {
        console.log ("number is prime")
    }
    else {
        console.log ("number is not a prime")
    }
}
    myFun (8)




 
