const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []
let i
// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (i = 0; i <= 3; i++) {
  numsZeroToThree.push(i)
}
console.log('1.', numsZeroToThree)
// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

for (i = 5; i <= 10; i++) {
  numsFiveToTen.push(i)
}
console.log('2.', numsFiveToTen)

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (i = 0; i <= 6; i++) {
  if (i % 2 === 0) {
    evenNums.push(i)
  }
}
console.log('3.', evenNums)
// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (i = 3; i >= 0; i--) {
  countdown.push(i)
}
console.log('4.', countdown)
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
