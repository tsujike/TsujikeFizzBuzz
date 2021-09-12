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
 * repeat()
*/
function tsujikeFizzBuzz2() {
  const oneHundred = '0'.repeat(101);
  const intArr = Object.keys(oneHundred);
  intArr.shift();

  for (const i of intArr) {
    console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
  }
}


/**
 * padStart()
*/
function tsujikeFizzBuzz() {
  const oneHundred = '0'.padStart(101, '0');
  const intArr = Object.keys(oneHundred);
  intArr.shift();

  for (const i of intArr) {
    console.log(i % 15 ? i % 3 ? i % 5 ? i : 'Buzz' : 'Fizz' : 'FizzBuzz') 
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



/**
 * 1行で書くなら
*/
function fizzBuzzOneLiner1() {
  for (let i = 1; i <= 100; i++) { console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i) }
}


function fizzBuzzOneLiner2() {
  for (let i = 1; i <= 100; i++) { console.log(i % 15 ? i % 3 ? i % 5 ? i : 'Buzz' : 'Fizz' : 'FizzBuzz') }
}


function fizzBuzzOneLiner3() {
  for (const value of Object.keys(new Array(100).fill(0))) { console.log((['Fizz'][(Number(value) + 1) % 3] || '') + (['Buzz'][(Number(value) + 1) % 5] || '') || Number(value) + 1) }

} 
