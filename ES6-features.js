// //Destructing Assignment

// const students = { name: "Rajesh", age: 12 };

// const { name, age } = students;

// //Template Literals

// let firstName = "John";
// let lastName = "Doe";

// let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(text)

// // Default Parameter
// function defaultPara(x, y = 10) {
//     return x + y;
//     }
//     console.log(defaultPara (5));

// // Spread Operator
//     let num=[22,44,53,76,54]
//     let alph=[34,55,34,53,98]
//     combined=[...num,...alph];
//     console.log(combined);

// // Promise in Es6

// let tatkalbook = new Promise((resolve,reject)=>{
//     amt=500;
//     let bookingsuccess=true;
//     if(bookingsuccess){
//         setTimeout(resolve,3000) 
        
//     }
//     else{
//         reject()
//     }
//     })

//     tatkalbook.then(success,(amt))
//     .catch(failure)

//     async function success(){
//         console.log(`Thanks! I have transferred the amount Rs.${amt}`)
//         res=await tatkalbook
//         console.log(res)
//         console.log('bye')
//     }
//     function failure(){
//         console.log("Booking failed")
//     }


// // // Rest Operator

// function fun(a,b,...c){
// console.log(a)
// }
// fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona','Lionel', 'Lionel', 'Messi', 'Barcelona');

// ES6- Set
// let val=new Set()
// val.add(1)
// val.add(2)
// val.add(3)
// val.add(8)
// val.add(5)
// val.add("Java")
// let obj={'a':1,'b':2};
// val.add(obj)
// console.log(val)
// console.log(val.has(2))
// console.log(val.delete(8))
// console.log(val.size)
//  const iterator=val.entries()
// for(let entry of iterator){
//     console.log(entry);
// }

// // ES6 Map
// let mapp=new Map();
// mapp.set('a',1)
// mapp.set('b',2)
// console.log(mapp)
// console.log(mapp.size);
// console.log(mapp.has("a"))
// console.log(mapp.delete("c"))
// //Printing Keys and values in the array bracket
// for(let i of mapp){
//     console.log(i)
// }
// //Taking Keys Only
// for(let k of mapp.keys()){
// console.log(k)
// }
// // For Each
// mapp.forEach((k,v) => {
//    console.log("key",k,"value",v) 
// });


// //CallBack


// function displayName(name){
//     console.log("User Name Is " +name)
// }
// function ProcessName(callback){
//     var name='Ajay'
//     setTimeout(function(){
//     callback(name)
//     },3000)
// }
// ProcessName(displayName);


// // Passby value

// function getValue(x){
//     x=x+10;
//     return x;
// }
// let userValue=5;
// let newVal=getValue(userValue);
// console.log(newVal)
// console.log("Gross Value "+newVal)

// // Passby Reference 

// function updatePerson(person){
// person.name='Koushik';
// person.age=30;
// }

// const person={
// name: 'aswin',
// age:'25'

// };
// updatePerson(person)
// console.log(person)

// Callback Function 

function greet(name){
    console.log('hello',name)
}

function heading(name){
   const heading= document.querySelector('h1');
   heading.innnerHTML ='hello'+name

}

function greet1(callback){
    console.log(callback)
    callback('raj')
}
greet1(greet);
greet(heading);



