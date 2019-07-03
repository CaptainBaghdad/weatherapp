import React from 'react';
import TopSection from './components/top/index';
import BottomSection from './components/bottom/index';
import './components/top/style.scss';


import './sass/app.scss';






class  App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      city: 'new york',
      days: 0,
      isLoading: false,
      temp: 10
    }
    this.getTheWeather();
  }
  

  updateTheWeather = (newCity) =>{
    let Key = '773b870d74654cdc869171459190107';
    const {city,days,isLoading, temp, icon,text} = this.state;
    

    const URL = `https://api.apixu.com/v1/current.json?key=${Key}&q=${newCity}`;
    fetch(`${URL}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        city: data.location.name,
        temp: data.current.temp_f,
        icon: data.current.condition.icon,
        text: data.current.condition.text

      })
     // console.log(`This is the response location ${Object.keys(data)}`)
     //console.log(`This is the response location ${data.current.icon}`)
    // console.log(`This is the response location ${data.current.condition.icon}`)
     //console.log(`This is the response current ${Object.keys(data.current)}`)
    return data;
     
    })

   // console.log(`From the UPDATE function ${this.state.city}`);

  }
  

  getTheWeather = () => {
    let Key = '773b870d74654cdc869171459190107';
    //let defaultCity = 'new york'
    
    const {city,days,isLoading, temp, icon,text} = this.state;
    const URL = `https://api.apixu.com/v1/current.json?key=${Key}&q=${city}`;
      fetch(`${URL}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          city: data.location.name,
          temp: data.current.temp_f,
        icon: data.current.condition.icon,
        text: data.current.condition.text
          
        })
       // console.log(`This is the response location ${Object.keys(data)}`)
       //console.log(`This is the response location ${data.current.icon}`)
       return data
       
      })
       
    }

      componentDidMount(){
        
       //this.getTheWeather();
 }

 
   
   

 


  render(){
    return (
      <div className="app-container">
            <div className="main-container">
            { this.state.isLoading && <h3>Loading Weather</h3>}
            {!this.state.isLoading && 
            <div className="top-section">
            
            <TopSection 
           
            getTheWeather={this.getTheWeather} 
            updateTheWeather={this.updateTheWeather}
            temp={this.state.temp}
            city={this.state.city}
            text={this.state.text}
            icon={this.state.icon}
            
            />
            </div>
            }

            <div className="bottom-section"><BottomSection/></div>
            
            
           
            
            </div>
          </div>
    )

  }
  
}

export default App;
