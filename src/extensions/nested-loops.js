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
for (let i = START; i < 11; i++) {
  simpleOne.push(i)
}

console.log(simpleOne)

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = START; i < 11; i++) {
  const array = []
  for (let x = 1; x <= i; x++) {
    // console.log(i, x)
    array.push(i)
  }
  nestedOne.push(array)
}

console.log(nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i < 11; i++) {
  const array = []
  for (let x = i; x > 0; x--) {
    array.push(x)
  }
  nestedTwo.push(array)
}

console.log('Q3:', nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i < 11; i++) {
  const arrayToPushAtEnd = []
  for (let n = 1; n <= i; n++) {
    const innerArray = []
    for (let x = 1; x <= n; x++) {
      innerArray.push(i)
    }
    arrayToPushAtEnd.push(innerArray)
  }
  deepOne.push(arrayToPushAtEnd)
}

console.log('Q4:', deepOne)

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i < 11; i++) {
  const arrayToPushAtEnd = []
  for (let n = 1; n <= i; n++) {
    const innerArray = []
    for (let x = 1; x <= n; x++) {
      innerArray.push(x)
    }
    arrayToPushAtEnd.push(innerArray)
  }
  deepTwo.push(arrayToPushAtEnd)
}

console.log('Q5:', deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

// e.g 1 + 4 = 5 ... 5/2 = 2.5
for (let i = START; i < 11; i++) {
  const arrayToPushAtEnd = []
  for (let n = 1; n <= i; n++) {
    const innerArray = []
    let number = 0
    for (let x = 1; x <= n; x++) {
      const numberToAdd = x * x
      number += numberToAdd

      if (x === n) {
        innerArray.push(number / x)
      }
    }
    arrayToPushAtEnd.push(innerArray)
  }
  deepThree.push(arrayToPushAtEnd)
}

console.log('Q6:', deepThree)

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
