// let no=153;
// let ams=0;
// do{
// rem=no%10
// ams=ams+(rem*rem*rem)
// no=no/10
// }while(no>0)

// Pattern Printing Using for Loop  5 to 1

// let str="*";
// let str1="";
// for(i=5;i>=1;i--){
//     for(j=i;j>=1;j--){

//        str1=str1+str
//     }
//     console.log(str1);
//     str1="";
    
// }

// //1 to 5 star pattern

// let strr="*";
// let strr1="";
// for(i=1;i<=5;i++){
//     for(j=i;j<=i;j++){

//        strr1=strr1+strr
//     }
//     console.log(strr1);
 
    
// }


//5 to 1 and 1 to 5


// let str="*";
// let str1="";
// for(i=5;i>=1;i--){
//     for(j=i;j>=1;j--){

//        str1=str1+str
//     }
//     console.log(str1);
//     str1="";
    
// }

// let strr="*";
// let strr1="";
// for(i=1;i<=5;i++){
//     for(j=i;j<=i;j++){

//        strr1=strr1+strr
//     }
//     console.log(strr1);
 
    
// }

// Printing Two Left angle star 


// let str="*"
// let str2=""
// for (var i=1;i<=5;i++){
//     str2=""
//     for( var j=0;j<i;j++){
//         str2=str2+str;  
//     }
//     for(var j=0;j<=4-i;j++){
//         str2=str2+" "
//     }
//     for(var j=0;j<i;j++){
//     str2=str2+str; 
//     }
//     console.log(str2)
// }



// With Line Space

// let str="*";
// let str1="";
// for(i=5;i>=1;i--){
//     for(j=i;j>=1;j--){

//        str1=str1+str
//     }
//     console.log(str1);
//     str1="";
//     console.log("");   
// }
// let strr="*";
// let strr1="";
// for(i=1;i<=5;i++){
//     for(j=i;j<=i;j++){
//         strr1=strr1+strr
//     }
//     console.log(strr1);
//      console.log("");
    
// }


//Series Pattern Printing
// var star="*";
// var star1 ="";
// for(i=0;i<3;i++)
// {                           
//     for(j=0;j<7-i*3;j++){
//        star1=star1+star
//     }
//     console.log(star1)
// }

for (let i = 0; i < 3; i++) { 
    let stars = '*'; 
    for (let j = 0; j < 7 - i * 3; j++){
        stars += '*';
    }
    console.log(stars);
}
