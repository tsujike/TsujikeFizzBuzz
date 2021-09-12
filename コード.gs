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


/**
 * repeatはこの方が短い
*/
function tsujikeFizzBuzz2() {
  const oneHundred = '0'.repeat(101);
  const intArr = Object.keys(oneHundred);
  intArr.shift();

  for (const i of intArr) {
    console.log((['Fizz'][i % 3] || '') + (['Buzz'][i % 5] || '') || i);
  }
}



/**
 * new Array(要素数)はnullで埋めるんだけど、リテラルのnullとは違う
*/
function tsujikeFizzBuzz2021Sep() {

  const oneHundred = new Array(100).fill(0);

  for (const value of Object.keys(oneHundred)) {
    const i = Number(value) + 1;
    console.log((['Fizz'][i % 3] || '') + (['Buzz'][i % 5] || '') || i);
  }

}
