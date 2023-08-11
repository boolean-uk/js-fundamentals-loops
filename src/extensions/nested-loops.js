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

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let index = 1; index < 11; index++) {
  nestedOne.push([])
  for (let i = 1; i <= index; i++) {
    nestedOne[index - 1].push(index)
  }
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let index = 1; index < 11; index++) {
  nestedTwo.push([])
  for (let i = index; i > 0; i--) {
    nestedTwo[index - 1].push(i)
  }
}
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let index = 1; index < 11; index++) {
  deepOne.push([])
  for (let i = 1; i <= index; i++) {
    deepOne[index - 1].push([])
    for (let ind = 1; ind <= i; ind++) {
      deepOne[index - 1][i - 1].push(index)
    }
  }
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let index = 1; index < 11; index++) {
  deepTwo.push([])
  for (let i = 1; i <= index; i++) {
    deepTwo[index - 1].push([])
    for (let ind = 1; ind <= i; ind++) {
      deepTwo[index - 1][i - 1].push(ind)
    }
  }
}

// 6. As 5, update the array 'deepThree', but the result should be the
// average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let r = 0; r < deepTwo.length; r++) {
  deepThree.push([])
  for (let c = 0; c < deepTwo[r].length; c++) {
    deepThree[r].push([])
    const element = deepTwo[r][c]
    const squaredValues = element.map((value) => value * value)
    const sumOfSquaredValues = squaredValues.reduce(
      (sum, value) => sum + value,
      0
    )
    const average = sumOfSquaredValues / element.length
    deepThree[r][c].push(average)
  }
}
console.log(deepThree)

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
