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
for (let i = START; i <= END; i++) {
  simpleOne[i - 1] = i
}
// console.log(simpleOne)
// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = START; i <= END; i++) {
  const nestedArray1 = []
  for (let j = START; j <= i; j++) {
    nestedArray1.push(i)
  }
  nestedOne.push(nestedArray1)
}
// console.log(nestedOne)
// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const nestedArray1 = []
  for (let j = START; j <= i; j++) {
    nestedArray1.unshift(j)
  }
  nestedTwo.push(nestedArray1)
}
// console.log(nestedTwo)
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i <= END; i++) {
  const nestedArray1 = []
  for (let j = START; j <= i; j++) {
    const nestedArray2 = []
    for (let k = START; k <= j; k++) {
      nestedArray2.push(i)
    }
    nestedArray1.push(nestedArray2)
  }
  deepOne.push(nestedArray1)
}
// console.log(deepOne)
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i <= END; i++) {
  const nestedArray1 = []
  for (let j = START; j <= i; j++) {
    const nestedArray2 = []
    for (let k = START; k <= j; k++) {
      nestedArray2.push(k)
    }
    nestedArray1.push(nestedArray2)
  }
  deepTwo.push(nestedArray1)
}
// console.log(deepTwo)
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = START; i <= END; i++) {
  const nestedArray1 = []
  for (let j = START; j <= i; j++) {
    const nestedArray2 = []
    let sum = 0
    let average = 0
    for (let k = START; k <= j; k++) {
      sum += k ** 2
      average = sum / k
    }
    nestedArray2.push(average)
    nestedArray1.push(nestedArray2)
  }
  deepThree.push(nestedArray1)
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
