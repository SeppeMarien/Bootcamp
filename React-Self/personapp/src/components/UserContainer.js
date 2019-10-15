import React, { Fragment, useState } from 'react';
import UsersTable from './UsersTable';
import UserForm from './UserForm';
import usePersons from './UsePersons';

const UserContainer = () => {
  const defaultPerson = {
    id: 0,
    name: '',
    email: '',
    age: 0,
    birthday: '',
    married: false,
  };

  const [personsList, _handleAddPersons, errors] = usePersons();
  const [newPerson, setNewPerson] = useState(defaultPerson);

  const _onFormChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setNewPerson({
      ...newPerson,
      [name]: value,
    });
  };

  const _addUser = e => {
    let highestID = 1;

    if (personsList) {
      for (let i = 0; i < personsList.length; i++) {
        if (personsList[i].id > highestID) {
          highestID = personsList[i].id + 1;
        }
      }
    }

    _handleAddPersons({ ...newPerson, id: highestID });

    setNewPerson(defaultPerson);

    // inputName.current._FocusTextInput();
  };

  return (
    <Fragment>
      <h1>Person information</h1>
      <UsersTable persons={personsList} />
      <UserForm newPerson={newPerson} handleChange={e => _onFormChange(e)} addUser={e => _addUser(e)} errors={errors} />
    </Fragment>
  );
};

export default UserContainer;
