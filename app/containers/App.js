import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/app';

import Header from '../components/Header';
import Files from '../components/Files';

export default class App extends Component
{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { path, files } = this.props;

    return (
      <div>
        <Header path={path} handleClick={(e) => this.handleClick(e)} />
        <Files files={files} />
      </div>
    );
  }

  handleClick(event) {
    this.props.dispatch(action.selectDirectory());
  }
}

function select(state) {
    return state;
}

export default connect(select)(App);
