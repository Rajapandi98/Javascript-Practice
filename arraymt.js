    // let colors=["orange","red","blue","yellow"]
    // let shape=["square","circle","rectangle"]
    // result=colors.concat(shape);
    // console.log(result);

    // //Extracting an array

    // removed=result.slice(1,2);
    // console.log(result);
    // //Extracted
    // console.log(removed)


//Index of method and last index of

    

// let arr=[1,2,3,4,5,3]
// result=arr.indexOf(3)
// result=arr.lastIndexOf(3)
// console.log(result);

//includes of
// let ar=[1,2,3,4,5,3]
// res=ar.includes(7)
// console.log(res);

//Filter
// let items=[
//     {id:1, item: "Hp", price: 40000},
//     {id:2, item: "lenovo", price:30000},
//     {id:3, item: "Dell", price:50000}
// ]

// fltr=items.filter(function(value) {
//     return value.price>40000
// }
// );
// console.log(fltr);

//Find

// findd=items.find(function(value) {
//     return value.price>40000
// }
// );
// console.log(findd);

// Find Index

// finddIndex=items.findIndex(function(value) {
//     return value.price>40000
// }
// );
// console.log(finddIndex);



// Map Method

// let names=[
//     {id:1, Fname: "Rajesh", Lname:"kumar"},
//     {id:2, Fname: "Joseph", Lname:"raj"},
//     {id:3, Fname: "vinith", Lname:"raj"}
// ]

// fullname=names.map(function(value){
// //return value.Fname+value.Lname
// //or

// fullname=[value.Fname, value.Lname].join(" ");
// obj={id: value.id, fullname};
// return obj;
// }
// );
// console.log(fullname);

// Reduce Method

// let ar=[21,43,56,65,43]
// ar.reduce (function(prevval,currentval){
//     console.log(prevval);
//     console.log(currentval)
    
//    return prevval+currentval;

// });


// Reduce With Prctical Example

const grocery=[{id: 1, item: "chilly", price:100 },
    {id: 2, item: "pepper", price:200 },
    {id: 3, item: "sugar", price:300 }

]

Total=grocery.reduce (function(currentval,prevval){
return currentval+prevval.price

},10);
console.log(Total);

// Sort
// let num=[1,6,7,4,9,3]
// num.sort();
// console.log(num)




