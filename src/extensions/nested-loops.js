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
for (let i = 1; i < 11; i++) {
  simpleOne.push(i)
}
console.log(simpleOne)

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 1; i < 11; i++) {
  const innerArray = []
  for (let j = 0; j < i; j++){
    innerArray.push(i)
  }
nestedOne.push(innerArray)
}
console.log('answer to 2: ', nestedOne)
// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i < 11; i++) {
  const innerArray = []
  for (let j = 1; j < i; j++){
    innerArray.unshift(j)
  }
nestedTwo.push(innerArray)
}
console.log('answer to 3: ', nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 1; i < 11; i++) {
  const innerArray = []
  for (let j = 0; j < i; j++){
    const innerArray2 = []
    for (let k = 0; k < j; k++){
      innerArray2.push(i)
    }
  innerArray.push(innerArray2)
  }
deepOne.push(innerArray)
}
console.log('answer to 4: ', deepOne) 
// FAILED!!

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

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
