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
// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = 0; j < i; j++) {
    innerArray.push(i)
  }
  nestedOne.push(innerArray)
}
// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let j = i; j >= 1; j--) {
    innerArray.push(j)
  }
  nestedTwo.push(innerArray)
}
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i <= END; i++) {
  const innerArray = [];
  for (let j = START; j <= i; j++) {
    const subArray = [];
    for (let k = START; k <= j; k++) {
      subArray.push(i);
    }
    innerArray.push(subArray);
  }
  deepOne.push(innerArray);
}
console.log("deep one")
console.log(deepOne)


// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (let i = START; i <= END; i++) {
  const innerArray = [];
  for (let j = START; j <= i; j++) {
    const subArray = [];
    for (let k = START; k <= j; k++) {
      subArray.push(k);
    }
    innerArray.push(subArray);
  }
  deepTwo.push(innerArray);
}
console.log("deep two ")
console.log(deepTwo)


// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
const cumulativeSumSquaredArray = simpleOne.map((current, index) => {
  const subArray = simpleOne.slice(0, index + 1);
  const sumSquared = subArray.reduce((acc, num) => acc + num ** 2, 0);
  return sumSquared;
});


console.log(cumulativeSumSquaredArray)

for (let i = START; i <= END; i++) {
  const innerArray = [];
  for (let j = START; j <= i; j++) {
    const subArray = [];
    for (let k = START; k <= j; k++) {
      let avg = 0;
      avg = cumulativeSumSquaredArray[k-1] / k
      subArray.push([avg])
    }
    innerArray.push(subArray);
  }
  deepThree.push(innerArray[innerArray.length -1]);
}

console.log("deep three  ")
console.log(deepThree)

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
