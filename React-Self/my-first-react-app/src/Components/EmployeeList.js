import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    console.log('Add employee update', prevProps, this.props);
  }

  shouldComponentUpdate(prevProps) {
    if(prevProps.employees !== this.props.employees){
      return true;
    }
    return false;
  }

  render() {
    console.log('employeeslist render');
    
    const {employees, onClickFunction} = this.props;
    return (
    <Fragment>
    <h3>Employees</h3>
    <ul>
      {employees.map((employee, index) => (
        <li key={`${index}_${employee.name}`}>
          <p id={index} onClick={(e) => onClickFunction(e)} style={{ 'color': employee.isAvailable ? 'green' : 'red' }}>{employee.name}</p>
        </li>
      ))}
    </ul>
  </Fragment>
  )
}
}

EmployeeList.propTypes =  {
  employees: PropTypes.array.isRequired,
  onClickFunction: PropTypes.func.isRequired
}

EmployeeList.defaultProps = {
  employees: [{name: 'Seppe', isAvailable: true}]
}

export default EmployeeList;
