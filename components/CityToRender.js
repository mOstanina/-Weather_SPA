//Page_All_Music_to_Render
import React from 'react';
import PropTypes, { func } from 'prop-types';

import City from './city';
//import "./Page_All_Music.css"


import "../pages/Page_All_Music.css"
class CityToRender extends React.PureComponent {
    static propTypes = {
        cityName: PropTypes.string,
        weather: PropTypes.object,
    };
    state = {
        cityName: this.props.cityName
    }

    render() {
        console.log(this.props.weather)
        return (

            <div className="pageContainerOfMainPage">

                <City cityName={this.props.cityName} cardMode={"1"} weather={this.props.weather}/>

            </div>
        );

    };
}
export default CityToRender;