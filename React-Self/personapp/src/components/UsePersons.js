import React, { useState } from 'react';

const usePersons = () => {
  const [personList, setPersonsList] = useState([]);
  const [errors, setErrors] = useState();
  let errors2;

  const _validate = newPerson => {
    if (newPerson.name.length < 3) {
      errors2 = { ...errors2, invalidName: 'Name must contain at least 3 characters' };
    }

    let isValid = false;

    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = re.test(String(newPerson.email).toLowerCase());

    if (isValid === false) {
      errors2 = { ...errors2, invalidMail: 'Not a valid email address.' };
    }

    if (newPerson.age < 18) {
      errors2 = { ...errors2, invalidAge: 'Must be older then 17.' };
    }

    if (newPerson.birthday === '') {
      errors2 = { ...errors2, invalidBirthday: 'Please give birthday date.' };
    }
  };

  const _HandleAddPerson = newP => {
    _validate(newP);
    setErrors(errors2);

    if (errors2) return;

    return setPersonsList([...personList, newP]);
  };

  return [personList, _HandleAddPerson, errors];
};

export default usePersons;
