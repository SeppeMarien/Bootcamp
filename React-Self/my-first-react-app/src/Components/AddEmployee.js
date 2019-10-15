import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


class AddEmployee extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      newEmployee: ''
    })

    this.textInput = React.createRef();
  }

  _onHandleChangeEmployee(e) {
    this.setState({
      newEmployee: e.target.value
    })
  }

  _FocusTextInput = () => {
    this.textInput.current.focus();
  }

  render() {
    const { addNewEmployee, errors } = this.props;
    const {newEmployee} = this.state;

    return (<Fragment>
      <div>Add new employee</div>
      <div style={{backgroundColor: 'red', color: 'white'}}>{errors.newEmployee}</div>
      <input
        type="text"
        value={newEmployee}
        onChange={(e) => this._onHandleChangeEmployee(e)}
        ref={this.textInput}
      />
      <button onClick={() => addNewEmployee(newEmployee)}>add new</button>
      <button onClick={this._FocusTextInput}>Focus input</button>
    </Fragment>
     )}
}

AddEmployee.propTypes = {
  newEmployee: PropTypes.string.isRequired,
  addNewEmployee: PropTypes.func.isRequired
}

export default AddEmployee;