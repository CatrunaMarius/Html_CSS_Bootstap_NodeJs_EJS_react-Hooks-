// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// function double(num){
//     return num*2;
// }

// numbers.map(double)

// // acelasi lucru putem face cu forEach
// var newNumber =[]
// function doubles(num){
//    return newNumber.push(num)
// }

// numbers.forEach(doubles)

// //Filter - Create a new array by keeping the items that return true.

// function arrFilter(num){
//     return num>10
// }

// numbers.filter(arrFilter)
// // acelasi lucru putem face cu forEach

// var newNumbers = []
// function arrFilters(num){
//     if(num >10){
//         newNumbers.push(num)      
//     }
// }

// numbers.forEach(arrFilters)

// //Reduce - Accumulate a value by doing something to each item in an array.
// numbers.reduce(function(Accumulate,currentValue){
//     // console.log("Accumulate is: "+ Accumulate);
//     // console.log("CurrentValue is: "+ currentValue);
//     return Accumulate + currentValue
// })

// // acelasi lucru putem face cu forEach
// var accumulate =0;
// numbers.forEach(function(currentValue){
//     return accumulate += currentValue
// })

// //Find - find the first item that matches from an array.
// // gaseste primul numar care raspunde cerintei
// numbers.find(function(num){
//     return num>10
// })


// //FindIndex - find the index of the first item that matches.
// // acelasi lucru ca si find doar ca ia da indexul
// numbers.findIndex(function(num){
//     return num>10
// })

import emojipedia from "./emojipedia"

//challenge

var meaning = emojipedia.map(function(num){
   var meanings = num.meaning
   
   return meanings.substring(0,100)
    // return meanings
})

console.log(meaning);