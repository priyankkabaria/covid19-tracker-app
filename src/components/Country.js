import React from 'react';

export default class Country extends React.Component {

    state = {
        selectedCountry: ""
    };
    
    handleCountryChangeEvent = (event) => {
        this.setState({
            selectedCountry: event.target.value
        });
        this.props.onChange(event.target.value);
    };


    render() {
        let countryNames = this.props.countries.map(country => {
            return {name: country.name, code: country.code, display: country.name}
        });
        countryNames = [{name: "", code: "", display: "(Select the country)"}]
                        .concat(countryNames);
        return (
            <div>
                <select 
                    value={this.state.selectedCountry}
                    onChange={this.handleCountryChangeEvent}>
                        {countryNames.map(
                            country => (
                                <option key={country.name} value={country.code}>
                                    {country.display}
                                </option>
                            )
                        )}
                </select>
            </div>
        );
    }
}