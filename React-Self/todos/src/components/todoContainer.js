import React, { Fragment } from 'react';
import Todosform from './todosform';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.test = 0;
  }


  render() {
    return(
      <Fragment>
        <h1>todos</h1>
        <Todosform />
      </Fragment>
      
    )
  }
}

export default TodoContainer;