import React from 'react';
import './App.css';
import Country from './components/Country'
import Chart from './components/Chart'

export default class App extends React.Component {

  countryCodeToCountryInfo = {};
  selectedCountryTimeline = [];
  state = {
    countryInfo: [],
    selectedCountryCode: "",
    selectedCountryTimeline: []
  };

  componentDidMount() {
    fetch('https://corona-api.com/countries').then((response) => {
        return response.json();
    }).then(data => {
        let countryData = data.data;
        countryData.forEach(country => {
          this.countryCodeToCountryInfo[country.code] = country;
        });
        this.setState({
          countryInfo: countryData
        });
    }).catch(error => {
        console.log(error);
    });
  }

  fetchCountryCovidStats = (countryCode) => {
    if (countryCode) {
      fetch('https://corona-api.com/countries/'+countryCode).then((response) => {
        return response.json();
      }).then(data => {
        this.setState({
          selectedCountryCode: countryCode,
          selectedCountryTimeline: data.data.timeline
        });
      }).catch(error => {
        console.log(error);
      });
    } else {
      this.setState({
        selectedCountryCode: "",
        selectedCountryTimeline: []
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Covid-19 Tracker
        </header>
        <Country countries={this.state.countryInfo} onChange={this.fetchCountryCovidStats}/>
        <Chart countryTimeline={this.state.selectedCountryTimeline}/>
      </div>
    );  
  }
}

