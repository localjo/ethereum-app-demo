import React, {Component} from 'react';

export default class Results extends Component {
  refresh() {
    this.props.refresh();
  }
  render() {
    var {results} = this.props;
    var totalVotes = results.reduce((acc, candidate)=>{return acc + candidate.count}, 0);
    var items = [];
    var styles = {
      list: {
        margin: 0,
        padding: 0
      },
      items: {
        listStyle: 'none',
        margin: '0 0 8px 0',
        height: 27,
        lineHeight: '27px',
        position: 'relative',
        text: {
          zIndex: 2,
          position: 'relative',
          margin: '0 6px'
        },
        progress: {
          borderRadius: 5,
          background: '#E1E8ED',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0
        }
      },
      links: {
        color: '#8899A6',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    };
    results.forEach((candidate)=>{
      var percent = ((candidate.count / totalVotes) * 100).toFixed();
      items.push(<li style={styles.items} key={candidate.name}>
        <span style={Object.assign({right: (100-percent)+'%'}, styles.items.progress)}></span>
        <span style={styles.items.text}><strong>{percent}%</strong> {candidate.name}</span>
      </li>);
    });
    return (
      <ul style={styles.list}>
        {items}
        <p style={{color: '#8899A6'}}>
          {totalVotes} votes • <a style={styles.links} onClick={()=>{this.refresh()}}>Refresh Results</a> • <a style={styles.links} href=''>Vote Again</a>
        </p>
      </ul>
    );
  }
}
