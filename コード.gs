/**
* つじけのFizzBuzzです
* 
* @param {number} start
* @param {number} end
* @return  {array} FizzBuzz
*/
function tsujikeFizzBuzz(start, end) {

  const oneHundred = start.toString().repeat(end + 1);
  const intArr = Object.keys(oneHundred);
  intArr.shift();

  return intArr.map(int => int % 15 ? int % 3 ? int % 5 ? int : 'Buzz' : 'Fizz' : 'FizzBuzz');

}


function myFunction() {

  console.log(tsujikeFizzBuzz(1, 100));

}