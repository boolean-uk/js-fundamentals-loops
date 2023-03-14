const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

let i
let n
let j

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }
for (i = START; i <= END; i++) {
  simpleOne.push(i)
}
console.log(simpleOne)

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (i = START; i <= END; i++) {
  const innerArray = []

  for (n = 1; n <= i; n++) {
    innerArray.push(i)
  }
  nestedOne.push(innerArray)
}

console.log('q2', nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
// for (i = START; i <= END; i++) {
//   let innerArray = []
//     for (n = i  ; n > 0 ; n--) {
//      if (n === i){
//       innerArray.push(n)
//      }
//      else {
//       innerArray.push(1)
//      }
//     }
//   nestedTwo.push(innerArray)
// }

// console.log("q3", nestedTwo)

for (i = START; i <= END; i++) {
  const innerArray = []
  for (n = i; n > 0; n--) {
    innerArray.push(n)
  }
  nestedTwo.push(innerArray)
}

console.log('q3', nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (i = START; i <= END; i++) {
  const array = []
  for (n = 1; n <= i; n++) {
    const innerArray = []
    for (j = 1; j <= n; j++) {
      innerArray.push(i)
    }
    array.push(innerArray)
  }
  deepOne.push(array)
}

console.log('q4', deepOne)

// practice
// const array1 = ["a", "b"]
// const array2 = [1, 2]
// const array3 = y

// use question 2 answer and create a third for loop using the same method
// this includes using another array within

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (i = START; i <= END; i++) {
  const array = []
  for (n = 1; n <= i; n++) {
    const innerArray = []
    for (j = 1; j <= n; j++) {
      innerArray.push(j)
    }
    array.push(innerArray)
  }
  deepTwo.push(array)
}

console.log('q5', deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (i = START; i <= END; i++) {
  const array = []
  for (n = 1; n <= i; n++) {
    const innerArray = []
    let sum = 0
    let average = 0
    for (j = 1; j <= n; j++) {
      sum += j ** 2
      average = sum / j
    }
    innerArray.push(average)
    array.push(innerArray)
  }
  deepThree.push(array)
}

console.log('q6', deepThree)

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
