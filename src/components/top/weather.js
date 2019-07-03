import React from 'react';
import SunImg from '../../resources/images/sun.jpg';
import './style.scss';

class WeatherComponent extends React.Component{
    render(){
        //const {temp,city} = this.props;
        console.log(`From inside the weather compoennt ${this.props.city}`);
        return (

            <div className="weather-container">
            <div className="header">{this.props.city}</div>
            <div className="inner-container">
              <div className="image">
                <img src={this.props.icon} alt="Sunny"/> 
              </div>
              <div className="current-weather">{this.props.temp}</div>
            </div>
            <div className="footer">{this.props.text}</div>
          </div>
        )
    }

}


export default WeatherComponent;