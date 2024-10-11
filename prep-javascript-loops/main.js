// create your loops here.
function whileLoop1() {
  let newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i);
    i++;
  }
  return newArray;
}

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  let newArray = [];
  let i = 0;
  while (i <= 18) {
    newArray.push(i);
    i += 2;
  }
  return newArray;
}

const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  let newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}

const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time to explosion:', i);
  }
}

forLoop2();

const person = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  let newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  let newArray = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
