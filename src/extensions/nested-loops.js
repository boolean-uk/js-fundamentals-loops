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
}

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
let subArray = []
for (let i = START; i <= END; i++) {
  for (let l = 1; l <= i; l++) {
    subArray.push(i)
  }
  nestedOne.push(subArray)
  subArray = []
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
let subArrayTwo = []
for (let i = START; i <= END; i++) {
  for (let l = i; l > 0; l--) {
    subArrayTwo.push(l)
  }
  nestedTwo.push(subArrayTwo)
  subArrayTwo = []
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
let subArrayDeepOneOne = []
let subArrayDeepOneTwo = []

for (let j = START; j <= END; j++) {
  for (let i = START; i <= j; i++) {
    for (let l = 1; l <= i; l++) {
      subArrayDeepOneOne.push(j)
    }
    subArrayDeepOneTwo.push(subArrayDeepOneOne)
    subArrayDeepOneOne = []
  }
  deepOne.push(subArrayDeepOneTwo)
  subArrayDeepOneTwo = []
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
let subArrayDeepTwoOne = []
let subArrayDeepTwoTwo = []

for (let j = START; j <= END; j++) {
  for (let i = START; i <= j; i++) {
    for (let l = 1; l <= i; l++) {
      subArrayDeepTwoOne.push(l)
    }
    subArrayDeepTwoTwo.push(subArrayDeepTwoOne)
    subArrayDeepTwoOne = []
  }
  deepTwo.push(subArrayDeepTwoTwo)
  subArrayDeepTwoTwo = []
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

let subArrayDeepThreeOne = []
let subArrayDeepThreeTwo = []
let average = 0

for (let j = START; j <= END; j++) {
  for (let i = START; i <= j; i++) {
    for (let l = 1; l <= i; l++) {
      subArrayDeepThreeOne.push(l)
    }
    for (let l = 0; l < subArrayDeepThreeOne.length; l++) {
      average += subArrayDeepThreeOne[l] * subArrayDeepThreeOne[l]
    }
    average = average / subArrayDeepThreeOne.length
    subArrayDeepThreeTwo.push([average])
    subArrayDeepThreeOne = []
    average = 0
  }
  deepThree.push(subArrayDeepThreeTwo)
  subArrayDeepThreeTwo = []
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
