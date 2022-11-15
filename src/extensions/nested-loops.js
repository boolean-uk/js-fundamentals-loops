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

for (let i = START; i <= END; i++) {
  simpleOne.push(i)
  // console.log(`Should log 1-10: ${simpleOne}`)
}

// console.log(`Should log 1-10: ${simpleOne}`)

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = START; i <= END; i++) {
  const pushArray = []
  for (let n = 1; n <= i; n++) {
    pushArray.push(i)
  }
  nestedOne.push(pushArray)
}

// console.log(nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

for (let i = START; i <= END; i++) {
  const pushArray = []
  for (let n = i; n > 0; n--) {
    pushArray.push(n)
  }
  nestedTwo.push(pushArray)
}

// console.log(nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

for (let i = START; i <= END; i++) {
  const outerArray = []
  for (let j = i; j > 0; j--) {
    const innerArray = []
    for (let k = j; k <= i; k++) {
      innerArray.push(i)
    }
    outerArray.push(innerArray)
  }
  deepOne.push(outerArray)
}

// console.log(deepOne)

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (let i = START; i <= END; i++) {
  const outerArray = []
  for (let j = 1; j <= i; j++) {
    const innerArray = []
    for (let k = 1; k <= j; k++) {
      innerArray.push(k)
    }
    outerArray.push(innerArray)
  }
  deepTwo.push(outerArray)
}

// console.log(deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = START; i <= END; i++) {
  const outerArray = []
  for (let j = 1; j <= i; j++) {
    const innerArray = []
    for (let k = 1; k <= j; k++) {
      innerArray.push(k)
    }
    const squaredArray = []
    for (let l = 0; l < innerArray.length; l++) {
      squaredArray.push(innerArray[l] ** 2)
    }
    let sum = 0
    const sumArray = []
    for (let m = 0; m < squaredArray.length; m++) {
      sum += squaredArray[m]
    }
    sumArray.push(sum)
    const solvedArray = []
    for (let n = 0; n < sumArray.length; n++) {
      solvedArray.push(sumArray[n] / innerArray.length)
    }
    outerArray.push(solvedArray)
  }
  deepThree.push(outerArray)
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
