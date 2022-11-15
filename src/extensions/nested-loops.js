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

for (let i = 1; i <= 10; i++) {
  simpleOne.push(i)
}

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = 1; i <= 10; i++) {
  const newArray = []
  for (let j = i; j < i * 2; j++) {
    newArray.push(i)
  }
  nestedOne.push(newArray)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

for (let i = 1; i <= 10; i++) {
  const newArray = []
  for (let j = i; j > 0; j--) {
    newArray.push(j)
  }
  nestedTwo.push(newArray)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

for (let first = 1; first <= 10; first++) {
  const finalArrays = []
  const firstArrays = []
  for (let second = 0; second < first; second++) {
    const secondArrays = []
    firstArrays.push(first)
    for (let third = -1; third < second; third++) {
      secondArrays.push(first)
    }
    finalArrays.push(secondArrays)
  }
  deepOne.push(finalArrays)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (let first = 1; first <= 10; first++) {
  const finalArrays = []
  const firstArrays = []
  for (let second = 0; second < first; second++) {
    const secondArrays = []
    firstArrays.push(first)
    for (let third = 1; third - 2 < second; third++) {
      secondArrays.push(third)
    }
    finalArrays.push(secondArrays)
  }
  deepTwo.push(finalArrays)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let first = 1; first <= 10; first++) {
  const finalArrays = []
  const firstArrays = []
  const firstChars = first * first

  for (let second = 0; second < first; second++) {
    const secondArrays = []
    firstArrays.push(firstChars)
    for (let third = 1; third - 2 < second; third++) {
      const secondChars = third * third
      secondArrays.push(secondChars)
    }
    let sum = 0
    for (let i = 0; i < secondArrays.length; i++) {
      sum = sum + secondArrays[i]
    }
    const sum2 = sum / secondArrays.length
    finalArrays.push([sum2])
  }
  deepThree.push(finalArrays)
}
console.log(deepThree)


// for (let i = 1; i <= 10; i++) {
//   const arrayOne = []
//   for (let j = 0; i > j; j++) {
//     const arrayTwo = []
//     for (let k = 1; j + 2 > k; k++) {
//       arrayTwo.push(k)
//     }
//     let result = 0
//     for (let m = 0; m < arrayTwo.length; m++) {
//       result += arrayTwo[m] ** 2
//     }
//     result /= arrayTwo.length
//     arrayOne.push([result])
//   }
//   deepThree.push(arrayOne)
// }
// console.log(deepThree)


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
