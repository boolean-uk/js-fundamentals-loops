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
for (let i = 1; i < 11; i++) {
  simpleOne.push(i)
}
// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 1; i < 11; i++) {
  const internalArray = []
  for (let a = 0; a < i; a++) {
    internalArray.push(i)
  }
  nestedOne.push(internalArray)
}
// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i < 11; i++) {
  const internalArray = []
  for (let a = i; a >= 1; a--) {
    internalArray.push(a)
  }
  nestedTwo.push(internalArray)
}
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 1; i < 11; i++) {
  const internalArray = []
  for (let a = 1; a <= i; a++) {
    let internalArray2 = []
    for (let b = 1; b <= a; b++) {
      internalArray2.push(b)
    }
    internalArray2 = internalArray2.fill(i)
    internalArray.push(internalArray2)
  }
  deepOne.push(internalArray)
}
console.log(deepOne)
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 1; i < 11; i++) {
  const internalArray = []
  for (let a = 1; a <= i; a++) {
    const internalArray2 = []
    for (let b = 1; b <= a; b++) {
      internalArray2.push(b)
    }
    internalArray.push(internalArray2)
  }
  deepTwo.push(internalArray)
}
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = 1; i < 11; i++) {
  const internalArray = []
  for (let a = 1; a <= i; a++) {
    const internalArray2 = []
    let sum = 0
    for (let b = 1; b <= a; b++) {
      sum += b * b
    }
    internalArray2.push(sum / a)
    internalArray.push(internalArray2)
  }
  deepThree.push(internalArray)
  console.log(deepThree)
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
