const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// // 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
// //    eg [1,2,3...]

// // // HINT: in the below loop, the statements and block of code needs to be changed
// // // HINT: in the below loop, the var i represents the loop index
for (let i = 1; i < 11; i++) {
  simpleOne.push(i)
}
console.log("Answer One", simpleOne)

// // // // // 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
// // // // //    eg [[1],[2,2],...]
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = START; j <= i; j++) {
    innerArray.push(i)
  }
  nestedOne.push(innerArray)
}
// console.log("Answer Two", nestedOne)
// // // 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
// // //    eg [[1],[2,1],...]
for (let i = 1; i <= END; i++) {
  const innerArray = []
  for (let j = i; j >= 1; j--) {
    innerArray.push(j)
  }
  nestedTwo.push(innerArray)
}
console.log("Answer Three", nestedTwo)

// // // 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
// // //    eg [[[1]],[[2],[2,2]],...]

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
console.log("Number Four", deepOne)

// // // 5. As 4, update array 'deepTwo' so that the result is:
// // //       [[[1]],[[1],[1,2]],...]

for (let i = START; i <= END; i++) {
  let outerArray = []
  for (let j = 1; j <= i; j++) {
    const innerArray = []
    for (let k = 1; k <= j; k++) {
      innerArray.push(k)
    }
    outerArray.push(innerArray)
  }
  deepTwo.push(outerArray)
}
console.log("Number Five", deepTwo)

// // 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
// //       [[1],[[1],[2.5]],...]



for (let i = START; i <= END; i++) {
  let outerArray = []
  for (j = 1; j <= i; j++) {
    let innerArray = []
    let squareSum = 0
let averageSum = 0
    for (k = 1; k <= j; k++) {
      squareSum += k ** 2
      averageSum = squareSum / k
    }
    innerArray.push(averageSum)
    outerArray.push(innerArray)
  }
  
  deepThree.push(outerArray)
}
console.log("Number Six", deepThree)

// sum += nums[i]

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
