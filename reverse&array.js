// let result = 0;
// let num =4567
// result= Number(String(num).split('').reverse().join(''));

// console.log(result);


// print the prime number and store it in the array, return the array

// let n=50;
// count=0;
// arr=[]

// function checkPrime(){ 
// for (i=2;i<=n;i++){
//     count=0;
//     for(j=2; j<i;j++){
//         if(i%j==0){
//             count++;
//         }
        
//     }
//     if(count==0){
//         arr.push(i);
//     }
// }
// return arr;
// }
// console.log(checkPrime());

// Declare an array of size n and store the numbers 1,2,3,4 n in the array and return the array.

    // let n=10;
    // arr=[]
    // a=1;

    // function ar(n){
    // for (let i = 0; i <= n; i++) {
    //     arr[i]=a;
    //     arr.push(i);
    //     a++;
    //   }

    //   return arr;
    
    // }
   
    // console.log(ar(n));


//    Find the greatest array in the given num 

//     let arr=[4,1,5,8,9]
//     min=arr[0]
//     function minimum(){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//      return min;
// }
// console.log(minimum());


// Find the maximum array in the given num

// let arr=[1,2,5,8,9];
// let max=arr[0];
// function maximum(){

//     for(i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
        
//     }
//     return max;
// }
// console.log(maximum());


// SubArray
// var arr = [1,2,3,4,5]
// function subArrayy (arr, length){
// for(let i=0; i<arr.length; i++){
//     string= "";
//     for(let j=i; j<arr.length; j++){
//         string= "";
//         for(let k=i;k<=j;k++){
//             string= string+arr[k]
//         }
//         console.log(string)
//     }

// }
// }
// subArrayy(arr);

// SubArray Maximum

// var arr = [1, -2, -4, 5, 6];
// function maxSubArraySum(arr) {
//     let maxsum = -Infinity; 
//     let currentSum = 0; 

//     for (let i = 0; i < arr.length; i++) {
//         currentSum += arr[i];

//         if (currentSum > maxsum) {
//             maxsum = currentSum; 
//         }

//         if (currentSum < 0) {
//             currentSum = 0; // Reset currentSum if it becomes negative
//         }
//     }

//     return maxsum;
// }


// console.log(maxSubArraySum(arr));


// Sum of Array

// var num =[1,2,3,4]
// let count=0;
// function runningSum(nums) {
//     for(var i=0; i<num.length;i++){
//         count+=nums[i]
//         nums[i]=count
//     }
//     return nums;
// }
// console.log(runningSum(num))



// Sum of All Possible Length

// arr=[1,4,2,5,3]

//  function sumOddlength(arr){
//     var res=0;
//     for(let i=0;i<arr.length;i++){
//         var sum=0
//         for (let j=i;j<arr.length;j++){
//             sum+=arr[j]
//             if((j-i+1)%2!=0){
//                 res=res+sum
    
//             }
//         }
//     }
//     return res;
// }
// console.log(sumOddlength(arr))

// Calculate the wealthiest person

// accounts = 
// [   [1,2,3],
//     [2,3,4]
// ]

// function maxWealth (accounts){
//     maxWealth=0;

// }

// def maximumWealth(accounts):
//     """
//     Calculate the wealth of the richest customer.

//     :param accounts: List of lists where accounts[i][j] is the amount of money
//                      the ith customer has in the jth bank.
//     :return: The wealth of the richest customer.
//     """
//     max_wealth = 0  # Initialize the maximum wealth to zero

//     for customer in accounts:
//         # Calculate the total wealth for the current customer
//         current_wealth = sum(customer)
        
//         # Update max_wealth if the current customer's wealth is greater
//         if current_wealth > max_wealth:
//             max_wealth = current_wealth

//     return max_wealth

// # Example usage:
// if __name__ == "__main__":
//     # Define the grid of accounts
//     accounts = [
//         [1, 2, 3],
//         [3, 2, 1],
//         [4, 5, 6]
//     ]

//     # Call the function and print the result
//     print("The wealth of the richest customer is:", maximumWealth(accounts))

// Find The Missing Number
// var arr = [3,4,1]
// function findMiss(arr){
// var sa=0
// var max=0
// for(var i=0; i<arr.length; i++){
//     sa =sa+arr[i];
//     if (arr[i]>max){
//         max=arr[i];
//     }

// }
// var n=max;
// var sn = ((n*(n+1))/2)
// return sn-sa;
// }
// console.log(findMiss(arr))



// Bubble sort Descending

// var arr=[4,3,6,8,]
// function sort(arr){
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++)
//         if(arr[j]<arr[j+1]){
//             var temp = arr[j]
//             arr[j] = arr[j+1]
//             arr [j+1]= temp;
//         }
// }
// return arr;
// }
// console.log(sort(arr));


// Bubble sort Ascending

// var arr=[4,3,6,8,]
// function sort(arr){
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++)
//         if(arr[j]>arr[j+1]){
//             var temp = arr[j]
//             arr[j] = arr[j+1]
//             arr [j+1]= temp;
//         }
// }
// return arr;
// }
// console.log(sort(arr));

// Insertion sort Ascending 

// var arr=[4,3,5,2,1]
// function sortAsc(arr){
//     for(i=0;i<arr.length;i++){
//         var key= arr[i]
//         var j=i-1;
//         while(j>=0 &&arr[j] > key)
//         {
//             arr[j+1]=arr[j] //Right Shift
//             j--;
//         }
//      arr[j+1]=key   // Place key at its correct position
//     }
//     return arr;
// }
// console.log(sortAsc(arr));


// Insertion sort descending 

// var arr=[4,3,5,2,1]
// function sortAsc(arr){
//     for(i=0;i<arr.length;i++){
//         var key= arr[i]
//         var j=i-1;
//         while(j>=0 &&arr[j] < key)
//         {
//             arr[j+1]=arr[j] //Right Shift
//             j--;
//         }
//      arr[j+1]=key   // Place key at its correct position
//     }
//     return arr;
// }
// console.log(sortAsc(arr));

// Selection sort Descending

// var n = [2,3,4,5,1]
// function selSort(arr,n){
//     for(i=0;i<n-1;i++){
//         temp=i;
//         for(j=i+1;j<n;j++){
//             if(arr[j]<arr[temp]){
//                 temp =j;
//             }
//         }
//         swap(arr[i],arr[temp])
//     }
//     return arr;
// }
// console.log(selSort(arr));


// var arr = [2, 3, 4, 5, 1];

// function selSort(arr) {
//     function swap(arr, i, j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }

//     for (let i = 0; i < arr.length - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) { 
//             swap(arr, i, minIndex);
//         }
//     }
//     return arr;
// }

// console.log(selSort(arr));
