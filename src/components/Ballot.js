import React, {Component} from 'react';

export default class Ballot extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  castVote(candidate) {
    if (this.props.candidates.includes(candidate)) {
      this.props.vote(candidate);
    } else {
      console.warn(`You tried to vote for a candidate that isn't running.`);
    }
  }

  updateInput(evt) {
    this.setState({input: evt.target.value});
  }

  render() {
    return (
      <div>
        <h2>Ballot</h2>
        <input value={this.state.input} onChange={evt => this.updateInput(evt)} placeholder='Type candidate name here.'/>
        <button onClick={() => this.castVote(this.state.input)}>Vote</button>
      </div>
    );
  }
}
