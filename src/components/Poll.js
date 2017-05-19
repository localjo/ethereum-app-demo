import React, {Component} from 'react';

import Choice from './Choice';

export default class Poll extends Component {
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
    var candidates = this.props.candidates;
    var choices = candidates.map((name)=>{
      return (<Choice key={name} name={name} onChange={evt => this.updateInput(evt)} />);
    })
    return (
      <div>
        {choices}
        <button onClick={() => this.castVote(this.state.input)}>Vote</button>
      </div>
    );
  }
}
