// let num=1;
// while(num<=20){
//     if(num%5!=0){
//     console.log(num);
//     }
//     num++;
// }

//Print the following series using for loop (1,8,27,64,125,216)

// let i=0;
// for (i=0;i<=200; i++){
//     res=i*i*i;
//     console.log(res)
// }

//Print the following series using while loop (1,4,9,16,25)
// let i=0;
// while (i<=100){
//     rem=i*i;
//     console.log(rem);
//     i++;
// }

// Print the num except divisble by 4
let num=2;
while(num<=20){
    if(num%4==0){
     
        num++;
        continue;       
    
    }
    console.log(num);
    num++;
}