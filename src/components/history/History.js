import React, { Component } from 'react';

let history = [];
class History extends React.Component {

  constructor(){
    super();
    console.log('is this firing');
    //var temp = [];
    history = window.localStorage.getItem("terms").split(',')
    .map((item) => item.trim());
    //temp =
    //history.push(window.localStorage.getItem("terms"));
  }

  render() {
    return (
      <div>
        <br/>
        {history.map(function(name, index){
          return <li key={index}>{name}</li>
        })}
        <br/>
      </div>
    )
  }
}

export default History;


const style= {
  margin: 15
};
