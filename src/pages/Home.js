import React from 'react';
import './index.css';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        }
    }
    
    componentDidMount() {
        fetch('https://api.covidtracking.com/v1/states/ca/current.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <li key={items.state}>
                    <h1>{items.state}</h1><br />
                    <p>Positive Cases: {items.positive}</p><br />
                    <p>Negative Cases: {items.negative}</p><br />
                    <p>Number of People Currently Hospitalized: {items.hospitalizedCurrently}</p><br />
                    <p>Total Deaths: {items.death}</p><br />
                </li>
                    )}
        }

}

export default Home;
