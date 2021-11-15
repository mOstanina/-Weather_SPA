import React from 'react';
import PropTypes from 'prop-types';
import isoFetch from 'isomorphic-fetch';
import WeatherDay from "./WeatherDay";


class City extends React.PureComponent {
    static propTypes = {
        cityName: PropTypes.string,
        cardMode: PropTypes.string,
        weather: PropTypes.object,
    };
    state = {
        cityName: this.props.cityName,
        listOfDays: this.props.weather.list
    }

    componentWillReceiveProps = (newProps) => {
        let url = window.location.href
        console.log(url)
        var aa = /^(([^:/?#]+):)?(\/\/([^/?#]*))?\/search\//g
        var newUrl = url.match(aa)
        console.log(newUrl)
        newUrl=url.split(newUrl)
        console.log(newUrl[1])
        this.setState({
            cityName: newUrl,
            listOfDays: newProps.weather.list
        });
    };

    componentDidMount() {
        let url = window.location.href
        console.log(url)
        var aa = /^(([^:/?#]+):)?(\/\/([^/?#]*))?\/search\//g
        var newUrl = url.match(aa)
        console.log(newUrl)
        newUrl=url.split(newUrl)
        console.log(newUrl[1])
        this.setState({
            cityName: newUrl,
        });
    }



    render() {
        let lisiWeatherDays = this.state.listOfDays.map((day, i) => {
            console.log(day.dt)
            var dayNumber=new Date(day.dt * 1000).getDate()
            var monthNumber=new Date(day.dt * 1000).getMonth()+1
            var year=new Date(day.dt * 1000).getFullYear()
        
            return <WeatherDay key={day.id} data={day} date={dayNumber+i +"."+ monthNumber +"."+year} />

        })
        return (

            <div>
                <h3>Weather in {this.state.listOfDays[0].name}</h3>
                {lisiWeatherDays}
            </div>
        )



    }
}

export default City;