import React, { Component, PropTypes } from 'react';

export default class Header extends Component
{
  render() {
    const { path, handleClick } = this.props;

    return (
      <div>
        <input type="text" value={path} readOnly />
        <button onClick={handleClick}>Open</button>
      </div>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}
