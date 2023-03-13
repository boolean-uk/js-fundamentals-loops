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

for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}
// console.log('1 -', simpleOne)

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let n = START; n <= END; n++) {
  const arrayOne = []
  for (let m = START; m <= END; m++) {
    if (n >= m) {
      arrayOne.push(n)
    }
  }
  nestedOne.push(arrayOne)
}
// console.log('2 -', nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const arrayTwo = []
  for (let j = END; j >= START; j--) {
    if (i >= j) {
      arrayTwo.push(j)
    }
  }
  nestedTwo.push(arrayTwo)
}
// console.log('3 -', nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i <= END; i++) {
  const outerArray = []
  for (let j = 1; j <= i; j++) {
    const innerArray = []
    for (let k = 1; k <= j; k++) {
      innerArray.push(i)
    }
    outerArray.push(innerArray)
  }
  deepOne.push(outerArray)
}
// console.log('4 -', deepOne)

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
// console.log('5 -', deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = START; i <= END; i++) {
  const outerArray = []
  for (let j = 1; j <= i; j++) {
    const innerArray = []
    let squareSum = 0
    let averageSum = 0
    for (let k = 1; k <= j; k++) {
      squareSum += k ** 2
      averageSum = squareSum / k
    }
    innerArray.push(averageSum)
    outerArray.push(innerArray)
  }
  deepThree.push(outerArray)
}
console.log('6 -', deepThree)

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
