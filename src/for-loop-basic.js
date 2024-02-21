const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for(let i = 0;i <= 3;i++){

  numsZeroToThree[i] = i 
  
}
// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

for (let i = 5; i <=10;i++){
  numsFiveToTen[i-5] = i
}

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
let index = -1
for(let i = 0;i < 7;i++){
  if(i%2===0){
    index = index + 1
    evenNums[index]=i   
  }
}
// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
index = 0
for(i=3;i>-1;i--){
  countdown[index]=i
  index++
  console.log(index)
}
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
