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
  const arr2 = []
  for (let ii = 0; ii < i; ii++) {
    arr2.push(i)
  }
  nestedOne.push(arr2)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i < 11; i++) {
  const arr2 = []
  for (let ii = i; ii > 0; ii--) {
    arr2.push(ii)
  }
  nestedTwo.push(arr2)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 1; i < 11; i++) {
  const arr2 = []
  for (let ii = 1; ii <= i; ii++) {
    const arr3 = []
    for (let iii = 1; iii <= ii; iii++) {
      arr3.push(i)
    }
    arr2.push(arr3)
  }
  deepOne.push(arr2)
}
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 1; i < 11; i++) {
  const arr2 = []
  for (let ii = 1; ii <= i; ii++) {
    const arr3 = []
    for (let iii = 1; iii <= ii; iii++) {
      arr3.push(iii)
    }
    arr2.push(arr3)
  }
  deepTwo.push(arr2)
}
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = 1; i < 11; i++) {
  const arr2 = []
  for (let ii = 1; ii <= i; ii++) {
    const arr3 = []
    let sumOfSquares = 0
    for (let iii = 1; iii <= ii; iii++) {
      arr3.push(iii)
      sumOfSquares += iii * iii
    }
    const average = sumOfSquares / arr3.length
    arr2.push([average])
  }
  deepThree.push(arr2)
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
