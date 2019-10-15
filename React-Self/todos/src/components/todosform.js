import React, { Fragment } from 'react';
import styles from '../Styles/form.module.css';

class todosform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        isDone: false,
        title: "Completing this assignment."
      }],
      newItem: ''
    }
  }

  _AddItem(e) {
    const {items, newItem} = this.state;
    this.setState({
      items: [...items, {
        isDone: false,
        title: newItem
      }],
      newItem: '',
    })
  }

  _CompleteItem(e) {
    const items = this.state.items;
    const index = Number(e.target.id.split('_')[1]);
    console.log(index);
    
    const newItems = items.map((item, indx) => {
      console.log(indx);
      
      if(indx === index) {
        return {...item, isDone: !item.isDone}
      }

      return item;
    })

    this.setState({
      items: newItems
    })
  }

  _HandleChange(e) {
    this.setState({
      newItem: e.target.value
    });
  }


  render() {
    const {items} = this.state;
    const stillToComplete = items.filter((item) => !item.isDone);
    
    return(
      <Fragment>
        <form onSubmit={e => {
                e.preventDefault();
                this._AddItem(e);}}>
          <input onChange={e => this._HandleChange(e)} value={this.state.newItem} className="form-control" type="text" placeholder="What needs to be done?"/>
        </form>
        <hr></hr>
        <div>
          {items.map((item, index) => (
            <div key={`${index}_${item}`} className={styles.formContainer}>
              <input onClick={(e) => this._CompleteItem(e)} type="checkbox" className="" id={`completed_${index}`} />
              <label className="form-check-label" htmlFor={`completed${index}`}>{item.title}</label>
              <hr></hr>
            </div>
          ))}
        </div>
        <div>
          {`${stillToComplete.length} items left`}
        </div>
      </Fragment>
    )
  }
}

export default todosform;