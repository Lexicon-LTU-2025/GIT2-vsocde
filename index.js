const firstName = 'Johan';
const lastName = 'Johansson';
const fullname = `${firstName} ${lastName}`;

const greet = (name) => {
  console.log(`Hello stranger, are you the one called: ${name}?`);
};

greet(fullname);
