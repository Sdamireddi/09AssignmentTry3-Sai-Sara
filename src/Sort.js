import React, { Component } from 'react';
import './Sort.css'

class Sort extends Component {
  render() {
    return (
      <div>
        <button type="submit" id="sort" onClick={() => this.props.sortList()}>Sort</button>
      </div>
    );
  }
}

export default Sort;
