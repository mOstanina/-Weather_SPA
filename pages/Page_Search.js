import React from 'react';
import PropTypes from 'prop-types';
import isoFetch from 'isomorphic-fetch';
import './Page_About.css';
import CityToRender from '../components/CityToRender'


class Page_Search extends React.Component {

  static propTypes = {

  };
  state = {
    cityName: "minsk",
    wetherInfo: null,
    error: false,
  }

  componentDidMount() {
    this.toGetInfo("Minsk")
  }
  componentWillReceiveProps = (newProps) => {
    this.toGetInfo(newProps.cityName)
  };

  toGetInfo = (city) => {
    isoFetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&cnt=10&appid=249fbfd08d5c0c42d1c7c7af0d1970cd&units=metric`)
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
        this.setState({ wetherInfo: data, error: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: true });
      });
  }

  toGetWeather = (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value
    console.log(city)
    this.setState({ cityName: city });
    this.toGetInfo(city)
    let url = window.location.href
    console.log(url)
    var aa = /^(([^:/?#]+):)?(\/\/([^/?#]*))?\/search\//g
    url = url.match(aa)
    console.log(url)
    history.pushState({}, null, url + city);

  }
  render() {
    if ((this.state.wetherInfo === null)) {
      return (
        <div>
          ...
        </div>

      );
    } else {
      return (
        <div>
          <form onSubmit={this.toGetWeather}>
            <input type="text" name="city" plaseholder="city" />
            <button>Done!</button>
          </form>
          <div>
            <CityToRender cityName={this.state.cityName} weather={this.state.wetherInfo} />
          </div>
        </div>
      );
    }
  };

}
export default Page_Search;
