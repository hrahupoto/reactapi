import React from 'react';
import './App.css';
import Form from './components/Form'
import NavBar from './components/NavBar'

function App() {


  return (

    <div id="form-body" style={{backgroundSize:'100% 100%'}}>
      <NavBar />
      <Form />


      {getData()}
      <br></br>
      <input id='txtField0' type="text" disabled='disabled' style={{backgroundColor:'HighlightText'}}></input>
      <br></br>
      <br></br>
      <input id='txtField1' type="text" disabled='disabled' style={{backgroundColor:'HighlightText'}}></input><br></br>
      <br></br>
      <input id='txtField2' type="text" disabled='disabled' style={{backgroundColor:'HighlightText'}}></input><br></br>
      <br></br>
      <input id='txtField3' type="text" disabled='disabled' style={{backgroundColor:'HighlightText'}}></input><br></br>
      <br></br>
      <input id='txtField4' type="text" disabled='disabled' style={{backgroundColor:'HighlightText'}}></input><br></br>
      <br></br>
      <input id='txtField5' type="text" disabled='disabled' style={{backgroundColor:'HighlightText'}}></input><br></br>
      <br></br>
      <input id='txtField6' type="text" disabled='disabled' style={{backgroundColor:'HighlightText'}}></input><br></br>
    </div>







  );



}


function getData() {
  var field = localStorage.getItem('field');
  var array = [];
  if (field != null) {
    let url = 'https://api.covid19api.com/country/' + field;
    fetch(url).then((response) => response.json()).then(function (data) {
      array = data[data.length - 1]
      console.log(array.Country);

      document.getElementById('txtField0').setAttribute('value', 'Country: ' + array.Country);
      document.getElementById('txtField1').setAttribute('value', 'Province: ' + array.Province);
      document.getElementById('txtField2').setAttribute('value', 'Confirmed: ' + array.Confirmed);
      document.getElementById('txtField3').setAttribute('value', 'Deaths: ' + array.Deaths);
      document.getElementById('txtField4').setAttribute('value', 'Recovered: ' + array.Recovered);
      document.getElementById('txtField5').setAttribute('value', 'Active: ' + array.Active);
      document.getElementById('txtField6').setAttribute('value', 'Date: ' + array.Date);

      document.getElementById('form-body').style.backgroundImage = `url(${require('./Flags/'+array.CountryCode.toLowerCase()+'.png')})`
    })
  }
  else {
    field = null;
  }

  localStorage.removeItem('field')

};


export default App;
