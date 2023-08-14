const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
for (let i = START; i <= END; i++) {
  simpleOne.push(i);
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
for (let i = START; i <= END; i++) {
  let innerArray = [];
  for (let j = 0; j < i; j++) {
    innerArray.push(i);
  }
  nestedOne.push(innerArray);
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
for (let i = START; i <= END; i++) {
  let innerArray = [];
  for (let j = i; j >= 1; j--) {
    innerArray.push(j);
  }
  nestedTwo.push(innerArray);
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
for (let i = START; i <= END; i++) {
  let innerArray = [];
  for (let j = 1; j <= i; j++) {
    innerArray.push([i]);
  }
  deepOne.push(innerArray);
}

// 5. As 4, update array 'deepTwo' so that the result is:
//    [[[1]],[[1],[1,2]],...]
for (let i = START; i <= END; i++) {
  let innerArray = [];
  for (let j = 1; j <= i; j++) {
    if (j === 1) {
      innerArray.push([i]);
    } else {
      let nestedInnerArray = [i];
      for (let k = 2; k <= j; k++) {
        nestedInnerArray.push(k);
      }
      innerArray.push(nestedInnerArray);
    }
  }
  deepTwo.push(innerArray);
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
for (let i = START; i <= END; i++) {
  let innerArray = [];
  let sumOfSquares = 0; // Initialize the sum of squares for each array
  for (let j = 1; j <= i; j++) {
    if (j === 1) {
      innerArray.push([i]);
      sumOfSquares += i * i; // Add the square of the outer loop index to the sum
    } else {
      let nestedInnerArray = [i];
      for (let k = 2; k <= j; k++) {
        nestedInnerArray.push(k);
        sumOfSquares += k * k; // Add the square of the current loop index to the sum
      }
      innerArray.push(nestedInnerArray);
    }
  }
  // Calculate the average of the sum of squares and push the innerArray to deepThree
  deepThree.push(innerArray.map(arr => arr.map(_ => sumOfSquares / (i * (i + 1) / 2))));
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
