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
  simpleOne.push(i)
}
// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = 1; i <= 10; i++) {
  const innerlist = []
  for (let j = 1; j <= i; j++) {
    innerlist.push(i)
  }
  nestedOne.push(innerlist)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i <= 10; i++) {
  const innerlist = []
  for (let j = i; j >= 1; j--) {
    innerlist.push(j)
  }
  nestedTwo.push(innerlist)
}
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 1; i <= 10; i++) {
  const outerList = []
  for (let j = 1; j <= i; j++) {
    const innerList = []
    for (let k = 0; k < j; k++) {
      innerList.push(i)
    }
    outerList.push(innerList)
  }
  deepOne.push(outerList)
}
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 1; i <= 10; i++) {
  const outerList = []
  for (let j = 1; j <= i; j++) {
    const innerList = []
    if (j === 1) {
      innerList.push(1)
    } else {
      for (let k = 0; k < j; k++) {
        innerList.push(k + 1)
      }
    }
    outerList.push(innerList)
  }
  deepTwo.push(outerList)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = 1; i <= 10; i++) {
  const outerList = []
  for (let j = 1; j <= i; j++) {
    let innerList = []
    if (j === 1) {
      innerList.push(1)
    } else {
      let squares = 0
      for (let k = 0; k < j; k++) {
        innerList.push(k + 1)
        squares += Math.pow(k + 1, 2)
      }
      innerList = [squares / j]
    }
    outerList.push(innerList)
  }
  deepThree.push(outerList)
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
