/* exported getValues */
function getValues(object) {
  const myArray = [];
  for (const key in object) {
    myArray.push(object[key]);
  }
  return myArray;
}
