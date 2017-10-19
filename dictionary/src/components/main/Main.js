import React, { Component } from 'react';

import Form from './Form';
import Storage from './Storage';
import Definition from './Definition';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      terms: []
    }
  }

  onSearchDictionary = (val) => {
    this.setState({
      data: [val]
    })
  };

  onSetStorage = (val) => {
    this.setState({
      terms: [val]
    })
  };

  render() {
    return (
      <div>
        <Form onSetStorage={this.onSetStorage} />
        <Storage termsToPersist={this.state.terms} />
      </div>
    )
  }
}

export default Main;


const style= {
  margin: 15
};
