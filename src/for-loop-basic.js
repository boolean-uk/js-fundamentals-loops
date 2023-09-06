const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array

// Plan
// we want to add numbers 0 to 3 into array numZeroToThree

for (let i = 0; i < 4; i++) {
  numsZeroToThree.push(i)
  console.log(i)
}
console.log(numsZeroToThree)

// [ 0, 1, 2, 3 ]

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

// Plan
// push numbers 5 to 10 to numsFiveToTen array

for (let i = 5; i <= 10; i++) {
  numsFiveToTen.push(i)
  console.log(i)
}
console.log(numsFiveToTen)
// [ 5, 6, 7, 8, 9, 10 ]

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

// evenNums = [0 ,2, 4, 6]
for (let i = 0; i <= 6; i += 2) {
  evenNums.push(i)
  console.log(i)
}

console.log(evenNums)
// [ 0, 2, 4, 6 ]

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

// countdown = [3, 2, 1, 0]

for (let i = 3; i >= 0; i--) {
  countdown.push(i)
  console.log(i)
}
console.log(countdown)
// [ 3, 2, 1, 0 ]

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
