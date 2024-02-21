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
for (let i = START; i < END + 1; i++) {
  simpleOne.push(i)
}

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = START; i < END + 1; i++) {
  const singleArray = []
  for (let j = 0; j < i; j++) {
    singleArray.push(i)
  }
  nestedOne.push(singleArray)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i < END + 1; i++) {
  const singleArray = []
  for (let j = i; j > 0; j--) {
    singleArray.push(j)
  }
  nestedTwo.push(singleArray)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i < END + 1; i++) {
  const firstLevel = []
  for (let j = 0; j < i; j++) {
    const secondLevel = []
    for (let k = 0; k < j + 1; k++) {
      secondLevel.push(i)
    }
    firstLevel.push(secondLevel)
  }
  deepOne.push(firstLevel)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i < END + 1; i++) {
  const firstLevel = []
  for (let j = 0; j < i; j++) {
    const secondLevel = []
    for (let k = 0; k < j + 1; k++) {
      secondLevel.push(k + 1)
    }
    firstLevel.push(secondLevel)
  }
  deepTwo.push(firstLevel)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = START; i < END + 1; i++) {
  const firstLevel = []
  for (let j = 0; j < i; j++) {
    const secondLevel = []
    let squaresSum = 0
    for (let k = 0; k < j + 1; k++) {
      squaresSum += (k + 1) ** 2
    }
    secondLevel.push(squaresSum / (j + 1))
    firstLevel.push(secondLevel)
  }
  deepThree.push(firstLevel)
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
