const os = require('os');
const fs = require('fs');
const { timeStamp } = require('console');

const people = [];
const gender = ['M', 'F'];
const firstnamesMale = ['Marek', 'Daniel', 'Paweł', 'Oskar'];
const firstnamesFemale = ['Gosia', 'Zosia', 'Magda', 'Ania'];
const lastnames = ['Smith', 'Gump', 'Mercury'];
const age = [18, 78];
const times = [];

for (let step = 0; step < 20; step++) {
  times.push(step);
}

times.map(() => {
  const person = {};
  person.gender = gender[Math.floor(Math.random() * gender.length)];

  function namesByGender(genderType) {
    const firstnameFemale =
      firstnamesFemale[Math.floor(Math.random() * firstnamesFemale.length)];
    const firstnameMale =
      firstnamesMale[Math.floor(Math.random() * firstnamesMale.length)];

    switch (genderType) {
      case 'M':
        person.firstname = firstnameMale;
        return person.firstname;
      case 'F':
        person.firstname = firstnameFemale;
        return person.firstname;
    }
  }

  namesByGender(person.gender);

  person.lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
  person.age = Math.floor(Math.random() * (age[1] - age[0] + 1)) + age[0];
  people.push(person);
});

console.log(people);

var exportData = JSON.stringify(people);

fs.writeFile('people.json', exportData, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
