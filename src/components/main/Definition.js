import React, { Component } from 'react';

class Definition extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [{
        fieldVal: "",
        fieldVal2: "",
      }]
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

  onUpdateObject = (val) => {
    this.setState({
      array: [val]
    })
    console.log(this.state.array);
  };

  render() {
    return (
      <div>
        <br/>
        Hello Definition!
        <br/>
      </div>
    )
  }
}

export default Definition;


const style= {
  margin: 15
};
