import React, { Component, PropTypes } from 'react';

export default class Header extends Component
{
  render() {
      const { files } = this.props;

      return (0 < files.length)
        ? this.renderFiles()
        : <small>empty</small>
  }

  renderFiles() {
    const { files, handleClick } = this.props;

    return (
      <ul className="files">
        {(files).map((file, key) => (
          <li key={key}>{file}</li>
        ))}
      </ul>
    );
  }
}

Header.propTypes = {
  files: PropTypes.array.isRequired
}
