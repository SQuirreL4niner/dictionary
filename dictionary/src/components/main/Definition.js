import React, { Component } from 'react';

import axios from 'axios';
import Dictionary from 'oxford-dictionary-api';

class Definition extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: [],
      data: [],
      definitionData: [{
        term: "",
        definition: ""
      }]
    }
  };

  onSearchDictionary = (terms) => {
    let definitionData = [];
<<<<<<< HEAD
    let url = "http://Docker-ExternalLoa-1TT9HKQZXUOPU-1777478783.us-west-2.elb.amazonaws.com:3000/dictionary/";
=======
	let url = 'http://docker-externalloa-1tt9hkqzxuopu-1777478783.us-west-2.elb.amazonaws.com:3000/dictionary/';
>>>>>>> 3b536223c242a5ff7d93d6cb522a9faba4f577af
    terms.forEach(value => {
      let tempDataArray = [];
      let dataArray = [];
      fetch(url + value).then(results => {
        return results.json();
      }).then(data => {
        tempDataArray = data.results[0].lexicalEntries[0].entries[0].senses;
        console.log(tempDataArray);
        for(var i = 0; i < tempDataArray.length; i++){
          dataArray.push(tempDataArray[i].definitions[0]);
        }
        dataArray.forEach(y => {
          definitionData.push({term:value, definition:y});
        })
        this.setState({definitionData:definitionData});
      });
    });
  };



  render() {
    return (
      <div>
        <br/>
        <table className="table" style={style}>
          <thead>
            <th style={style}>
              Term
            </th>
            <th style={style}>
              Definition
            </th>
          </thead>
          <tbody>
              {this.state.definitionData.map(function(value, index){
                  return <tr><td key={ value.definition } style={style}>
                    {value.term}</td><td> {value.definition}</td></tr>
                })}
          </tbody>
        </table>
        <br/>
      </div>
    )
  }
}

export default Definition;

const style= {
  margin: 35
};
