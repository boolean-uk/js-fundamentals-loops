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
for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}
console.log('simpleOne :>> ', simpleOne)

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 0; i < simpleOne.length; i++) {
  const num = simpleOne[i]
  console.log('num :>> ', num)
  const arrayOfNum = []
  for (let j = 0; j < num; j++) {
    console.log('    j :>> ', j)
    arrayOfNum.push(num)
    console.log('    arrayOfNum :>> ', arrayOfNum)
  }

  nestedOne.push(arrayOfNum)
}
console.log('nestedOne :>> ', nestedOne)
console.log('q3\n-----------------------------------------')

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 0; i < simpleOne.length; i++) {
  const num = simpleOne[i]
  const listNum = []
  for (let j = 0; j < num; j++) {
    listNum.unshift(j + 1)
  }
  console.log('listNum :>> ', listNum)
  nestedTwo.push(listNum)
}
console.log('nestedTwo :>> ', nestedTwo)

console.log('q4\n-----------------------------------------')
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = 0; i < simpleOne.length; i++) {
  console.log('i :>> ', i)
  const iNum = simpleOne[i]
  const iArray = []
  for (let j = 0; j < iNum; j++) {
    console.log('    j :>> ', j)
    const jNum = j + 1
    const jArray = []
    for (let k = 0; k < jNum; k++) {
      console.log('        k :>> ', k)
      const kNum = iNum
      console.log('        kNum :>> ', kNum)
      // console.log('        kNum :>> ', kNum);
      jArray.push(kNum)
    }
    iArray.push(jArray)
  }
  deepOne.push(iArray)
}
console.log('deepOne :>> ', deepOne)

console.log('q5\n-----------------------------------------')
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = 0; i < simpleOne.length; i++) {
  const iNum = simpleOne[i]
  console.log('iNum :>> ', iNum)
  const iArray = []
  for (let j = 0; j < iNum; j++) {
    const jNum = j + 1
    // console.log('    jNum :>> ', jNum)
    const jArray = []
    for (let k = 0; k < jNum; k++) {
      const kNum = k + 1
      jArray.push(kNum)
    }
    // console.log('    jArray :>> ', jArray);
    iArray.push(jArray)
  }
  deepTwo.push(iArray)
}
console.log('deepTwo :>> ', deepTwo)

console.log('q6\n-----------------------------------------')
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = 0; i < simpleOne.length; i++) {
  const iNum = simpleOne[i]
  const iArray = []
  for (let j = 0; j < iNum; j++) {
    const jNum = j + 1
    let jSum = 0
    for (let k = 0; k < jNum; k++) {
      const kNum = (k + 1) ** 2
      jSum += kNum
    }
    jSum /= jNum
    iArray.push([jSum])
  }
  deepThree.push(iArray)
}
// console.log('deepThree :>> ', deepThree)

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
