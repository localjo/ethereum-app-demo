import React, {Component} from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  render() {
    var { action, text } = this.props;
    var styles = {
      backgroundColor: this.state.hover?'#e1e8ed':'#f5f8fA',
      backgroundImage: this.state.hover?'linear-gradient(0rad,#e1e8ed,#fff)':'linear-gradient(0rad,#f5f8fA,#fff)',
      border: `1px solid ${this.state.hover?'#E1E1EA':'#e1e8ed'}`,
      borderRadius: '.25em',
      fontWeight: 700,
      marginTop: '.5em',
      padding: '.5em 1em',
      fontSize: 14,
      cursor: 'pointer'
    }
    return (
      <button
        style={styles}
        onMouseEnter={()=>this.toggleHover()}
        onMouseLeave={()=>this.toggleHover()}
        onClick={(params) => action(params)}
      >
        {text}
      </button>
    );
  }
}
