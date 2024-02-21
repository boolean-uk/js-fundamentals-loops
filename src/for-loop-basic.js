const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for(let i = 0; i < 4; i++){
  numsZeroToThree[i] = i
}
// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
let j = 0
for(let i = 5; i < 11; i++){
  numsFiveToTen[j] = i
  j++
}
// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
j = 0
for(let i = 0; i < 7; i++){
  if (i%2 === 0){
    evenNums[j] = i
    j++
  }
}

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
j=0
for(let i = 3; i >= 0 ; i--){
  countdown[j] =i
  j++
}
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
