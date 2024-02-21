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
  const innerNestedOne = []
  for (let j = 0; j < i; j++) {
    innerNestedOne.push(i)
  }
  nestedOne.push(innerNestedOne)
}
// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const innerNestedTwo = []
  for (let j = i; j >= 1; j--) {
    innerNestedTwo.push(j)
  }
  nestedTwo.push(innerNestedTwo)
}
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i <= END; i++) {
  const innerOne = []
  const innerTwo = []
  // loop from 1 to the current value of i
  for (let j = 1; j <= i; j++) {
    // push current value into innerOne
    innerOne.push(i)
    // create a copy of innerOne and push it into inneTwo
    innerTwo.push([...innerOne])
  }
  deepOne.push(innerTwo)
}
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i <= END; i++) {
  const inner = []
  // loop from 1 to the current value of i
  for (let j = 1; j <= i; j++) {
    const subInner = []
    // loop from 1 to j and push each value into subInner
    for (let k = 1; k <= j; k++) {
      subInner.push(k)
    }
    // push a copy of subInner into inner
    inner.push([...subInner])
  }
  deepTwo.push(inner)
}
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

const temp = []
for (let i = START; i <= END; i++) {
  const inner = []
  let sum = 0
  // Calculate the sum of squares of numbers from 1 to 'i'
  for (let j = 1; j <= i; j++) {
    sum += j * j
  }
  // Calculate the average of the sum of squares
  const average = sum / i
  inner.push(average)
  temp.push([...inner])
  deepThree.push([...temp])
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
