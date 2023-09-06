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
// for (let i = 5; i < 7; i++) {
// Your code here
// }

for (let i = 1; i <= 10; i++) {
  simpleOne.push(i)
}
console.log(simpleOne)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2], [3,3,3], [4,4,4,4]...]

console.log('Question 2')
for (let i = 1; i <= 10; i++) {

  // create a temporary array we then can push
  let tempArray = []
  for (let j = 1; j <= i; j++) {
    tempArray.push(i)
  }
  // push this tempArray to nestedOne
  nestedOne.push(tempArray)
  console.log(`current state of nestedOne in iteration ${i}:`, nestedOne)
}
console.log(`final state`, nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],[3,2,1]...]

console.log('Question 3')

for (let i = 1; i <= 10; i++) {
  const newArr = []
  for (let j = i; j > 0; j--) {
    newArr.push(j)
    console.log(j)
  }
  nestedTwo.push(newArr)
}
console.log(nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],[[3],[3,3],[3,3,3]], ...]

console.log('Question 4')

for (let i = 1; i <= 10; i++) {
  // create a temporary array we then can push
  const tempArray2 = []
  for (let j = 1; j <= i; j++) {
    const tempArray1 = []
    for (let k = 0; k < j; k++) {
      tempArray1.push(i)
      console.log(k)
      console.log(i)
    }
    tempArray2.push(tempArray1)
  }
  // push this tempArray to nestedOne
  deepOne.push(tempArray2)
  console.log(`current state of deepOne in iteration ${i}:`, deepOne)
}
console.log(`final state`, deepOne)

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
