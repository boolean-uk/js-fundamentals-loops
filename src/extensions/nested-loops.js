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
for (let i = 0; i < 10; i++) {
  simpleOne[i] = i + 1
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 0; i < 10; i++) {
  const innerArray = []
  for (let j = 0; j <= i; j++) {
    innerArray.push(i + 1)
  }
  nestedOne.push(innerArray)
}
// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 0; i < 10; i++) {
  const innerArray = []
  for (let j = 0; j <= i; j++) {
    innerArray.push(i - j + 1)
  }
  nestedTwo.push(innerArray)
}
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 0; i < 10; i++) {
  const innerArray1 = []
  for (let j = 0; j <= i; j++) {
    const innerArray2 = []
    for (let k = 0; k <= j; k++) {
      innerArray2.push(i + 1)
    }
    innerArray1.push(innerArray2)
  }
  deepOne.push(innerArray1)
}
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 0; i < 10; i++) {
  const innerArray1 = []
  for (let j = 0; j <= i; j++) {
    const innerArray2 = []
    for (let k = 0; k <= j; k++) {
      innerArray2.push(k + 1) // k starts from 0 and ends in j.
    }
    innerArray1.push(innerArray2)
  }
  deepTwo.push(innerArray1)
}
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = 0; i < 10; i++) {
  const innerArray1 = []
  for (let j = 0; j <= i; j++) {
    const innerArray2 = []
    let sumOfSquares = 0
    for (let k = 0; k <= j; k++) {
      sumOfSquares += (k + 1) ** 2
    }
    innerArray2.push(sumOfSquares / (j + 1))
    innerArray1.push(innerArray2)
  }
  deepThree.push(innerArray1)
}

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
