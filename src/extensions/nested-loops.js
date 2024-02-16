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
for (let i = 1; i < 11; i++) {
  simpleOne.push(i)
}

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 1; i < 11; i++) {
  // const arr = Array(i).fill(i)
  let arr = []
  for (let j = i; j <= i; j++) {
    arr = Array(j).fill(j)
  }
  nestedOne.push(arr)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i < 11; i++) {
  const arr = []
  for (let j = i; j >= 1; j--) {
    arr.push(j)
  }
  nestedTwo.push(arr)
}

// console.log(nestedTwo)
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 1; i < 11; i++) {
  const arr = []
  for (let j = 1; j <= i; j++) {
    arr.push(Array(j).fill(i))
  }
  deepOne.push(arr)
}

// console.log(deepOne)
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 1; i < 11; i++) {
  const arr = []
  for (let j = 1; j <= i; j++) {
    arr.push(Array.from({ length: j }, (_, i) => i + 1))
  }
  deepTwo.push(arr)
}

// console.log(deepTwo)
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let i = 1; i < 11; i++) {
  const arr = []
  for (let j = 1; j <= i; j++) {
    arr.push(Array.from({ length: j }, (_, i) => i + 1))
  }

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i].map((a) => Math.pow(a, 2)).reduce((a, b) => a + b)
    arr[i] = [val / (i + 1)]
  }
  deepThree.push(arr)
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
