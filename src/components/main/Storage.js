import React, { Component } from 'react';

class Storage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: []
    }
  };

  onPersist = (terms) => {
    if(window.localStorage.getItem('terms')){
      var temp = [];
      temp = window.localStorage.getItem('terms').split(',').map((item) => item.trim());
      terms.forEach(value => {
        temp.push(value);
      })
      window.localStorage.setItem('terms', temp);
    } else window.localStorage.setItem('terms', terms);
    console.log('history saved')
    console.log(window.localStorage.getItem('terms'))
  };

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Storage;


const style= {
  margin: 15
};
