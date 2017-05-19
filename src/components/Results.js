import React, {Component} from 'react';

export default class Results extends Component {
  render() {
    var items = [];
    this.props.results.forEach((candidate)=>{
      items.push(<li key={candidate.name}>{candidate.name}: {candidate.count}</li>);
    });
    return (
      <ul>
        {items}
      </ul>
    );
  }
}
