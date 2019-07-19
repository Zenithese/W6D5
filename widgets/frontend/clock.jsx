import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    const date = new Date();
    this.state = { time: date };
    this.tickity = this.tickity.bind(this);
  }

  tickity () {
    const newDate = new Date();
    this.setState({ time: newDate });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tickity, 1);
  }

  compnentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="clock">
        <p>Tickity Tockity</p>
        <section className="date">
          <p>~*~Date~*~</p>
          <p className="time">{`${this.state.time.getDate()}`}</p>
        </section>
        <section className="time">
          <p>~*~Time~*~</p>
          <p className="time">{`${this.state.time.getUTCHours()}:${this.state.time.getUTCMinutes()}:${this.state.time.getUTCSeconds()}:${this.state.time.getUTCMilliseconds()}` }</p>
        </section>
      </div>
      )
  }
}

export default Clock;