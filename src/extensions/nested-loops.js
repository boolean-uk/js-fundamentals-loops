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
// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = START; i <= END; i++) {
  const array = []
  for (let j = START; j <= i; j++) {
    array.push(i)
  }
  nestedOne.push(array)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const array = []
  for (let j = i; j >= 1; j--) {
    array.push(j)
  }
  nestedTwo.push(array)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i <= END; i++) {
  const array = []
  for (let j = 1; j <= i; j++) {
    const array2 = []
    for (let x = 1; x <= j; x++) {
      array2.push(i)
    }
    array.push(array2)
  }
  deepOne.push(array)
}
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i <= END; i++) {
  const array = []
  for (let j = 1; j <= i; j++) {
    const array2 = []
    for (let x = 1; x <= j; x++) {
      array2.push(x)
    }
    array.push(array2)
  }
  deepTwo.push(array)
}
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = START; i <= END; i++) {
  const array = []
  for (let j = 1; j <= i; j++) {
    const array2 = []
    let squares = 0
    for (let x = 1; x <= j; x++) {
      squares = squares + x ** 2
      array2.push(x)
    }
    array.push([squares / array2.length])
  }
  deepThree.push(array)
}

console.log(deepThree[3][3])
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
