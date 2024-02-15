const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = 0; j < i; j++) {
    innerArray.push(i)
  }
  nestedOne.push(innerArray)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = i; j >= 1; j--) {
    innerArray.push(j)
  }
  nestedTwo.push(innerArray)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = 1; j <= i; j++) {
    const subArray = []
    for (let k = 0; k < j; k++) {
      subArray.push(i)
    }
    innerArray.push(subArray)
  }
  deepOne.push(innerArray)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = 1; j <= i; j++) {
    const subArray = []
    for (let k = 1; k <= j; k++) {
      subArray.push(k)
    }
    innerArray.push(subArray)
  }
  deepTwo.push(innerArray)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = 1; j <= i; j++) {
    let sumOfSquares = 0
    for (let k = 1; k <= j; k++) {
      sumOfSquares += k * k
    }
    const average = sumOfSquares / j
    innerArray.push([average])
  }
  deepThree.push(innerArray)
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
