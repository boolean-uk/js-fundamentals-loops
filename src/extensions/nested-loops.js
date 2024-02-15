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
for (let index = 1; index < 11; index++) {
  simpleOne.push(index)
}

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 0; i < simpleOne.length; i++) {
  nestedOne.push([])
  for (let j = 0; j < i + 1; j++) {
    nestedOne[i].push(i + 1)
  }
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 0; i < simpleOne.length; i++) {
  nestedTwo.push([])
  for (let j = 0; j < i + 1; j++) {
    nestedTwo[i].push(i + 1 - j)
  }
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 0; i < simpleOne.length; i++) {
  deepOne.push([])
  for (let j = 0; j < i + 1; j++) {
    deepOne[i].push(new Array(j + 1).fill(i + 1))
  }
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 0; i < simpleOne.length; i++) {
  deepTwo.push([])
  for (let j = 0; j < i + 1; j++) {
    deepTwo[i].push([])
    for (let k = 0; k < j + 1; k++) {
      deepTwo[i][j].push(k + 1)
    }
  }
}
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = 0; i < deepTwo.length; i++) {
  deepThree.push([])
  for (let j = 0; j < deepTwo[i].length; j++) {
    deepThree[i].push([])
    let sum = 0
    let count = 0
    for (let k = 0; k < deepTwo[i][j].length; k++) {
      sum += deepTwo[i][j][k] * deepTwo[i][j][k]
      count++
    }
    deepThree[i][j].push(sum / count)
  }
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
