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
console.log('Simple array') // Done
for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}
console.log(simpleOne)

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
console.log('Nested: 1') // Done
for (let i = START; i <= END; i++) {
  const array = []
  for (let n = START; n <= i; n++) {
    array.push(i)
  }
  nestedOne.push(array)
}
console.log(nestedOne)
// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
console.log('Nested: 2') // Done
for (let i = START; i <= END; i++) {
  const array = []
  for (let n = START; n <= i; n++) {
    array.unshift(n)
  }
  nestedTwo.push(array)
}
// console.log(nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
console.log('Nested: 3') // Done

for (let i = START; i <= END; i++) {
  const array = []
  for (let j = START; j <= i; j++) {
    const subArray = []
    for (let k = START; k <= j; k++) {
      subArray.push(i)
    }
    array.push(subArray)
  }
  deepOne.push(array)
}
console.log(deepOne)

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
console.log('Nested: 4') // Not quite figured out yet

for (let i = START; i <= END; i++) {
  const array = []
  for (let j = START; j <= i; j++) {
    const subArray = []
    for (let k = START; k <= j; k++) {
      subArray.push(k)
    }
    array.push(subArray)
  }
  deepTwo.push(array)
}
console.log(deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
console.log('Nested: 5') // STILL TRYING TO FIGURE THIS ONE OUT

for (let i = START; i <= END; i++) {
  const array = []
  for (let j = START; j <= i; j++) {
    const subArray = []
    for (let k = START; k <= j; k++) {
      let averageOfSumOfSquares
      for (let l = START; l <= k; l++) {
        averageOfSumOfSquares = ((k ^ 2) + k) / j
      }
      subArray.push(averageOfSumOfSquares)
    }
    array.push(subArray)
  }
  deepTwo.push(array)
}
console.log(deepTwo)

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
