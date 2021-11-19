const os = require('os');
const fs = require('fs');

const people = [];

function randoGender() {
  const gender = ['M', 'F'];
  return gender[Math.floor(Math.random() * gender.length)];
}

function namesByGender(gender) {
  const firstnamesMale = ['Marek', 'Daniel', 'Paweł', 'Oskar'];
  const firstnamesFemale = ['Gosia', 'Zosia', 'Magda', 'Ania'];
  let name = '';
  switch (gender) {
    case 'M':
      return firstnamesMale[Math.floor(Math.random() * firstnamesMale.length)];
    case 'F':
      return firstnamesFemale[
        Math.floor(Math.random() * firstnamesFemale.length)
      ];
  }
}

function randoLastname() {
  const lastnames = ['Smith', 'Gump', 'Mercury'];
  return lastnames[Math.floor(Math.random() * lastnames.length)];
}

function randoAge() {
  const age = [18, 78];
  return Math.floor(Math.random() * (age[1] - age[0] + 1)) + age[0];
}

function randoTelephoneNumber() {
  const extremeNumbers = [000000001, 999999999];
  const number =
    Math.floor(Math.random() * (extremeNumbers[1] - extremeNumbers[0] + 1)) +
    extremeNumbers[0];
  return `+48 ${number.toLocaleString()}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function randoEmail(name, lastname) {
  const reverseName = reverseString(name);
  const email = `${name}.${lastname}@${reverseName}.com`;
  return email.toLowerCase();
}

for (let step = 0; step < 20; step++) {
  const gender = randoGender();
  const name = namesByGender(gender);
  const lastname = randoLastname();
  const age = randoAge();
  const telephon = randoTelephoneNumber();
  const email = randoEmail(name, lastname);

  const person = {
    gender: gender,
    firstname: name,
    lastname: lastname,
    age: age,
    telephon: telephon,
    email: email,
  };

  people.push(person);
}

console.log(people);

const exportData = JSON.stringify(people);

fs.writeFile('people.json', exportData, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
