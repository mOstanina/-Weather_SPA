
import React from 'react';
import PropTypes from 'prop-types';

class WeatherDay extends React.PureComponent {
    static propTypes = {
        data: PropTypes.object,
        date: PropTypes.string,
    };

    render() {
        var date1 = new Date(this.props.data.dt);
        console.log(this.props.data)
        console.log(new Date(this.props.data.dt * 1000).toDateString())
        //console.log(this.props.date)
        return (

            <div className="WeatherDayCard">
                {/* <p>{new Date(this.props.data.dt * 1000).toDateString()}</p> */}
                <p>{this.props.date}</p>
                <p><span>температура воздуха: </span>{this.props.data.main.temp}</p>
                <hr/>
            </div>

        );

    }
}
export default WeatherDay;
