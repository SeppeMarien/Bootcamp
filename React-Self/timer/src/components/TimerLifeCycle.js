import React, { Fragment } from 'react';

class TimerLifeCycle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      counter: ''
    }
  }

  _Count() {
    const stateTimer = this.state.counter;
    let timer = 0;

    console.log('state timer', timer);
    
    timer = window.setInterval(() => {
      this.setState({count: this.state.count + 1}) 
      console.log('in interval');
      
    }, this.props.timerInterval);

    this.setState({counter: timer});
  }

  componentDidUpdate(prevProps) {
    const stateTimer = this.state.counter;
    let timer = 0;

    if(prevProps.timerInterval !== this.props.timerInterval && stateTimer !== '') {
      this._Pause();
      this._Count();
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.counter);
  }

  _Pause() {
    window.clearInterval(this.state.counter);
    this.setState({
      counter: ''
    });
  }

  _Reset() {
    this.setState({count: 0});
    this._Pause();
  }

  render() {
    console.log('triggered render timer');
    
    const {count} = this.state;


    return (
      <Fragment>
      <div>
        <h1>{count}</h1> 
        <button onClick={e => this._Count()}>Start</button>
        <button onClick={e => this._Pause()}>Stop</button>
        <button onClick={e => this._Reset()}>Reset</button>
      </div>
      </Fragment>
    )
  }
}

export default TimerLifeCycle;