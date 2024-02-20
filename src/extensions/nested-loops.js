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

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = START; i <= END; i++) {
  const nestedArr = []
  for (let j = 0; j < i; j++) {
    nestedArr.push(i)
  }
  nestedOne.push(nestedArr)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

for (let i = START; i <= END; i++) {
  const nestedArr = []
  for (let j = i; j > 0; j--) {
    nestedArr.push(j)
  }
  nestedTwo.push(nestedArr)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

for (let i = START; i <= END; i++) {
  const innerArr = []
  for (let j = 1; j <= i; j++) {
    const nestedArr = []
    for (let k = 0; k < j; k++) {
      nestedArr.push(i)
    }
    innerArr.push(nestedArr)
  }
  deepOne.push(innerArr)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (let i = START; i <= END; i++) {
  const innerArr = []
  for (let j = 1; j <= i; j++) {
    const nestedArr = []
    for (let k = 1; k <= j; k++) {
      nestedArr.push(k)
    }
    innerArr.push(nestedArr)
  }
  deepTwo.push(innerArr)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = 1; i <= 10; i++) {
  const innerArr = []
  for (let j = 1; j <= i; j++) {
    const nestedArr = []
    let sum = 0
    for (let k = 1; k <= j; k++) {
      sum += k * k
    }
    nestedArr.push(sum / j)
    innerArr.push(nestedArr)
  }
  deepThree.push(innerArr)
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
