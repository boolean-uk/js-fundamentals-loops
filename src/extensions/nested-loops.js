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
for(let i = START; i <= END; i++)
  simpleOne.push(i)

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for(let a = START; a <= END; a++){
  nestedOne.push(new Array(a));
  for(let b = 0; b < a; b++)
    nestedOne[a-1][b] = a 
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for(let a = START; a <= END; a++){
  nestedTwo.push(new Array(a));
  for(let b = 0; b < a; b++)
    nestedTwo[a-1][b] = a - b
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for(let a = 0; a < 10; a++){
  deepOne[a] = new Array(a+1);
  for(let b = 0; b <= a; b++){
    deepOne[a][b] = new Array(b+1);
    for(let c = 0; c <= b; c++){
      deepOne[a][b][c] = a+1
    }
  }
}


// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for(let a = 0; a < 10; a++){
  deepTwo[a] = new Array(a+1);
  for(let b = 0; b <= a; b++){
    deepTwo[a][b] = new Array(b+1);
    for(let c = 0; c <= b; c++){
      deepTwo[a][b][c] = c+1
    }
  }
}


// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],
//       [[1],[2.5]],
//       [[1],[2.5],[4.67]]...]
for(let a = 0; a < 10; a++){
  deepThree[a] = new Array(a+1);
  for(let b = 0; b <= a; b++){
    deepThree[a][b] = new Array(1);
    let sumOfSquares = 0
    for(let c = 0; c <= b; c++){
      sumOfSquares += (c+1)**2
    }
    deepThree[a][b][0] = sumOfSquares / (b+1)
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
