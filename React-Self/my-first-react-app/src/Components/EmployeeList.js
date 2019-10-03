import React, { Fragment } from 'react';

export default class EmployeeList extends React.Component {
  render() {
    return (
      <Fragment>
      <h3>Employees</h3>
      <ul>
        {props.employees.map((employee, index) => (
          <li key={`${index}_${employee.name}`}>
            <p style={{ 'color': employee.isAvailable ? 'green' : 'red' }}>{employee.name}</p>
          </li>
        ))}
      </ul>
    </Fragment>
    )
  }
}