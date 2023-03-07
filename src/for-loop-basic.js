const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []
let i
// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (i = 0; i < 4; i++) {
  numsZeroToThree.push(i)
}
console.log(numsZeroToThree)

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (i = 5; i < 11; i++) {
  numsFiveToTen.push(i)
}
console.log(numsFiveToTen)

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (i = 0; i < 8; i += 2) {
  evenNums.push(i)
}
console.log(evenNums)

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (i = 3; i > -1; i--) {
  countdown.push(i)
}
console.log(countdown)

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
