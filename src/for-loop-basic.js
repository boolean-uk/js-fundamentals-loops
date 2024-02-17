const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let i = 0; i <= 3; i++) {
  numsZeroToThree.push(i)
}
console.log('num 0-3: ', numsZeroToThree)
// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let j = 5; j <= 10; j++) {
  numsFiveToTen.push(j)
}
console.log('num 5-10: ', numsFiveToTen)
// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (let e = 0; e <= 6; e++) {
  if (e % 2 === 0) {
    evenNums.push(e)
  }
}
console.log('even nums 0-6: ', evenNums)
// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let c = 3; c >= 0; c--) {
  countdown.push(c)
}
console.log('countdown 3 - 0: ', countdown)
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
