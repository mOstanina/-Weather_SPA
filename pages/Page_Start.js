import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';//
import './Page_Start.css';
import CityToRender from '../components/CityToRender'
import isoFetch from 'isomorphic-fetch';
class Page_Start extends React.Component {

  static propTypes = {
    cityName: PropTypes.string,
    status: PropTypes.number,
  };

  state = {
    city: "minsk",
    cardMode: "1",
    minskWeather: null,
    moscowWeather: null,
    bratislavaWeather: null,
  }


  componentDidMount() {

    isoFetch("https://api.openweathermap.org/data/2.5/find?q=Minsk&cnt=3&appid=249fbfd08d5c0c42d1c7c7af0d1970cd&units=metric")
      .then((response) => {
        if (!response.ok) {
          let Err = new Error("fetch error " + response.status);
          Err.userMessage = "Ошибка связи";
          throw Err;
        }
        else
          return response.json();
      })
      .then((data) => {
        this.setState({ minskWeather: data });
      })
      .catch((error) => {
        console.error(error);
      });
    ///////////////////
    isoFetch("https://api.openweathermap.org/data/2.5/find?q=Moscow&cnt=3&appid=249fbfd08d5c0c42d1c7c7af0d1970cd&units=metric")
      .then((response) => {
        if (!response.ok) {
          let Err = new Error("fetch error " + response.status);
          Err.userMessage = "Ошибка связи";
          throw Err;
        }
        else
          return response.json();
      })
      .then((data) => {
        this.setState({ moscowWeather: data });
      })
      .catch((error) => {
        console.error(error);
      });
    ///////////////////
    isoFetch("https://api.openweathermap.org/data/2.5/find?q=Bratislava&cnt=3&appid=249fbfd08d5c0c42d1c7c7af0d1970cd&units=metric")
      .then((response) => {
        if (!response.ok) {
          let Err = new Error("fetch error " + response.status);
          Err.userMessage = "Ошибка связи";
          throw Err;
        }
        else
          return response.json();
      })
      .then((data) => {
        this.setState({ bratislavaWeather: data });
      })
      .catch((error) => {
        console.error(error);
      });

  }


  makeNewCity = () => {
    let cityName = this.props.match.params.cityName;
    var cityNameToRender;
    if (cityName === undefined) {
      cityNameToRender = "minsk"
    } else {
      cityNameToRender = cityName
    }
    return cityNameToRender
  }
  makeNewWeather = (nameOfCity) => {
    if (nameOfCity === "minsk") {
      return this.state.minskWeather
    }
    if (nameOfCity === "moscow") {
      return this.state.moscowWeather
    }
    if (nameOfCity === "bratislava") {
      return this.state.bratislavaWeather
    }
  }
  render() {
    if ((this.state.minskWeather === null) || (this.state.moscowWeather === null) || (this.state.bratislavaWeatherthis === null)) {
      return (
        <div>
          ...
        </div>

      );
    } else {
      var cityNameToRender = this.makeNewCity()
      var weatherInCity = this.makeNewWeather(cityNameToRender)
      return (
        <div className="pageContainerOfMainPageAboutUS">
          <div className="div_Page_Start">
            
            <NavLink to="/defaultCity/minsk" exact className="PageLink" activeClassName="ActivePageLink" >погода в Минске</NavLink>
            <NavLink to="/defaultCity/moscow" exact className="PageLink" activeClassName="ActivePageLink" >погода в Москве</NavLink>
            <NavLink to="/defaultCity/bratislava" exact className="PageLink" activeClassName="ActivePageLink" >погода в Братиславе</NavLink>

            <CityToRender cityName={cityNameToRender} weather={weatherInCity} />
          </div>

        </div>

      );
    }


  };

}





export default Page_Start;
