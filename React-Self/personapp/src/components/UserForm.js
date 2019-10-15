import React, { Fragment, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserForm = props => {
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const { newPerson, handleChange, addUser, errors } = props;

  console.log('test');
  return (
    <Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          addUser(e);
        }}
      >
        <div className="form-group">
          <div style={{ backgroundColor: 'red', color: 'white' }}>{errors && errors.invalidName}</div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            className="form-control"
            onChange={e => handleChange(e)}
            value={newPerson.name}
            placeholder="Enter name"
            ref={nameRef}
          />
        </div>
        <div className="form-group">
          <div style={{ backgroundColor: 'red', color: 'white' }}>{errors && errors.invalidMail}</div>
          <label>Email</label>
          <input
            id="email"
            name="email"
            className="form-control"
            onChange={e => handleChange(e)}
            value={newPerson.email}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <div style={{ backgroundColor: 'red', color: 'white' }}>{errors && errors.invalidAge}</div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            className="form-control"
            onChange={e => handleChange(e)}
            value={newPerson.age}
            placeholder="Enter age"
          />
        </div>
        <div style={{ backgroundColor: 'red', color: 'white' }}>{errors && errors.invalidBirthday}</div>
        <div className="form-group">
          <label htmlFor="birthday">birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="form-control"
            onChange={e => handleChange(e)}
            value={newPerson.birthday}
          />
        </div>
        <div className="form-group">
          <label htmlFor="married">Married</label>
          <input
            id="married"
            name="married"
            className="form-control"
            onChange={e => handleChange(e)}
            value={newPerson.married}
            type="checkbox"
          />
        </div>
        <button className="btn btn-default">Submit</button>
      </form>
    </Fragment>
  );
};

UserForm.propTypes = {
  newPersons: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    married: PropTypes.bool.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default UserForm;
