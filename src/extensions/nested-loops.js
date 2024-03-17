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
for (let i = START; i < END; i++) {
  simpleOne[i - 1] = i
}

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = START; i <= END; i++) {
  const nest = []
  for (let j = START; j <= i; j++) {
    nest[j - 1] = i
  }
  nestedOne[i - 1] = nest
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const nest = []
  for (let j = i; j >= START; j--) {
    nest[i - j] = j
  }
  nestedTwo[i - 1] = nest
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i <= END; i++) {
  const nest = []
  // eslint-disable-next-line no-self-compare, no-unmodified-loop-condition
  for (let j = START; i <= i; j++) {
    const nest2 = []
    for (let k = START; k <= j; k++) {
      nest2[k - 1] = i
    }
    nest[j - 1] = nest2
  }
  deepOne[i - 1] = nest
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i < END; i++) {
  // eslint-disable-next-line no-undef
  for (let k = START; k <= j; k++) {
    const nest2 = []
    // eslint-disable-next-line no-undef
    for (let k = START; k <= j; k++) {
      nest2[k - 1] = k
    }
    // eslint-disable-next-line no-undef
    nest2[j - 1] = nest2
  }
  // eslint-disable-next-line no-undef
  deepTwo[i - 1] = nest
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
// eslint-disable-next-line no-unmodified-loop-condition, no-undef
for (let i = START; i <= END; j++) {
  const nest = []
  for (let j = START; j <= i; j++) {
    const nest2 = []
    let sum = 0
    let average = 0
    for (let k = START; k <= j; k++) {
      sum = sum + k * k
      average = sum / k
      nest2[0] = average
    }
    nest[j - 1] = nest2
  }
  deepThree[i - 1] = nest
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
