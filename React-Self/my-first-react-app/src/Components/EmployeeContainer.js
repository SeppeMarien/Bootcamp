import React, { Fragment } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';

class EmployeeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Persons ' ,
      employees: [
        {
          name: 'Peter',
          isAvailable: false
        }, 
        { 
          name: 'Louis',
          isAvailable: true
        }, 
        {
          name: 'Ludwig',
          isAvailable: false
        }, 
        {
          name: 'Seppe',
          isAvailable:true
        }
      ],
      newEmployee: '',
      errors: {}
    }

    this.textInput = React.createRef()
  }

  componentDidUpdate(preprop, prevState) {
    if(prevState.employees !== this.state.employees) {
      this.setState({
        title: "People " + this.state.employees.length
      })
    }
  }

  componentDidMount() {
    this.setState({
      title: "People " + this.state.employees.length
    })

    this.textInput.current._FocusTextInput();
  }

  _addNewEmployee(newEmployee) {
    const { employees } = this.state;
    
    
    if(this._isValid(newEmployee)){
      if(newEmployee.trim() !== '') {
        this.setState({
          employees: [...employees, {name: newEmployee, isAvailable: true}],
        })
      }
    }
  }

  _changeAvailability(e) {
    this.setState({
      employees: this.state.employees.map((employee, indx) => {
        if(Number(e.target.id) === indx && e.target.innerHTML === employee.name) {
          employee.isAvailable = !employee.isAvailable;
        }
        return employee;
      })
    })
  }

  _isValid(newEmployee) {
    let isValid = true;
    const errors = {};
    

    if(newEmployee.length < 3) {
      isValid = false;
      errors.newEmployee = "Name of new Employee must be at least 3 characters!";
    }

    this.setState({
      errors: errors
    })

    return isValid;
  }

  render() {
    const { title, employees, errors } = this.state;
    console.log('container: render');
    
    return (
      <Fragment>
        <h1>{title}</h1>
        <AddEmployee
          addNewEmployee={(test) => this._addNewEmployee(test)}
          errors={errors}
          ref={this.textInput}
        />
        <EmployeeList onClickFunction={(e) => this._changeAvailability(e)} employees={employees} />
      </Fragment>
    )
  }
}

export default EmployeeContainer;