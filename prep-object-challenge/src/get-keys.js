/* exported getKeys */
function getKeys(object) {
  const myArray = [];
  for (const key in object) {
    myArray.push(key);
  }
  return myArray;
}
