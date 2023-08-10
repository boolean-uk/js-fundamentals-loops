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
for (let i = START; i <= END; i++) {
  const tmp = []
  for (let j = START; j <= i; j++) {
    tmp.push(i)
  }
  nestedOne.push(tmp)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const tmp = []
  for (let j = i; j >= START; j--) {
    tmp.push(j)
  }
  nestedTwo.push(tmp)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i <= END; i++) {
  const tmp1 = []
  for (let j = START; j <= i; j++) {
    const tmp2 = []
    for (let k = j; k > 0; k--) {
      tmp2.push(i)
    }
    tmp1.push(tmp2)
  }
  deepOne.push(tmp1)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i <= END; i++) {
  const tmp1 = []
  for (let j = START; j <= i; j++) {
    const tmp2 = []
    for (let k = START; k <= j; k++) {
      tmp2.push(k)
    }
    tmp1.push(tmp2)
  }
  deepTwo.push(tmp1)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = START; i <= END; i++) {
  const tmp1 = []
  for (let j = START; j <= i; j++) {
    let sum = 0
    const tmp2 = []
    for (let k = START; k <= j; k++) {
      sum += Math.pow(k, 2)
      if (k === j) {
        tmp2.push(sum / k)
      }
    }
    tmp1.push(tmp2)
  }
  deepThree.push(tmp1)
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
