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

  onUpdateParent = (val) => {
    this.setState({
      fieldVal: val
    })
  };

  onUpdateChild = (val) => {
    this.setState({
      fieldVal2: val
    })
  };

  onSetStorage = (val) => {
    this.setState({
      terms: [val]
    })
    //console.log(this.state.array);
  };

  render() {
    return (
      <div>
        <Form onSetStorage={this.onSetStorage} />
        <Storage termsToPersist={this.state.terms} />
        <Definition />
      </div>
    )
  }
}

export default Main;


const style= {
  margin: 15
};
