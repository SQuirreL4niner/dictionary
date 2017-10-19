import React, { Component } from 'react';

let history = [];
class History extends React.Component {

  constructor(){
    super();
    console.log('is this firing');
    history = window.localStorage.getItem("terms").split(',')
    .map((item) => item.trim());
  }

  onGoBack = () => {
    window.location.href = "http://" + window.location.host + "/"
  }

  render() {
    return (
      <div>
        <br/>
        <h1 style={style}>History</h1>
        <button type="button" style={style} onClick={(event) => this.onGoBack(event)} className="btn btn-info">Back</button>
        <table className="table" style={style}>
          <thead>
            <th style={style}>
              Term
            </th>
          </thead>
          <tbody>
            {history.map(function(name, index){
              return <tr><td key={index}>{name}</td></tr>
            })}
          </tbody>
        </table>
        <br/>
      </div>
    )
  }
}

export default History;

const style= {
  margin: 35
};
