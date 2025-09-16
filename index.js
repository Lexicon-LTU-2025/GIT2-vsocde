const firstName = 'Johan';
const lastName = 'Johansson';
const fullname = `${firstName} ${lastName}`;

console.log('Name:', fullname);
console.log('Firstname and Lastname:', firstName, lastName);

const greet = (fullname) => {
  const isPerson = true;

  console.log(`Hello! Are you: ${fullname}. Is a person: ${isPerson}`)
}
