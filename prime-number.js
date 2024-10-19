// let i,n=20;
// for (i=0;i<n;i++){
//     if(i!==0){
//         continue;
//     }
//     else{
//         console.log("Not a Prime")
//     }
// }


function primee(n){
    let i,flag=true;
    for(i=2; i<=n-1;i++){
        if(n%i==0){
            flag=false;
            break;
        }
   }
   if(flag==true){
    
    console.log(n +" is prime");

    
   }
   else{
    console.log(n +" Not Prime")
   }
}
primee(1);
primee(6);