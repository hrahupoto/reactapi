import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import NavBar from './components/NavBar'
import { TextField } from '@material-ui/core';

class App extends Component {


  render() {
    return (

      <div>
        <NavBar />
        <Form />


        {getData()}
        <bar></bar>
        <TextField id='txtField0' type="text"></TextField><br></br>
        <TextField id='txtField1' type="text"></TextField><br></br>
        <TextField id='txtField2' type="text"></TextField><br></br>
        <TextField id='txtField3' type="text"></TextField><br></br>
        <TextField id='txtField4' type="text"></TextField><br></br>
        <TextField id='txtField5' type="text"></TextField><br></br>
        <TextField id='txtField6' type="text"></TextField><br></br>
      </div>







    );

  }

}


function getData() {
  var field = localStorage.getItem('field');
  var array = [];
  if (field != null) {
    let url = 'https://api.covid19api.com/country/' + field;
    fetch(url).then((response) => response.json()).then(function (data) {
      array = data[data.length - 1]
      console.log(array.Country);

      document.getElementById('txtField0').setAttribute('value','Country: '+array.Country);
      document.getElementById('txtField1').setAttribute('value','Province: '+array.Province);
      document.getElementById('txtField2').setAttribute('value','Confirmed: '+array.Confirmed);
      document.getElementById('txtField3').setAttribute('value','Deaths: '+array.Deaths);
      document.getElementById('txtField4').setAttribute('value','Recovered: '+array.Recovered);
      document.getElementById('txtField5').setAttribute('value','Active: '+array.Active);
      document.getElementById('txtField6').setAttribute('value','Date: '+array.Date);
    })
  }
  else {
    field = null;
  }

  localStorage.removeItem('field')

};


export default App;
