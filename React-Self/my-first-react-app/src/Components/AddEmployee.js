import React, { Fragment } from 'react';

const AddEmployee = ({ newEmployee, onHandleChangeEmployee, addNewEmployee }) => {
  return (
    <Fragment>
      <div>Add new employee</div>
      <input
        type="text"
        value={newEmployee}
        onChange={(e) => onHandleChangeEmployee(e)}
      />
      <button onClick={() => addNewEmployee()}>add new</button>
    </Fragment>
  )
}
export default AddEmployee;