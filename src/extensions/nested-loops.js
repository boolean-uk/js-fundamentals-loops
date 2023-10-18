const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]
// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
for (let i = 1; i <= 10; i++) {
  simpleOne.push(i)
}
console.log("Ex 1:")
console.log(simpleOne)

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 1; i <= 10; i++) {
  let temp_array = [] 
  for (let x = 0; x < i; x++){
    temp_array.push(i)
    //console.log(temp_array)
  } 
  nestedOne.push(temp_array)

}
//console.log("Ex 2:")
//console.log(nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i <= 10; i++) {
  let temp_array = [] 
  let diff = 0
  for (let x = 0; x < i; x++){
    temp_array.push(i -diff)
    diff += 1
    //console.log(temp_array)
  } 
  nestedTwo.push(temp_array)
}
//console.log("Ex 3:")
//console.log(nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 1; i <= 10; i++) { //nrs 1 through 10
  let temp_array = []
    for (let n = 1; n <= i; n++){
      let deep_array = Array(n).fill(i)
      //console.log('deep:',deep_array)
      temp_array.push(deep_array)
      //console.log('temp:',temp_array)
    }
  deepOne.push(temp_array)
}
//console.log("Ex 4:")
//console.log(deepOne)

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 1; i <= 10; i++) { //nrs 1 through 10
  let temp_array = []
    for (let n = 1; n <= i; n++){
      let deep_array = []
      for (let x = 1; x <= n; x++) {
        deep_array.push(x)
      }
      temp_array.push(deep_array)
    }
  deepTwo.push(temp_array)
}
//console.log("\nEx 5:")
//console.log(deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = 1; i <= 10; i++) { //nrs 1 through 10
  let temp_array = []
    for (let n = 1; n <= i; n++){
      let deep_array = []
      for (let x = 1; x <= n; x++) {
        deep_array.push(x)
      }
      //console.log('deep_array:', deep_array)
      let arr_sq = deep_array.map(x => x ** 2)
      //console.log('squared:', arr_sq)
      let sum = arr_sq.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);
      //console.log('average of sum of squares:', sum/arr_sq.length)
      let av_sum_sq = []
      av_sum_sq.push(sum/arr_sq.length)
      temp_array.push(av_sum_sq)
    }
    
  deepThree.push(temp_array)
}
//console.log("\nEx 5:")
//console.log(deepThree)


module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
