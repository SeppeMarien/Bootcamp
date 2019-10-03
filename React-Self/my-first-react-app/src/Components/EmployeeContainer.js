import React, { Fragment } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';

class EmployeeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: 'Euricom',
      employees: ['Peter', 'Niels', 'Kevin', 'Peter'],
      newEmployee: '',
    }
  }

  _onHandleChangeEmployee(e) {
    this.setState({
      newEmployee: e.target.value
    })
  }

  _addNewEmployee() {
    const { employees, newEmployee } = this.state;
    this.setState({
      employees: [
        {name: 'Peter', isAvailable: true},
        {name: 'Niels', isAvailable: false},
        {name: 'Kevin', isAvailable: true}
      ],
      newEmployee: ''
    })
  }

  render() {
    const { company, employees, newEmployee } = this.state;
    return (
      <Fragment>
        <h1>{company}</h1>
        <AddEmployee
          newEmployee={newEmployee}
          onHandleChangeEmployee={(e) => this._onHandleChangeEmployee(e)}
          addNewEmployee={(newEmployee) => this._addNewEmployee(newEmployee)}
        />
        <EmployeeList employees={employees} />
      </Fragment>
    )
  }
}

export default EmployeeContainer;