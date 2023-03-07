const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array

numsZeroToThree = [1, 2, 3, 4, 5]
for (i = 1; i < 6; i++) {
  numsZeroToThree.push(i)
}

console.log(numsZeroToThree)

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

numsFiveToTen = [5, 6, 7, 8, 9, 10]
for (i = 5; i < 11; i++) {
  numsFiveToTen.push(i)
} 

console.log(numsZeroToThree)

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

evenNums = [0, 2, 4, 6]
for (let i = 1; i < 6; i++) {
  if (i%2 === 0)


  

console.log(evenNums)

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

countdown = [3, 2, 1, 0]

for (i = 3; i < 3; --i)

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
