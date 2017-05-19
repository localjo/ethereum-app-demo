import React, {Component} from 'react';
import avatar from '../avatar.png';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  render() {
    var styles = {
      display: 'block',
      textDecoration: 'none',
      color: this.state.hover?'#2FC2EF':'#14171a',
      avatar: {
        width: 48,
        height: 48,
        borderRadius: 5,
        float: 'left',
        marginRight: 10,
        marginBottom: 10
      },
      title: {
        fontSize: 18,
        margin: 0,
        paddingTop: 4,
        textDecoration: this.state.hover?'underline':'none',
      },
      subtitle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#657786',
        margin: '6px 0'
      }
    }
    return (
      <a style={styles}
        href="/"
        onMouseEnter={()=>this.toggleHover()}
        onMouseLeave={()=>this.toggleHover()}
      >
        <img style={styles.avatar} src={avatar} alt='Avatar' />
        <h1 style={styles.title}>Blockchain FTW</h1>
        <h2 style={styles.subtitle}>@BlockchainFTW</h2>
      </a>
    );
  }
}
