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
for (let i = START; i < END + 1; i++) {
  simpleOne.push(i)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = START; i < END + 1; i++) {
  const addArray = []
  for (let j = 1; j < i + 1; j++) {
    addArray.push(i)
  }
  nestedOne.push(addArray)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i < END + 1; i++) {
  const addArray = []
  for (let j = i; j > START - 1; j--) {
    addArray.push(j)
  }
  nestedTwo.push(addArray)
  // console.log(addArray)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
// console.log(1)
for (let i = START; i < END + 1; i++) {
  const innerFirstArray = []
  // console.log('i: ', i)
  for (let j = 1; j < i + 1; j++) {
    const innerSecondArray = []
    for (let k = 1; k < j + 1; k++) {
      innerSecondArray.push(i) // k
    }
    // deepOne.push(innerFirstArray.push(i))
    // console.log('j: ', j)
    innerFirstArray.push(innerSecondArray)
  }
  deepOne.push(innerFirstArray)
  // console.log('All j: ', innerFirstArray)
}
// console.log(deepOne)
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i < END + 1; i++) {
  const innerFirstArray = []
  // console.log('i: ', i)
  for (let j = 1; j < i + 1; j++) {
    const innerSecondArray = []
    for (let k = 1; k < j + 1; k++) {
      innerSecondArray.push(k) // k
    }
    // deepOne.push(innerFirstArray.push(i))
    // console.log('j: ', j)
    innerFirstArray.push(innerSecondArray)
  }
  deepTwo.push(innerFirstArray)
  // console.log('All j: ', innerFirstArray)
}
// console.log(deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = START; i < END + 1; i++) {
  const innerFirstArray = []
  // console.log('i: ', i)
  for (let j = 1; j < i + 1; j++) {
    const innerSecondArray = []
    let sum = 0
    for (let k = 1; k < j + 1; k++) {
      sum += k ** 2
      innerSecondArray.push([sum / k]) // k
    }
    // deepOne.push(innerFirstArray.push(i))
    // console.log('j: ', j)
    innerFirstArray.push(innerSecondArray)
  }
  deepThree.push(innerFirstArray.pop())
  // console.log('All j: ', innerFirstArray)
}
// console.log(deepThree)

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
