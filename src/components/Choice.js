import React, {Component} from 'react';

export default class Choice extends Component {

  render() {
    var { name, onChange } = this.props;
    var slug = name.toLowerCase().replace(/\s/g, '-');
    var styles = {
      listStyle: 'none',
      margin: '0 0 8px 0',
      height: 27,
      cursor: 'pointer',
      input: {
        margin: '0 9px 0 0',
        cursor: 'pointer'
      },
      label: {
        cursor: 'pointer'
      }
    }
    return (
      <li style={styles}>
        <label style={styles.label} htmlFor={slug}>
          <input style={styles.input} onChange={onChange} type='radio' name='choice' id={slug} value={name}/>
          {name}
        </label>
      </li>
    );
  }
}
