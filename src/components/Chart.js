import React from 'react';
import { LineChart } from 'react-chartkick'
import 'chart.js'
import '../styles/Chart.css'

export default class Chart extends React.Component {

    render() {
        let countryTimeline = this.props.countryTimeline;
        let countryData = [];
        let activeCases = {};
        let recoveredCases = {};
        let deathsCases = {};
        let confirmedCases = {};
        countryTimeline.forEach(
            country => {
                activeCases[country.date] = country.active;
                recoveredCases[country.date] = country.recovered;
                confirmedCases[country.date] = country.confirmed;
                deathsCases[country.date] = country.deaths;
            });
        countryData.push(
            {name: "Active", "data": activeCases}, 
            {name: "Confirmed", "data": confirmedCases},
            {name: "Deaths", "data": deathsCases},
            {name: "Recovered", "data":recoveredCases}
        );
        return (
            <div className="chart">
                <LineChart align="center"
                        width='75%'
                        data={countryData}/>
            </div>
        );
    }
}