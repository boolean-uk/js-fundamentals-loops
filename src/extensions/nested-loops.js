const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of (10 - 'loop index') to the array 'simpleOne'
//    eg [1,2,...]

// HINT: Loop needs to be changed
for (let i = 1; i < 11; i++) {
  // Your code here
  simpleOne.push(i)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = 1; i <= 10; i++) {
  const arr = []
  for (let j = 0; i > j; j++) {
    arr.push(i)
  }
  nestedOne.push(arr)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i <= 10; i++) {
  const q3nest = []
  for (let j = i; j > 0; j--) {
    q3nest.push(j)
  }
  nestedTwo.push(q3nest)
}

// console.log(nestedTwo)
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 1; i <= 10; i++) {
  const deepArr1 = []
  for (let j = 0; i > j; j++) {
    const deepArr2 = []
    for (let k = -1; j > k; k++) {
      deepArr2.push(i)
    }
    deepArr1.push(deepArr2)
  }
  deepOne.push(deepArr1)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 1; i <= 10; i++) {
  const deepArr1 = []
  for (let j = 0; i > j; j++) {
    const deepArr2 = []
    for (let k = 1; j + 2 > k; k++) {
      deepArr2.push(k)
    }
    deepArr1.push(deepArr2)
  }
  deepTwo.push(deepArr1)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = 1; i <= 10; i++) {
  const deepArr1 = []
  for (let j = 0; i > j; j++) {
    const deepArr2 = []
    for (let k = 1; j + 2 > k; k++) {
      deepArr2.push(k)
    }
    let result = 0
    for (let m = 0; m < deepArr2.length; m++) {
      result += deepArr2[m] ** 2
    }
    result /= deepArr2.length
    deepArr1.push([result])
  }
  deepThree.push(deepArr1)
}

console.log(deepThree)

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
