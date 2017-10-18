import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// import Main from '../components/main/Main';
 import Storage from './Storage';

const termsArray = [];
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: []
    }
  };

  onUpdate = (event) => {
    //this.props.onSetStorage(event.target.value);
    this.setState({ terms: event.target.value.split(',').map((item) => item.trim()) });
  };

  onSubmit = (val) => {
    termsArray.push(this.state.terms);
    this.props.onSetStorage(termsArray);
    this.child.onPersist(this.state.terms);
    //this.setState(terms:terms);
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
              <h3>Enter search term below. If more than one please seperate each by commas</h3>
              <TextField
                style={style}
                type="text"
                placeholder="enter term..."
                onChange={this.onUpdate}
                value={this.state.terms} />
              <Storage ref={instance => {this.child = instance; }} />
              <RaisedButton label="Submit Seach" style={style} primary={true} style={style}
                          onClick={(event) => this.onSubmit(event)}/>
      </MuiThemeProvider>
      </div>
    )
  }
}

export default Form;


const style= {
  margin: 15
};
