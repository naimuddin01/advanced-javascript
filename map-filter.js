const numbers = [3, 4, 5, 6, 7, 8]
const output = [];

// using simple way
// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

//using map 

//map er vitore sohojey element, index, array payo jay
// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

const result1 = numbers.map(function(element){
    return element * element;
})
console.log("map : "+result1);

//using filter
const bigger = numbers.filter(x => x >5);
console.log("filter : "+bigger);

//using find
const isThere = numbers.find(x => x > 5);
console.log("find"+isThere);

//arrow function use
function square(element){
    return element * element;
}

// const square = element => element * element;
// const square = x => x * x;

const result = numbers.map(x => x * x);