import React, {Component} from 'react';

export default class Choice extends Component {

  render() {
    var { name, onChange } = this.props;
    var slug = name.toLowerCase().replace(/\s/g, '-');
    return (
      <li>
        <label htmlFor={slug}>
          <input onChange={onChange} type='radio' name='choice' id={slug} value={name}/>
          {name}
        </label>
      </li>
    );
  }
}
