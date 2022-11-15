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
  simpleOne.push([i])
}
console.log(simpleOne)
// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = 1; i <= 10; i++) {
  const insideOne = []
  for (let j = i; j < i * 2; j++) {
    insideOne.push(i)
  }
  nestedOne.push(insideOne)
}
console.log(nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

for (let i = 1; i <= 10; i++) {
  const insideTwo = []
  for (let j = i; j > 0; j--) {
    insideTwo.push(j)
  }
  nestedTwo.push(insideTwo)
}
console.log(nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

for (let i = 1; i <= 10; i++) {
  const firstOne = []
  for (let j = 0; j < i; j++) {
    const secondOne = []
    for (let k = -1; k < j; k++) {
      secondOne.push(i)
    }
    firstOne.push(secondOne)
  }
  deepOne.push(firstOne)
}
console.log(deepOne)

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 1; i <= 10; i++) {
  const firstOne = []
  for (let j = 0; j < i; j++) {
    const secondOne = []
    for (let k = 1; k < j + 2; k++) {
      secondOne.push(k)
    }
    firstOne.push(secondOne)
  }
  deepTwo.push(firstOne)
}
console.log(deepTwo)
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = 1; i <= 10; i++) {
  const arrayOne = []
  for (let j = 0; i > j; j++) {
    const arrayTwo = []
    for (let k = 1; j + 2 > k; k++) {
      arrayTwo.push(k)
    }
    let result = 0
    for (let m = 0; m < arrayTwo.length; m++) {
      result += arrayTwo[m] ** 2
    }
    result /= arrayTwo.length
    arrayOne.push([result])
  }
  deepThree.push(arrayOne)
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
