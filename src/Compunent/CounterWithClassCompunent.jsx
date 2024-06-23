import React from "react";

class CounterWithClassCompunent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log(this)
    const { count } = this.state;
    return (
      <button
        onClick={() => this.setState({ count: count + 1 })}
        className="border-green-500"
      >
        {count}
      </button>
    );
  }
}

export default CounterWithClassCompunent;
