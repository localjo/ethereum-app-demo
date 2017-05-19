import React, {Component} from 'react';

export default class Results extends Component {
  render() {
    var items = [];
    this.props.results.forEach((candidate)=>{
      items.push(<li key={candidate.name}>{candidate.name}: {candidate.count}</li>);
    });
    return (
      <div>
        <h2>Results</h2>
        <ul className="App">
          {items}
        </ul>
      </div>
    );
  }
}
