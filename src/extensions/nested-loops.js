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

for (let i = 1; i <= END; i++) {
  simpleOne.push(i)
}

// console.log(simpleOne)

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

console.log('Exercise 2')

for (let i = 1; i <= END; i++) {
  const nestArray1 = []
  for (let j = 0; j < i; j++) {
    nestArray1.push(i)
  }
  nestedOne.push(nestArray1)
}

// console.log(nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

console.log('Exercise 3')

for (let i = 1; i <= END; i++) {
  const nestArray2 = []
  for (let j = i; j >= 1; j--) {
    nestArray2.push(j)
  }
  nestedTwo.push(nestArray2)
}

// console.log(nestedTwo)

// // // 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
// // //    eg [[[1]],[[2],[2,2]],...]
console.log('Exercise 4')

// for (let i = 0; i <= END; i++) {
//   let nestArray3 = []
//   let nestArray4 = []
//   for (let j = 0; j <= i; j++) {
//     for (let k = 0; k <= j; k++) {
//       nestArray4.push(i)
//     }
//     nestArray3.push(nestArray4)
//   }
//   deepOne.push(nestArray3)
// }

for (let i = 1; i <= END; i++) {
  const nestArray1 = []
  for (let j = 1; j <= i; j++) {
    const nestArray2 = []
    for (let k = 1; k <= j; k++) {
      nestArray2.push(i)
    }
    nestArray1.push(nestArray2)
  }
  deepOne.push(nestArray1)
}

// console.log(deepOne)
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

console.log('Exercise 5')

for (let i = 1; i <= END; i++) {
  const nestArray1 = []
  for (let j = 1; j <= i; j++) {
    const nestArray2 = []
    for (let k = 1; k <= j; k++) {
      nestArray2.push(k)
    }
    nestArray1.push(nestArray2)
  }
  deepTwo.push(nestArray1)
}

// console.log(deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

console.log('Exercise 6')

for (let i = 1; i <= END; i++) {
  const nestArray1 = []
  for (let j = 1; j <= i; j++) {
    const nestArray2 = []
    for (let k = 1; k <= j; k++) {
      const nestArray3 = []
      let sumOfSq = 0
      let avg = 0
      avg = sumOfSq / k
      for (let l = 1; l <= k; l++) {
        sumOfSq += k ** 2
        // console.log(sumOfSq)
      }
      nestArray3.push(avg)

      //  console.log(nestArray3)

      nestArray2.push(nestArray3)
    }
    nestArray1.push(nestArray2)
  }
  deepThree.push(nestArray1)
}

console.log(deepThree)

// logic here: average of the sum of the squares
// average = sum/number so sum/array.length
// squares = a ** 2

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
