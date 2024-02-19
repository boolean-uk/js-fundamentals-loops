const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop j' to the array 'simpleOne'
//    eg [1,2,3...]

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop j
for (let i = 0; i < 10; i++) {
  simpleOne[i] = i + 1
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop j'
//    eg [[1],[2,2],...]
for (let i = 0; i < 10; i++) {
  nestedOne[i] = []
  for (let j = 0; j < i + 1; j++) {
    nestedOne[i][j] = i + 1
  }
}

// 3. As 2, but each array should contain the values from the outer 'loop j' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 0; i < 10; i++) {
  nestedTwo[i] = []
  for (let j = 0; j < i + 1; j++) {
    nestedTwo[i][i - j] = j + 1
  }
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop j' with the value of the outer 'loop j'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 0; i < 10; i++) {
  deepOne[i] = []
  for (let j = 0; j < i + 1; j++) {
    deepOne[i][j] = []
    for (let l = 0; l < j + 1; l++) {
      deepOne[i][j][l] = i + 1
    }
  }
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 0; i < 10; i++) {
  deepTwo[i] = []
  for (let j = 0; j < i + 1; j++) {
    deepTwo[i][j] = []
    for (let l = 0; l < j + 1; l++) {
      deepTwo[i][j][l] = l + 1
    }
  }
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = 0; i < 10; i++) {
  deepThree[i] = []
  for (let j = 0; j < i + 1; j++) {
    let sum = 0
    for (let l = 0; l < j + 1; l++) {
      sum += (l + 1) * (l + 1)
    }
    deepThree[i][j] = [sum / (j + 1)]
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
