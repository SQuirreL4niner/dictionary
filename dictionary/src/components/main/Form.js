import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Definition from './Definition';
import Storage from './Storage';

import './Main.css';

const termsArray = [];
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: []
    }
  };

  onSelectHistory = () => {
    window.location.href = "http://" + window.location.host + "/history"
  }

  onUpdate = (event) => {
    this.setState({ terms: event.target.value.split(',').map((item) => item.trim()) });
  };

  onSubmit = (val) => {
    termsArray.push(this.state.terms);
    this.props.onSetStorage(termsArray);
    this.storage.onPersist(this.state.terms);
    this.definition.onSearchDictionary(this.state.terms);
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
              <h3 style={style} >Enter search term below. If more than one please seperate each by commas</h3>
              <TextField
                className="Main"
                type="text"
                placeholder="enter term..."
                onChange={this.onUpdate}
                value={this.state.terms} />
              <Storage ref={instance => {this.storage = instance; }}style={style} />
              <br/><br/>
              <RaisedButton label="Seach" primary={true} className="Main"
                          onClick={(event) => this.onSubmit(event)}/>
              <br/>
              <br/>
              <RaisedButton label="History" secondary={true} className="Main"
                          onClick={() => this.onSelectHistory()}/>
              <br/>
              <br/>
              <Definition ref={instance => {this.definition = instance; }} />
      </MuiThemeProvider>
      </div>
    )
  }
}

export default Form;


const style= {
  margin: 20,
  width: '100%',
  textAlign: 'center'
};
