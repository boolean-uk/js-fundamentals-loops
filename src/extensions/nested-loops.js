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

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = START; i <= END; i++) {
  const array = []

  for (let n = 1; n <= i; n++) {
    array.push(i)
  }
  nestedOne.push(array)
}
console.log('Answer two', nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

for (let i = START; i <= END; i++) {
  const array = []

  for (let n = i; n >= 1; n--) {
    array.push(n)
  }
  nestedTwo.push(array)
}
console.log('Answer Three', nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

for (let i = START; i <= END; i++) {
  const array = []

  for (let n = 1; n <= i; n++) {
    const array2 = []
    for (let p = 1; p <= n; p++) {
      array2.push(i)
    }
    array.push(array2)
  }
  deepOne.push(array)
}

console.log('Answer Four', deepOne)

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (let i = START; i <= END; i++) {
  const array = []

  for (let n = 1; n <= i; n++) {
    const array2 = []

    for (let p = 1; p <= n; p++) {
      array2.push(p)
    }
    array.push(array2)
  }
  deepTwo.push(array)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = START; i <= END; i++) {
  const array = []

  for (let n = 1; n <= i; n++) {
    const array2 = []
    let sum = 0

    for (let p = 1; p <= n; p++) {
      sum += p ** 2
      array2.push(p)
    }
    array.push([sum / array2.length])
  }

  deepThree.push(array)
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
