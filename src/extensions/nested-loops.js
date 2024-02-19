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
for (let i = 1; i <= 10; i++) {
  simpleOne.push(i)
}
console.log('simleOne:', simpleOne)

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    for (let k = 0; k < 10; k++) {
      nestedOne.push([])
    }
  }
  for (let j = i; j <= 10; j++) {
    nestedOne[j - 1].push(j)
  }
}

console.log('nestedOne[9]:', nestedOne[9])
console.log('nestedOne[2]:', nestedOne[2])
// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i <= 10; i++) {
  nestedTwo[i - 1] = []
  for (let j = i; j > 0; j--) {
    nestedTwo[i - 1].push(j)
  }
}

console.log('nestedTwo[9]:', nestedTwo[9])
console.log('nestedTwo[2]:', nestedTwo[2])
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 1; i <= 10; i++) {
  deepOne.push([])
  for (let j = i; j > 0; j--) {
    const array = []
    for (let k = 1; k <= j; k++) {
      array.push(i)
    }
    deepOne[i - 1].unshift(array)
  }
}
console.log('deepOne[0]:', deepOne[0])
console.log('deepOne[1]:', deepOne[1])
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 1; i <= 10; i++) {
  deepTwo.push([])
  for (let j = i; j > 0; j--) {
    const array = []
    for (let k = 1; k <= j; k++) {
      array.push(k)
    }
    deepTwo[i - 1].unshift(array)
  }
}
console.log('deepTwo[1][0]:', deepTwo[1][0])
console.log('deepTwo[1][1]:', deepTwo[1][1])
console.log('deepTwo[4][3]:', deepTwo[4][3])
console.log('deepTwo[4][2]:', deepTwo[4][2])

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array => [1 2 3} turns into [1*1 + 2*2 + 3*3 = 14/arr.length] => deepThree[2][2][[4,666...]
//       [[1],[[1],[2.5]],...]
for (let i = 1; i <= 10; i++) {
  deepThree.push([])
  for (let j = i; j > 0; j--) {
    const array = []
    for (let k = 1; k <= j; k++) {
      array.push(k)
    }
    let averageSum = 0
    array.forEach((num) => {
      averageSum += Math.pow(num, 2)
    })
    deepThree[i - 1].unshift([averageSum / array.length])
  }
}
console.log('deepThree[1]:', deepThree[1])
console.log('deepThree[1][0]:', deepThree[1][0])
console.log('deepThree[1][1]:', deepThree[1][1])
console.log('deepThree[2][0]:', deepThree[2][0])
console.log('deepThree[9][0]:', deepThree[9][0])
console.log('deepThree[0].length:', deepThree[0].length)

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
