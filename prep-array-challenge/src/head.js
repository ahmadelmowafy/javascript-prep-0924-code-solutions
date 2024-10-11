/* exported head */
function head(array) {
  return array[0];
}

function last(array) {
  return array[array.length - 1];
}

function tail(array) {
  const myArray = [];
  for (let i = 1; i < array.length; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}

function initial(array) {
  const myArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}

function reverse(array) {
  const myArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    myArray.push(array[i]);
  }
  return myArray;
}

function compact(array) {
  const myArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      myArray.push(array[i]);
    }
  }
  return myArray;
}
