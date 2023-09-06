const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for(a=0;a<=3;a++)  numsZeroToThree.push(a) ;
console.log(numsZeroToThree);
// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for(b=5;b<=10;b++)  numsFiveToTen.push(b) ;
console.log(numsFiveToTen);
// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for(c=0;c<=6;c++) if(c%2===0)evenNums.push(c) ;
console.log(evenNums);

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for(d=3;d>=0;d--) countdown.push(d) ;
console.log(countdown);
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
