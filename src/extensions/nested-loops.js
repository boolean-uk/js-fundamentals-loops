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

for (var i = 1; i < 10; i++)
  simpleOne.push(i)

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (var i = 1; i < simpleOne.length; i++) {
  nestedOne.push([ i ])

  for (var j = 1; j < i; j++)
    nestedOne[i].push(i)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

for (var i = 1; i < simpleOne.length; i++) {
  nestedTwo.push([ i ])

  for (var j = 1; j < i; j++)
    nestedTwo[i].push(j)

  nestedTwo[i].reverse()
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

for (var i = 1; i < simpleOne.length; i++) {
  deepOne.push([[ i ]])

  for (var j = 1; j < i; j++) {
    deepOne[i].push([ i ])

    for (var k = 1; k < j; k++)
      deepOne[i][j].push(i)
  }
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (var i = 1; i < simpleOne.length; i++) {
  deepTwo.push([[ i ]])

  for (var j = 1; j < i; j++) {
    deepTwo[i].push([ j ])

    for (var k = 1; k < j; k++)
    deepTwo[i][j].push(k)
  }
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

deepThree = [...deepTwo]

for (var i = 0; i < deepThree.length; i++) {
  for (var j = 0; j < deepThree[i].length; j++) {
    deepThree[i][j]
  }
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
