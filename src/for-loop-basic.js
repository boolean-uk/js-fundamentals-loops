const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let i = 0; i < 4; i++) {
  numsZeroToThree.push(i)
}
console.log(numsZeroToThree)

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let b = 5; b < 11; b++) {
  numsFiveToTen.push(b)
}
console.log(numsFiveToTen)

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (let e = 0; e < 7; e += 2) {
  evenNums.push(e)
}
console.log(evenNums)
// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let a = 0; a < 4; a++) {
  countdown.unshift(a)
}
console.log(countdown)
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
