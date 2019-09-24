import request from 'request';
import { sum, subtract } from './calc';

interface HomePlanet {
  name: string;
}

interface Person {
  name: string;
  homeworld: string;
}

interface Res<T> extends request.Response {
  data: T;
}

interface PersonWithHomeWorld extends Person {
  homePlanet: HomePlanet;
}

// // Oef 1
// console.log('start oefening 1');

// waitASecond('peter', (arg: any) => {
//   console.log('done', arg);
// });

// function waitASecond(arg: any, cb: any) {
//   // implement me
//   setTimeout(() => {
//     cb(arg);
//   }, 1000);
// }

// ----------------------------------------------

// // Oef 2
// console.log('start oefening 2');
// countDown('peter', 5, (arg: string, cnt: number, end: boolean) => {
//   console.log(`ready ${arg}: `, cnt);
//   if (end) {
//     console.log(`done`);
//   }
// });

// function countDown(arg: string, cnt: number, cb: (arg: string, cnt: number, end: boolean) => void) {
//   // implement me
//   if (cnt !== 0) {
//     setTimeout(() => {
//       cb(arg, cnt, cnt === 1);
//       countDown(arg, --cnt, cb);
//     }, 1000);
//   }
// }

//-------------------------------------------------

// // Oef 3
// // from SWAPI api get person with id 1

// //
// // add your code here
// //
// request('https://swapi.co/api/people/1', (error: any, response: request.Response, body: string) => {
//   console.log(JSON.parse(body)['name']);
// });

// --------------------------------------------------

// function getHomePlanetById(peopleId: number, callback: (err: string, planet: string) => void) {
//   //
//   // implement me
//   //

//   request('https://swapi.co/api/people/' + peopleId, (error: any, response: request.Response, body: string) => {
//     if (response.statusCode !== 200) {
//       callback('Person not found', '');
//       return;
//     }

//     const people = JSON.parse(body);

//     request(people['homeworld'], (error: any, response: request.Response, body: string) => {
//       if (response.statusCode !== 200) {
//         callback('Home world not found', '');
//       }

//       callback(error, JSON.parse(body)['name']);
//     });
//   });
// }

// getHomePlanetById(1, (err: string, planet: string) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(planet);
// });

// -----------------------------------------------------------

// function getNameById(peopleId: number, timeout: number, callback: (err: string, name: string) => void) {

//   implement me.

//   const timer = setTimeout(() => {
//     callback('Timed out', '');
//   }, timeout);

//   request('https://swapi.co/api/people/' + peopleId, (error: any, response: request.Response, body: string) => {
//     if (response.statusCode !== 200) {
//       callback('Person not found', '');
//       return;
//     }
//     clearTimeout(timer);
//     callback(error, JSON.parse(body)['name']);
//   });
// }

// use the function
// getNameById(1, 300, (err: string, name: string) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(name);
// });

// ----------------------------------------------------

// // oef 1 Promise
// const timeoutp = function(timer: number, returnValue: string) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       resolve(returnValue);
//     }, timer);
//   });
// };
// timeoutp(1000, 'Done')
//   .then(result => {
//     console.log(result);
//     return timeoutp(1000, 'finished');
//   })
//   .then(result => {
//     console.log(result);
//   });

// --------------------------------

// // Oef 2 Promise

function httpGet<T>(url: string): Promise<Res<T>> {
  //
  // implement me
  // return a Promise!
  //
  return new Promise((resolve, reject) => {
    request(url, (error: Error, response: request.Response, body: string) => {
      if (response.statusCode !== 200) {
        reject(new Error('Person not found'));
        return;
      }
      const data: T = JSON.parse(response.body);
      const httpReturnValue: Res<T> = Object.assign(response, {
        data,
      });
      resolve(httpReturnValue);
    });
  });
}

// httpGet<Person>('https://swapi.co/api/people/1')
//   .then(res => {
//     // make sure the body is parsed to an object
//     console.log(res.data.name);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// -----------------------------------------------------

// // Oef 3 promise
// function getPersonAndHomeWorldById(peopleId: number): Promise<PersonWithHomeWorld> {
//   //
//   // implement me
//   //
//   const urlPerson = 'https://swapi.co/api/people/' + peopleId;

//   return httpGet<Person>(urlPerson).then(res => {
//     const person = res.data;
//     return httpGet<HomePlanet>(person.homeworld).then(value2 => {
//       const personWithHomeWorld: PersonWithHomeWorld = {
//         name: person.name,
//         homeworld: person.homeworld,
//         homePlanet: {
//           name: value2.data.name,
//         },
//       };

//       return personWithHomeWorld;
//     });
//   });
// }

// getPersonAndHomeWorldById(1).then(person => {
//   console.log(person.name);
//   console.log(person.homePlanet.name);
// });

// ----------------------------------------------

// // oef 4 Promise
function expire(tmt: number): Promise<any> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('timed out!'));
    }, tmt);
  });
}

// function getNameByIdP<T>(timeout: number, peopleId: number): Promise<string> {
//   //
//   // implement me
//   //
//   return Promise.race<string>([
//     httpGet<any>('https://swapi.co/api/people/' + peopleId).then(resp => resp.data.name),
//     expire(timeout),
//   ]);
// }

// getNameByIdP<Person>(100, 1)
//   .then(name => {
//     console.log(name);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ------------------------------------------------------

// oef 1 async/await
async function getPersons(timout: number, personIds: number): Promise<Person>;
async function getPersons(timout: number, ...personIds: number[]): Promise<Person[]>;
async function getPersons(timout: number, ...personIds: number[]): Promise<Person[] | Person> {
  const promises = personIds.map(id => httpGet<Person>(`https://swapi.co/api/people/${id}`).then(res => res.data));

  const persons = await Promise.race<Person[]>([Promise.all(promises), expire(timout)]);
  if (persons.length === 1) {
    return persons[0];
  }
  return persons;
}

// const timeout = 50;
// getPersons(timeout, 1, 2)
//   .then(persons => {
//     for (const person of persons) {
//       console.log(`Persons: ${person.name}`);
//     }
//   })
//   .catch(err => console.log(err));

getPersons(50, 1)
  .then(pers => {
    console.log(pers.name);
  })
  .catch(err => console.log(err));
