const person = {
  firstName: 'Ahmad',
  lastName: 'El-Mowafy',
  hobby: 'coding',
};

const fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Neurosurgeon';
console.log("The person's current job is:", person.job);

person.previousJob = 'Prime Minister';
console.log("The person's previous job is:", person.previousJob);

console.log(person);
