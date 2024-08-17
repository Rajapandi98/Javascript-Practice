// Without Using Third Variable
// let a=10;
// let b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

//Using Temp

let a=10;
let b=20;

temp=a;
a=b;
b=temp;
console.log(b);
console.log(a);

