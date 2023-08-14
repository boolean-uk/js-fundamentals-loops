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
for (let index = START; index <= END; index++) {
  simpleOne.push(index)
}
// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let index1 = START; index1 <= END; index1++) {
  const array = []
  for (let index2 = 1; index2 <= index1; index2++) {
    array.push(index1)
  }
  nestedOne.push(array)
}
// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let index1 = START; index1 <= END; index1++) {
  const array = []
  for (let index2 = index1; index2 >= 1; index2--) {
    array.push(index2)
  }
  nestedTwo.push(array)
}
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let index1 = START; index1 <= END; index1++) {
  const outer = []
  for (let index2 = 1; index2 <= index1; index2++) {
    const inner = []
    for (let index3 = 1; index3 <= index2; index3++) {
      inner.push(index1)
    }
    outer.push(inner)
  }
  deepOne.push(outer)
}
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let index1 = START; index1 <= END; index1++) {
  const outer = []
  for (let index2 = 1; index2 <= index1; index2++) {
    const inner = []
    for (let index3 = 1; index3 <= index2; index3++) {
      inner.push(index3)
    }
    outer.push(inner)
  }
  deepTwo.push(outer)
}
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let index1 = START; index1 <= END; index1++) {
  const outer = []
  for (let index2 = 1; index2 <= index1; index2++) {
    let sum = 0
    for (let index3 = 1; index3 <= index2; index3++) {
      sum += index3 * index3
    }
    const gemiddelde = sum / index2
    outer.push([gemiddelde])
  }
  deepThree.push(outer)
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
