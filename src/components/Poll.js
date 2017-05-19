import React, {Component} from 'react';

import Choice from './Choice';
import Button from './Button';

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
    });
    var styles = {
      list: {
        margin: 0,
        padding: 0
      }
    };
    return (
      <div>
        <ul style={styles.list}>{choices}</ul>
        <Button text="Vote" action={() => this.castVote(this.state.input)}/>
      </div>
    );
  }
}
