import getPersons from './getPersons';

getPersons(1000, 1).then(() => {});

getPersons(5000, 2, 3).then(persons => {
  persons.forEach(() => {});
});
